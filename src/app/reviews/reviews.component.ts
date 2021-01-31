import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor() { }

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
  }

}
