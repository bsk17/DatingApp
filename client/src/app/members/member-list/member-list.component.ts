import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members: Member[];

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.loadMembers();
  }

  // this method will call the method from MeberService which will retrieve the list of Member.ts
  loadMembers() {
    // we subscribe to the method because it returns Observable
    // we then store then returned result(list of members) into the local variable defined in line 11
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
    })
  }

}
