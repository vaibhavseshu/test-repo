import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent  {
  constructor(){

  }
  loginForm = new FormGroup(
    {
      user : new FormControl(null,Validators.required),
      password : new FormControl(null)
    }
  )
  loginform(){
    console.log(this.loginForm.value)
  }
}