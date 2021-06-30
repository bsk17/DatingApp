import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  // we have to use this because of OnInit Implementation
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    })
  }
}
