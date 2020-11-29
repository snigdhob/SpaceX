import { QueryList, ViewChildren } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';

/*
    Base Component to handle common utilities such as showSpinner or hideSpinner. Helps us perform these
    activities at the framework level. Will be helpful as the application expands and more components keep
    getting added.
*/

export abstract class BaseComponent {

    //Keep tracker of all child spinner components
    @ViewChildren(SpinnerComponent) spinnerList !: QueryList<SpinnerComponent>;

    constructor() { }

    showSpinner(name: string) {
        if (this.spinnerList) {
            //Check if the spinner mentioned exists and is hidden
            let item = this.spinnerList.find(x => x.name === name && x.show === 'n');
            if (item) {
                item.toggle();
            }
        }
    }

    hideSpinner(name: string) {
        if (this.spinnerList) {
            //Check if the spinner mentioned exists and is displayed
            let item = this.spinnerList.find(x => x.name === name && x.show === 'y');
            if (item) {
                item.toggle();
            }
        }
    }
}