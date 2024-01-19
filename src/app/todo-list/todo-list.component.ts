import {Component} from "@angular/core";


@Component({
  selector:'app-todo-list',
  // templateUrl:'todo-list.component.html',
  template:`
    <h3 style="font-style: italic">
      todo list component2
    </h3>
    <app-todo-list-item></app-todo-list-item>
    <app-todo-list-item></app-todo-list-item>
    <app-todo-list-item></app-todo-list-item>
    <app-todo-list-item></app-todo-list-item>
  `,
  styleUrls:['todo-list.component.scss']
})
export class TodoListComponent{}
