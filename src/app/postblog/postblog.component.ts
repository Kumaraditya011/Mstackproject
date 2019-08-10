import { Component, OnInit } from '@angular/core';
import{HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-postblog',
  templateUrl: './postblog.component.html',
  styleUrls: ['./postblog.component.css']
})
export class PostblogComponent implements OnInit {
  private baseUrl = 'https://mstack2019.herokuapp.com'
  
//  private baseUrl = "http://localhost:3000";


  constructor(private q: HttpClient) { }

  ngOnInit() {
  }
  sendData(sd){
    
    this.q.post(this.baseUrl + '/addsnd', sd.value).subscribe();

  }
}

