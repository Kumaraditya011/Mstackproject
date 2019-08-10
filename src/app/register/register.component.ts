import { Component, OnInit } from '@angular/core';
import{HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private baseUrl = 'https://mstack2019.herokuapp.com'

  //  private baseUrl = "http://localhost:3000";


  constructor(private q: HttpClient, private tos:ToastrService,
    private router: Router) { }

  ngOnInit() {
  }
  sendData(ud){
    
    this.q.post(this.baseUrl + '/adduser', ud.value).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res['token'])
        this.router.navigate(['/gallery'])
     
      },
      err => console.log(err)
    );
    this.tos.success("Registerd","Success")
  }
}
