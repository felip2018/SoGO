import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {


  constructor(private http: HttpClient) {}

  public startSession(username: string, password: string) {
    console.log(`User ${username} Pass ${password}`);
    return this.http.post('http://localhost:4000/login/start-session', {username, password}, {});
  }

}
