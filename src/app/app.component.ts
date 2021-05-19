import { Component } from '@angular/core';
import { UserService } from '../app/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private Auth: UserService) { }
  
  fname : any;
  lname : any;
  id : any;
  email : any;
  userData : any;
  msg : any;
  status = true;

  ngOnInit(): void {
    this.Auth.showTaskData().subscribe(data => {
      this.userData = data;
      console.log(data);
    } );
    
  }

  insertUser(){    
    this.Auth.insertStudentData(this.fname,this.lname,this.email); 
  }  

  deleteUser(id : number){
    this.msg = this.Auth.deleteUser(id);
    console.log(this.msg);
    
  }

  editUser(){
    this.Auth.editUser(this.id,this.fname,this.lname,this.email);
  }

  editUserRetrieve(user: any){
    this.id = user.id;
    this.fname = user.fname;
    this.lname = user.lname;
    this.email = user.email;
    this.status = false;
  }


}
