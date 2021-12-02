import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Features/Users/Services/users.service';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  error: boolean=false;

  email?: string;
  password?: string;


  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  authentication(){
    const user = this.usersService.getUserByEmailAndPassword(this.email, this.password);
    if(!user){
      this.error = true;
    } else{
      sessionStorage.setItem("user", JSON.stringify(user));
      this.router.navigateByUrl("/lista-para-adocao")
    }
    
  }  

  




}
