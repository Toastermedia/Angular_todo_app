import { Component, EventEmitter, Input, Output, type OnChanges, type SimpleChanges, type OnInit } from '@angular/core';
import type { Todo } from 'src/app/shared/interfaces/todo.interface';

@Component( {
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.css' ]
} )
export class TodoComponent //implements OnChanges, OnInit
{

  @Input() todo!: Todo;
  @Input() index!: number;
  @Output() changeStatusEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<void>();

  openModal = false;

  constructor()
  {
    console.log( "TodoComponent.constructor", this.todo );
  }

  // ngOnInit (): void
  // {
  //   console.log( "TodoComponent.ngOnInit: ", this.todo );
  // }
  // ngOnChanges ( changes: SimpleChanges ): void
  // {
  //   console.log( "TodoComponent: ", changes );
  // }

  changeTodoStatus ()
  {
    this.changeStatusEvent.emit( this.index );
  }

  toggleModal ()
  {
    this.openModal = !this.openModal;

    console.log( this.openModal );
  }

  deleteTodo ()
  {
    this.deleteEvent.emit();
    this.openModal = !this.openModal;
  }
}
