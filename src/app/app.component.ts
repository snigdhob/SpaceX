import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LaunchFilter } from './model/launchFilter';
import { ReloadService } from './reload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SpaceX';
  launchYears: string[] = [];
  successList: string[] = ['true', 'false'];
  launchForm: FormGroup;

  constructor(private reloadService: ReloadService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    for (let year = 2006; year <= 2020; year++) {  //Launch year population loop
      this.launchYears.push(String(year));
    }

    this.createLaunchForm();

    //Retaining filters on reload
    this.reloadService.onPageReload.subscribe((params : LaunchFilter ) => {
      this.launchForm.patchValue(params);
   })

    //Subscribing to valueChanges and navigating when filters are modified
    this.launchForm.valueChanges.subscribe((value: LaunchFilter) => {
      this.router.navigate(['launches'], { queryParams: value });
    });
  }

  //Method to create launchForm
  createLaunchForm() {
    this.launchForm = this.fb.group({
      launch_year: [null],
      launch_success: [null],
      land_success: [null]
    });
  }

  /* 
    Method to create toggling effect. For simplicity we use a form and subscribe to valueChanges to trigger
    route change.
  */
  filterChange(value, formControlName: string){
    const formControl: AbstractControl = this.launchForm.get(formControlName);
    if(formControl.value !== value){
      formControl.setValue(value);
    }
    else{
      formControl.setValue(null);
    }
  }

}
