import { Component, OnInit } from '@angular/core';
import { DynamicTitleService } from '../dynamic-title.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private title: DynamicTitleService) { }

  galleryPath=[
    "/assets/gallery/cls1.jpeg",
    "/assets/gallery/cls2.jpg",
    "/assets/gallery/cls3.jpg",
    "/assets/gallery/cls4.jpg",
    "/assets/gallery/cls5.jpg",
    "/assets/gallery/cls6.jpg",
    "/assets/gallery/cls7.jpg",
    "/assets/gallery/cls8.jpg",
    "/assets/gallery/cls9.jpg"
  ]

  ngOnInit(): void {

    this.title.changeTitle("Gallery - Upadhye Classes | Aundh Pune")
  }

}
