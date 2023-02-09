import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkColumnDef } from '@angular/cdk/table';
import { BrowserModule } from '@angular/platform-browser';
import { AppNgrxModule } from './app-ngrx.module';
import { AppRoutingModule } from './app-routing.module';
import { ToDoService } from './services/to-do.service';
import { AppComponent } from './components/app.component';
import { ToDoDialogComponent } from './components/todo-dialog/todo-dialog.component';
import { AppMaterialModule } from './app-material.module';
@NgModule({
  declarations: [
    AppComponent,
    ToDoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppNgrxModule,
    AppMaterialModule
  ],
  providers: [ToDoService, CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
