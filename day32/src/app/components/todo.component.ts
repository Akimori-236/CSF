import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Activities } from '../models';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  todoForm!: FormGroup
  taskArray!: FormArray

  valueChanges$!: Subscription
  debounce!: Observable<any>

  @Output()
  onNewActivity = new Subject<Activities>

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.createTodoForm()
    // this.debounce = this.todoForm.valueChanges.
    this.valueChanges$ = this.todoForm.valueChanges.subscribe(
      values => {
        console.log("values >> ", values)
      }
    )
  }

  ngOnDestroy(): void {
    // must unsub to prevent memory leak
    this.valueChanges$.unsubscribe()
  }

  private createTodoForm(): FormGroup {
    this.taskArray = this.fb.array([], [Validators.minLength(1)])
    return this.fb.group({
      taskName: this.fb.control<string>('', [Validators.required]),
      name: this.fb.control<string>('', [Validators.required]),
      tasks: this.taskArray
    })
  }

  // create the group, then add group to array
  addTask() {
    const newTask = this.fb.group({
      description: this.fb.control<string>('', [Validators.required]),
      dueDate: this.fb.control<Date>(new Date(), [Validators.required])
    })
    this.taskArray.push(newTask)
  }

  deleteTask(index: number) {
    this.taskArray.removeAt(index)
  }

  saveTodo() {
    const activities = this.todoForm.value as Activities
    console.info(activities)
    this.onNewActivity.next(activities) // start event
    this.todoForm = this.createTodoForm() // recreate pristine form
  }

  // checking for array length and form validity
  isFormValid(): boolean {
    return this.todoForm.valid && this.taskArray.length > 0
  }


}