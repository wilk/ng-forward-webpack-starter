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
    <h1>{{title}}</h1>
  </header>

  <main>
    Todo List

    <div>
      <input type="text" (keyup)="addElement($event)" autofocus>
    </div>
    <ul>
      <li *ngFor="#element of list">{{element}}</li>
    </ul>
  </main>
  `
})
export class App {
  // These are member type
  title: string;
  list: string[];

  constructor() {
    this.title = 'ng-forward with Angular 2.x';
    this.list = ['Study', 'Work', 'Party'];
  }

  addElement($event): void {
    $event.preventDefault();

    if ($event.keyCode === 13) {
      this.list.push($event.target.value);
      $event.target.value = '';
    }
  }
}
