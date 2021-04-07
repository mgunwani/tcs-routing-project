import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  // userList: any;
  userList: User[];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getAllUsers().subscribe((result) => {
      this.userList = result;
      console.log(this.userList);
    })
  }

}
