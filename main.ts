/// <reference path="jspm_packages/npm/angular2@2.0.0-alpha.44/angular2.d.ts" />

import {Component, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'hello-world',
  template: `<h1>Hello {{ name }}!</h1>`
})
class HelloWorldComponent {
  name: string;

  constructor() {
   this.name = 'Angular 2';
  }
}

bootstrap(HelloWorldComponent);