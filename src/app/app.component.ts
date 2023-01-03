import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SampleService } from './sample.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (private route:Router ){

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
   templateForm(){
    this.route.navigateByUrl('/path1')
   }
  }
  export interface User {
    name: string;
    surname: string;
  }