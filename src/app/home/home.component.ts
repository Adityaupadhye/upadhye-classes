import { Component, OnInit } from '@angular/core';
import { DynamicTitleService } from '../dynamic-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: DynamicTitleService) { }

  ngOnInit(): void {
    
    this.titleService.changeTitle("Upadhye Classes | Aundh Pune");
  }

  

}
