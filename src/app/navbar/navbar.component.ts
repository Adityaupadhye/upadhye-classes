import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tab=0;
  nav="";
  pages = ["Home", "About Us", "Results", "Gallery"];
  constructor(public ts:Title) { }

  ngOnInit(): void {
  }

}
