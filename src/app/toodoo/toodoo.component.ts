import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-toodoo',
  templateUrl: './toodoo.component.html',
  styleUrls: ['./toodoo.component.css']
})
export class ToodooComponent implements OnInit {
  private baseUrl = "http://localhost:3000";
  lis: any = [];

   tu: any = [];

   tid: any = [];
  constructor(private q: HttpClient) { 
    this.ngOnInit();
  }

  ngOnInit() {
    this.q.get(this.baseUrl + '/viewlist').subscribe(k => {
      this.lis = k['tm'];
    });
  }
  sendData(tn){
    
    this.q.post(this.baseUrl + '/addlis', tn.value).subscribe();
  
  }
  //todolist//
modelete(id) {
  this.tid = id;

}
txtdelete() {
  this.q.delete(this.baseUrl + '/deletetxt/' + this.tid).subscribe(k => {
    this.ngOnInit();
  });
}
}


