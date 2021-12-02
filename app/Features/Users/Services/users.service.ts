import { Injectable } from '@angular/core';
import { User } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> =[
    {email:"teste@gmail.com", password:"12345678", name:" oi", CPF:"12345678", age:"23"}
  ]

  constructor() { }

  getUser(){
    return this.users;
  }

  getUserByEmailAndPassword(email: string | undefined, password: string | undefined){
    return this.users.find((user) => user.email === email && user.password === password);
  }

  getDefaultUser(): User{
    return {
      name:"",
      email:"",
      password:"",
      CPF:"",
      age:""
    }
  }

  createUser(user: User){
    return (this.users.push(user));
  }
 
}
