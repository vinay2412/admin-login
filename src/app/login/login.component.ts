import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
     private routes: Router, 
     private service: ApiService
    ) { }
  
    msg = "";
    ngOnInit() { }

  submit(uname: string, p: string) {
    var output = this.service.loginAuthentication(uname, p);
    if (output == true) {
      this.routes.navigate(['/admin']);
    }
    else {
      this.msg = 'Invalid username or password';
    }


  }

}
