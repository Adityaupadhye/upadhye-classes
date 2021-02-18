import { Component, OnInit } from '@angular/core';
import { DynamicTitleService } from '../dynamic-title.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private mytitleService: DynamicTitleService) { }

  ngOnInit(): void {

    this.mytitleService.changeTitle("About Us - Upadhye Classes | Aundh Pune");

  }

}
