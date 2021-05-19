import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) { }

  showTaskData(): Observable<User[]> {

    return this.http.get<User[]>('http://127.0.0.1:8000/api/users');  

  }

  insertStudentData(fname: string, lname: string, email: string){
    return this.http.post('http://127.0.0.1:8000/api/users',{
      fname,
      lname,
      email
    }).subscribe(res => {
      console.log(res);
      location.reload();
    });  
  }

  editUser(id: number, fname: string, lname: string, email: string){
    return this.http.patch('http://127.0.0.1:8000/api/users/'+id,{      
      fname,
      lname,
      email
    }).subscribe(res => {
      console.log(res);
      //location.reload(); 
    });
  }    

  deleteUser(id: number){
    return this.http.delete('http://127.0.0.1:8000/api/users/'+id)
    .subscribe(res => {
      console.log(res);
      //location.reload(); 
    
    }); 
  }
  

}
