import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/model/User';
import { UserNew } from 'app/model/UserNew';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUsuario() {

    return this.http.get<User[]>('http://localhost:8080/read');


  }

  saveUser(userNew: UserNew): Observable<any> {

    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(userNew);

    return this.http.post('http://localhost:8080/create', body, { 'headers': headers });


  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }




}