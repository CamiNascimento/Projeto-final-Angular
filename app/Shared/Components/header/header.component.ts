import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { User } from 'src/app/Features/Users/Model/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  datahoje?: string = moment().format("LL");
  
  user?: User;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const userStorage = sessionStorage.getItem("user");
    if(userStorage) {
      this.user = JSON.parse(userStorage);
    }  
  }

  NavigateByURL(path: string){
  this.router.navigateByUrl(path)
  }

  exit(){
    sessionStorage.clear();
    this.NavigateByURL("login")
  }

}
