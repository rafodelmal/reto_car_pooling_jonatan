import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from 'app/model/User';


@Injectable({
  providedIn: 'root'
})
export class CarpoolService {

  constructor(private http:HttpClient) { }

 

  getUsuario(){

    return this.http.get<User[]>('http://localhost:8080/read');

 
  }}
