import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseComponent } from '../BaseComponent';
import { Launch } from '../model/launch';
import { ReloadService } from '../reload.service';
import { SpaceXService } from '../space-x.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent extends BaseComponent implements OnInit, AfterViewInit, OnDestroy {

  launchData: Launch[];
  notifier = new Subject()
  initialLoad: boolean = false;

  constructor(private route: ActivatedRoute, private spaceXService: SpaceXService, private router: Router,
    private reloadService: ReloadService) {
    super();
  }

  ngOnInit(): void {
    //Checking whether the filters and hence the URL has been modified.
    this.route.queryParams.subscribe(params => {
      const urlPartition = this.router.url.split('?');
      let queryString = '';
      if (urlPartition.length > 1) {
        queryString = `&${urlPartition[1]}`;
      }
      this.getLaunchData(queryString);
      if (!this.initialLoad) { //Retain filters if page is reloaded
        this.reloadService.onPageReload.emit(params);
        this.initialLoad = false;
      }
    });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    /*
    Show spinner on initial page load. 
    Code written in ngAfterViewInit because the view isn't rendered yet when the get service is called in ngOnInit.
    */
    if (!this.launchData) {
      this.showSpinner('launchSpinner');
    }
  }

  getLaunchData(params: string) {
    this.showSpinner('launchSpinner');
    this.spaceXService.getLaunches(params)
      .pipe(takeUntil(this.notifier))
      .subscribe(
        res => {
          this.launchData = res;
          this.hideSpinner('launchSpinner');
        },
        error => {
          this.hideSpinner('launchSpinner');
          console.log(error);
        })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    //Unsubscribing to services
    this.notifier.next();
    this.notifier.complete();
  }

}
