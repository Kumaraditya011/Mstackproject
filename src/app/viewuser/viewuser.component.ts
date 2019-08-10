import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  // private baseUrl = "http://localhost:3000";
  private baseUrl = "http://localhost:3000";

  alluser: any = [];
  uid: any;
  user: any = [];


  constructor(private q: HttpClient) { }

  ngOnInit() {
    this.q.get(this.baseUrl + '/viewuser').subscribe(k => {
      this.alluser = k['data'];
    });

  }
  todelete(id) {
    this.uid = id;

  }
  userdelete() {
    this.q.delete(this.baseUrl + '/deleteuser/' + this.uid).subscribe(k => {
      this.ngOnInit();
    });
  }
   toupdate(k){
     this.user = k;
   }
   userupdate(ud){
    this.q.put(this.baseUrl + '/updateuser/' , ud.value).subscribe(k => {
      this.ngOnInit();
    });
     
   }


}
