import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class DynamicTitleService {

  constructor(private titleService: Title) { }

  public changeTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
    console.log('title changed');
    
  }
}
