import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  loginAuthentication(uname: string, pwd: string) {
    if (uname == "admin" && pwd == "123456") {
      localStorage.setItem('username', "admin");
      localStorage.setItem('username', "employee");
      return true;  
    }
    else {
      return false;
    }
  }
}
