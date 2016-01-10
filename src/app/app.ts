/*
 * Angular 2 decorators and services
 */
import {Component} from 'ng-forward/cjs';

/*
 * App Component
 * Top Level Component
 */
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'app', // <app></app>
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `
  <header>
    <h1>Hello {{ app.title }}</h1>
  </header>

  <main>
    Your Content Here
    <div>

      <input type="text" ng-model="app.title" autofocus>
    </div>

    <pre>this.title = {{ app.title | json }}</pre>
    <pre>this.data = {{ app.data | json }}</pre>

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
