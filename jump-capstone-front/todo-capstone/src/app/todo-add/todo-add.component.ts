import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
  providers: [DatePipe]
})
export class TodoAddComponent implements OnInit {

  todo: Todo;
  // Normally empty, will be filled with an error message if a database error occures
  errorMessage: string;
  // Used to set the earliest data a user can choose
  minDate: string;
  // Today's date, used to make sure date chosen is in the future
  myDate: Date;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService,
    private datePipe: DatePipe)
    {
          this.todo = new Todo();
          this.todo.status = false;
          this.errorMessage = '';


          this.myDate = new Date();
          this.minDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    }

  onSubmit(){
      this.todoService.addTodo(this.todo).subscribe(result => this.router.navigate(['/todos']),  error => this.errorMessage = 'Cannot connect to database!' );
  }


  ngOnInit() {
  }

}
