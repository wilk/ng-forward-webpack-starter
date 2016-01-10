/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

/*
 * App Component
 * Top Level Component
 */
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'app', // <app></app>
  directives: [FORM_DIRECTIVES],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `
  <header>
    <h1>Hello {{ title }}</h1>
  </header>

  <main>
    Your Content Here
    <div>

      <input type="text" [(ngModel)]="title" autofocus>
    </div>

    <pre>this.title = {{ title }}</pre>
    <pre>this.data = {{ data | json }}</pre>

  </main>
  `
})
export class App {
  // These are member type
  title: string;
  data: Array<any> = []; // default data
  constructor() {
    this.title = 'ng-forward';
  }
}
