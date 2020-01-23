import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { MatButtonModule,
//  MatFormFieldModule,
 // MatRippleModule, MatDatepickerModule, MatInputModule, MatNativeDateModule} from '@angular/material';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'add', component: TodoAddComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: 'edit/:id', component: TodoEditComponent }



];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoAddComponent,
    ErrorPageComponent,
    TodoEditComponent,
    HeaderComponent,
    FooterComponent,
   // MatFormFieldModule

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NgbModule
  //  MatDatepickerModule, MatInputModule, MatNativeDateModule
  ],
  // exports: [
  //   MatButtonModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatRippleModule,
  // ],
  providers: [],
  bootstrap: [AppComponent]
}) export class AppModule { }
