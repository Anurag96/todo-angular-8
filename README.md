# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

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


## Data Binding

# 1) Interpolation : 
it ties uo the (view) value from component.ts to the property and reflect in component.html, it's one way data binding

# 2) Event Binding : 
Binding the event click in component.html to method of the component.ts, Helps to bind view event to the component event.

# 3) Two way Data binding (Banana in the box ) : value={{username}} ==> [{ngModel}] = "username"
Have to put the property name in the box of banana from component.ts, when the view is loaded the initial data is coming from the component property (username='anurag'), whenever the user enters the new user name, modified data get binded to the component property 
