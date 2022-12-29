import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (){

  }
  title = 'angular-1';

  ngOnInit(){
    }
    user: User = {
      name: "Change",
      surname: "Me"
    };
  
    submit() {
      alert(`Submited with: ${this.user.name} ${this.user.surname}`);
    }
    
  
  }
  export interface User {
    name: string;
    surname: string;
  }