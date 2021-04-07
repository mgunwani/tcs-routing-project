import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [UserService]
})
export class UserDetailComponent implements OnInit {

  id: any;
  user: User = new User();

  constructor(private _userService: UserService, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.params.id;
    console.log(this.id);
    this._userService.getUserById(this.id).subscribe((result) => {
      this.user = result;
      console.log(this.user);
    })
  }

}
