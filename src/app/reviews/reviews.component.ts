import { Component, OnInit } from '@angular/core';
import { DynamicTitleService } from '../dynamic-title.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private title : DynamicTitleService) { }

  paths=[
    "/assets/reviews/r1.jpg",
    "/assets/reviews/r2.jpg",
    "/assets/reviews/r3.jpg",
    "/assets/reviews/r4.jpg",
    "/assets/reviews/r5.jpg",
    "/assets/reviews/r6.jpg",
    "/assets/reviews/r7.jpg",
    "/assets/reviews/r8.jpg",
  ]

  ngOnInit(): void {

    this.title.changeTitle("Student Reviews - Upadhye Classes | Aundh Pune")
  }

}
