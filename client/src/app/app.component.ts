import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
     title = 'The Dating App';

     // the response from the API has been asssigned to this  users property of the class, 
     // so we can inerpolate to HTML file of this component
     users: any;

     constructor(private accountService: AccountService) { }

     // we have to use this because of OnInit Implementation
     ngOnInit() {
          this.setCurrentUser();
     }

     setCurrentUser() {
          const user: User = JSON.parse(localStorage.getItem('user'));
          this.accountService.setCurrentUser(user);
     }


}
