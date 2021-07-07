import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  // we will try to store some data offline so that we need not to call API always
  members: Member[] = [];

  constructor(private http: HttpClient) { }

  getMembers() {
    // first check if we already have our members stored in the array
    if (this.members.length > 0) {
      // of() helps to return an Observable
      return of(this.members);
    }
    return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
      map(members => {
        // set the members we recieve from the api to the local members array
        this.members = members;
        // this should be this.members (I think) !!
        return members;
      })
    )
  }

  getMember(username: string) {
    // try to get the member from the array of members we have locally
    const member = this.members.find(x => x.username === username);
    if (member !== undefined) {
      return of(member);
    }
    // if no member found then return the member by calling the API
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member: Member) {
    // along with updating the data in the database we also need to update the data in the local array
    return this.http.put(this.baseUrl + 'users', member).pipe(
      map( () => {
        const index = this.members.indexOf(member);
        this.members[index] = member;
      })
    )
  }
}
