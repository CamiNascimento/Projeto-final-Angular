import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

phonenumb = "(21) 3333-3333"

  constructor() { }

  ngOnInit(): void {
  }

}
