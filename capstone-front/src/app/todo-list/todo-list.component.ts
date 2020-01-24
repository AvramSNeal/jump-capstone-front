import { TodoService } from './../todo.service';
import { Component, OnInit  } from '@angular/core';
import { Todo } from '../todo';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo [];
  errorMessage: string;
  currentUser: string;

  constructor(private todoService: TodoService,  private route: ActivatedRoute, private router: Router
    ) { this.errorMessage = ''; this.currentUser='ACTIVE';}

  ngOnInit()
  {
    this.todoService.findAll().subscribe ( data => { this.todos = data } , error => this.errorMessage = 'Cannot connect to database!'  );
  }

  toggleTodoStatus(t: Todo)
  {
    t.status = !t.status;
    this.todoService.updateTodo(t).subscribe(data => {});
  }

  deleteTodo(id: number)
  {
    this.todoService.deleteTodo(id).subscribe(data => {});
    this.router.navigate(['/todos']);

  }

}
