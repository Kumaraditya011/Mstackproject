import { Component, OnInit } from '@angular/core';
import{HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private baseUrl = 'https://mstack2019.herokuapp.com'
 
  // private baseUrl = "http://localhost:3000";

  constructor(private q: HttpClient) { }

  ngOnInit() {
  }
  sendData(cd){
    
    this.q.post(this.baseUrl + '/addcon', cd.value).subscribe();

  }
}
