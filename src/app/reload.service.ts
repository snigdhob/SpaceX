import { EventEmitter, Injectable } from '@angular/core';
import { LaunchFilter } from './model/launchFilter';

@Injectable({
  providedIn: 'root'
})

/*
  This service is used for communication between Launch component
  and App Component tp retain filters on page reload
 */
export class ReloadService {

  onPageReload: EventEmitter<LaunchFilter> = new EventEmitter<LaunchFilter>();

  constructor() { }
}
