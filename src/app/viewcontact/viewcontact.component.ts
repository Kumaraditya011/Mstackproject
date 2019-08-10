import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {
  private baseUrl = "http://localhost:3000";
  conuser: any = [];
  cid: any;
  co: any = [];
  constructor(private q: HttpClient) { }

  ngOnInit() {

    this.q.get(this.baseUrl + '/viewcontact').subscribe(k => {
      this.conuser = k['contact'];
    });

  }
  codelete(id) {
    this.cid = id;

  }
  contactdelete() {
    this.q.delete(this.baseUrl + '/deletecontact/' + this.cid).subscribe(k => {
      this.ngOnInit();
    });
  }

}
