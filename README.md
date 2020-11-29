# SpaceX

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## About

This is a front-end application which would help users list and browse all launches by SpaceX program.

## Working Link

[Named Link](https://spacex-trial.herokuapp.com/ "SpaceX")

## Tech Stack

The entire app has been created primarily using Angular 9, which uses TypeScript under the hood. The markup language used is HTML5. SASS preprocessor has been 
used for flexibility of styling. Also Bootstrap 4 has been used to make the application look appealing and to achieve responsiveness. We have used RxJS for and Observables for API interaction. Angular Universal has been used for Server side Rendering.

## Approach

Attention has been paid to visually match the application with the provided designs provided in the problem statement. I know, it was mentioned not to use Bootstrap for responsiveness, but due to time constraints, I had to go with it. However, I am aware and adept at media query implementation.

Brief overview of components used-

### App Component: ###

* The different filters have been kept here.
* A reactive form has been used to store the state of the filters and we subscribe to the valueChanges Observable of the form to determine the change in state of the filters
  and filter results. This also simultaneously triggers a change in the current URL dynamically which is achieved via query parameters without reloading the page.
  
### Launch Component: ###

* Main component to show the various search results based on the filters selected.
* We inject Angular's Activated Route into this component to keep track of changes in filters applied. An API call to fetch new results only takes place if filters are modified.
* SpaceXService is also injected into this component to facilitate the API calls. All service calls are unsubscribed when the component is destroyed.

### Card Component: ###

* Common component to display the search results in Launch Component

### Footer Component: ###

* Common footer component

### Base Component: ###

* A normal TypeScript file which contains common utilities that all other components can use, promoting code reusability. 
* For the purpose of our application, only to methods were provided, name showSpinner() and hideSpinner(). And this was extended only by Launch Component. 
* As the application keeps expanding, this would prove to be super beneficial and reusable and a lot more components would extend it.

### SpaceXService: ###

* API calls for search, as provided in teh problem statement.

### ReloadService: ##

* This is a shared service used between App Component and Launch Component to retain state of teh filters in case of page reload.

### StringFormatPipe: ###

* Pipe for formatting data on teh screen. Promotes reusability.

### Additional Points: ###

* Angular Universal has a bug (or a feature?) which makes the landing page load twice, firstly being rendered by the server, then being rendered by the client wit ha small flicker in between. This has been overcome by using TransferHttpCacheModule. TransferHttpCacheModule installs an Http interceptor that avoids duplicate HttpClient GET requests on the client, for requests that were already made when the application was rendered on the server side.
* Implemented display a no results found  image in case the combination of the filters used returns no results.

## Lighthouse Scores

### Mobile: ###

![ScreenShot](/Lighthouse_Mobile.jpg)

### Desktop: ###

![ScreenShot](/Lighthouse_Desktop.jpg)




