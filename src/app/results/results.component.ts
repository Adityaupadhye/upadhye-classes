import { Component, OnInit } from '@angular/core';
import { DynamicTitleService } from '../dynamic-title.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private title: DynamicTitleService) { }

  res20 = [
    { name: "Kavya", mrks: "96.6%"},
    { name: "Ashwathi", mrks: "94.2%"},
    { name: "Pari", mrks: "92.2%"},
    { name: "Aditi", mrks: "92%"},
    { name: "Shyamak", mrks: "91%"},
    { name: "Shruti", mrks: "90%"},
    { name: "Alankriti", mrks: "88%"},
    { name: "Chandni", mrks: "88%"},
    { name: "Nishika", mrks: "86.6%"},
    { name: "Shreya", mrks: "84%"},
    { name: "Kaustubh", mrks: "80%"},
    { name: "Parth", mrks: "78%"},
    { name: "Sanskriti", mrks: "78%"}
  ]

  res19 = [
    { name: "Nivedita", mrks: "96%"},
    { name: "Ojasvi", mrks: "95.8%"},
    { name: "Mrunmayi", mrks: "94%"},
    { name: "Shreya", mrks: "93%"},
    { name: "Anukriti", mrks: "92%"},
    { name: "Sayali", mrks: "92%"},
    { name: "Saniya", mrks: "90%"},
    { name: "Vaishnavi", mrks: "90%"},
    { name: "Kevin", mrks: "90%"},
    { name: "Shreelaxmi", mrks: "85%"},
    { name: "Gauravi", mrks: "86%"},
    { name: "Niharika", mrks: "85.8%"}
  ]

  res18 = [
    { name: "Aditya Upadhye", mrks: "93%"},
    { name: "Siddharth Kothari", mrks: "92.4%"},
    { name: "Avijeet Arora", mrks: "91%"},
    { name: "Aditi Wikhe", mrks: "90.8%"},
    { name: "Manya Agarwal", mrks: "90.5%"},
    { name: "Yash Rathod", mrks: "90%"},
    { name: "Malhar Dhopate", mrks: "90%"},
    { name: "Maitreyi", mrks: "88%"},
    { name: "Ishika Verma", mrks: "86%"},
    { name: "Sai Ghalsasi", mrks: "84%"},
    { name: "Vineet Agarwal", mrks: "82%"},
    { name: "Kirti Agarwal", mrks: "82%"},
    { name: "Praggya Bhattacharya", mrks: "80%"},   
    { name: "Piyush Manjrekar", mrks: "79%"},   
    { name: "Pranav Dahiwade", mrks: "79%"},   
    { name: "Janhavi Dubule", mrks: "78%"},   
    { name: "Vaishnavi Kulkarni", mrks: "78%"},   
    { name: "Shubham Sharma", mrks: "77%"},   
    { name: "Janhavi Singh", mrks: "75%"},   
  ]

  res1020 = [
    { name: "Aparna", mrks: "98.6%"},
    { name: "Tanay Shahane", mrks: "96%"},
    { name: "Ananya", mrks: "95%"},
    { name: "Tanvi", mrks: "92%"},
    { name: "Divija Arjunwadkar", mrks: "91.2%"},
    { name: "Ritika", mrks: "90%"},
  ]

  res1019 = [
    { name: "Vaishnavi", mrks: "98.5%"},
    { name: "Anjana Shukla", mrks: "98%"},
    { name: "Mihir Chaube", mrks: "89%"},
    { name: "Amulya", mrks: "86%"},
  ]

  res1018 = [
    { name: "Sanskruti", mrks: "96%"},
    { name: "Sharvari Patil", mrks: "94%"},
    { name: "Anushka", mrks: "92%"},
    { name: "Tanvi", mrks: "93%"},
    { name: "Vidhi", mrks: "90%"},
    { name: "Siona", mrks: "89%"},
  ]

  ngOnInit(): void {

    this.title.changeTitle("Results - Upadhye Classes | Aundh Pune");
  }

}
