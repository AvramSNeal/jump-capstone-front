import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
//import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo: Todo;
  // Normally empty, will be filled with an error message if a database error occures
  errorMessage: string;
  // Used to set the earliest data a user can choose
  minDate: string;
  // Today's date, used to make sure date chosen is in the future
 // myDate: Date;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService)
    //private datePipe: DatePipe)
    {
          this.todo = new Todo();
          // this.todo.status = false;
          this.errorMessage = '';


          this.route.params.subscribe(params => {
            this.id = params['id']

          });

          console.log(this.id);

         // this.myDate = new Date();
         // this.minDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    }



  ngOnInit()
  {

    // tslint:disable-next-line: max-line-length
    this.todoService.getTodo(this.id).subscribe(data => { this.todo = data; },  error => this.errorMessage = 'Cannot connect to database!' );

  }


  onSubmit(){
    // tslint:disable-next-line: max-line-length
    this.todoService.updateTodo(this.todo).subscribe(result => this.router.navigate(['/todos']),  error => this.errorMessage = 'Cannot connect to database!' );
  }

}
