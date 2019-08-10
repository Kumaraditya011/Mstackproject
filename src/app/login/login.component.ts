import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private baseUrl = "http://localhost:3000";

  constructor(private q:HttpClient, private router: Router) { }

  ngOnInit() {
  }
login(lg){
   this.q.post(this.baseUrl + '/userLogin', lg.value).subscribe(
    
    res => {
      console.log(res)
      localStorage.setItem('token', res['token'])
   this.router.navigate(['/gallery'])
    },
    err => console.log(err)
  
  //k =>{
  //   localStorage.setItem("UserData", JSON.stringify(k));
  //   this.route.navigate(['/toodoo']);
  // }
  );
}


}
