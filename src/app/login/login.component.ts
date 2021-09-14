import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  constructor(public router: Router, public userService: UsersService) {}

  ngOnInit(){
    if(this.userService.isLogged()){
      this.router.navigate(['/profile']);
    }
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      console.log('Invalid');
      alert('Invalid Credentials');
      return;
    }
    this.userService.login(JSON.stringify(form.value)).subscribe(
      (data: any) => {
          localStorage.setItem('token', JSON.stringify(data)),
          form.resetForm(),
          // alert('Logged In Sucessfully!'),
          this.router.navigate(['/profile']);
      },
      (err) => {
        {
          console.log(err.error), alert(err.error);
        }
      }
    );
  }

  top(){
    window.scrollTo(0,0);  }
}

