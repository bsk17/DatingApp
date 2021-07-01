import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor(public accountService: AccountService) { }

  ngOnInit(): void {

  }

  // we get the username and password from the html form in the model
  // we pass this model to AccountService
  // it will call the login method which has the base url
  // the login function will get called as soon as submit is pressed 
  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
      });
  }

  logout() {
    this.accountService.logout();
  }

}
