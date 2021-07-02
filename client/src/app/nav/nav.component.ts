import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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


  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  // we get the username and password from the html form in the model
  // we pass this model to AccountService
  // it will call the login method which has the base url
  // the login function will get called as soon as submit is pressed 
  login() {
    this.accountService.login(this.model).subscribe(response => {
      // this will make sure that when the user logs in then user is redirected to matches page 
      //which is member-lists components
      this.router.navigateByUrl('/members');
    },
      error => {
        console.log(error);
        // first error is the method of toastr
        // second error is the object which we get bakc from request
        // third error is the property of the error object which actually has the message
        this.toastr.error(error.error);
      });
  }

  logout() {
    this.accountService.logout();
    // this will make sure that whenever user logs out then user is redirected to home page 
    this.router.navigateByUrl('/');
  }

}
