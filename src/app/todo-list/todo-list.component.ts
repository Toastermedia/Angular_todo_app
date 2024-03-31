import { Component, type OnChanges, type SimpleChanges } from '@angular/core';
import type { Todo } from '../shared/interfaces/todo.interface';

@Component( {
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.css' ]
} )
export class TodoListComponent
{

  todos: Todo[] = [];
  errorMessage = '';
  // todoSwitchCase = "ne";

  // ngOnChanges ( changes: SimpleChanges ): void
  // {
  //   console.log( changes );
  // }
  addTodo ( todo: string ): void
  {
    if ( todo.length <= 3 )
    {
      //alert( 'Zadanie powinno miec co najmniej 4 znaki.' );
      this.errorMessage = 'Zadanie powinno miec co najmniej 4 znaki.';
      return;
    }

    this.todos.push( { name: todo, isComplete: false } );

    console.log( "Aktualna lista todos: ", this.todos );
  }

  changeTodoStatus ( index: number )
  {
    // _todo.isComplete = !_todo.isComplete;
    this.todos[ index ] = { ...this.todos[ index ], isComplete: !this.todos[ index ].isComplete }
  }

  clearErrorMessage ()
  {
    this.errorMessage = '';
  }

  deleteTodo ( _index: number )
  {
    this.todos = this.todos.filter( ( todo, index ) => index != _index )
    // if ( this.todos.length > 0 )
    // {
    //   this.todos.splice( _index, 1 );
    // }
  }
}
