import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../Model/user.model';
import { UsersService } from '../../Services/users.service';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User =this.usersService.getDefaultUser();

  userForm = new FormGroup({
    name:new FormControl("", [Validators.required]),
    email:new FormControl("", [Validators.required]),
    password:new FormControl("", [Validators.required, Validators.minLength(8)]),
    CPF:new FormControl("", [Validators.required]),
    age:new FormControl("", [Validators.required])

  });

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  crateUser(){
    const formValue = this.userForm.value;
    this.user.name = formValue.name;
    this.user.email = formValue.email;
    this.user.password = formValue.password;
    this.user.CPF = formValue.CPF;
    this.user.age = formValue.age;

    this.usersService.createUser(this.user);
    alert("Cadastro realizado com sucesso! =)")
    this.router.navigateByUrl("/login")
  }

}
