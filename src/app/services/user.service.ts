import { User } from './../models/user';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class UserService {

    constructor(private _httpClient: HttpClient) { }

    getAllUsers(): Observable<User[]> {
        return this._httpClient.get<User[]>("http://localhost:3000/users");
    }

    getUserById(id: number): Observable<User> {
        return this._httpClient.get<User>("http://localhost:3000/users/" + id);
    }

}