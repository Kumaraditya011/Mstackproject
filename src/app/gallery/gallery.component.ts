import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  private baseUrl = "http://localhost:3000";
  snd: any = [];
  au: any = [];
  cmd: any = [];
  cu: any = [];
public date = new Date;

  constructor(private q: HttpClient) { 
    this.ngOnInit();
  }

  ngOnInit() {
    this.q.get(this.baseUrl + '/viewsound').subscribe(k => {
      this.snd = k['sound'];
    });

//cmnt
this.q.get(this.baseUrl + '/viewcomment').subscribe(k => {
  this.cmd = k['cmnt'];
});



  }
//cmmnt
sendData(cn){
  this.q.post(this.baseUrl + '/addcmd', cn.value).subscribe(k=>{
   this.ngOnInit() 
  });

}


}
