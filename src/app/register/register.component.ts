import { tokenize, TokenizeResult } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private _router: Router, private usersService: UsersService) {}
  ngOnInit(): void {}

  onRegister(form: NgForm) {
    if (form.invalid || form.value.pass !== form.value.cpass) {
      alert('Invalid Credentials');
      return;
    }
    // console.log(form.value);
    this.usersService.register(JSON.stringify(form.value)).subscribe(
      (data) => {
        console.log(data),
        form.resetForm(),
        alert('Registered Successfully!'),
        this._router.navigate(['/login'])
      },
      (err) => {
        console.error(err)
      }
    );
  }

  top(){
    window.scrollTo(0,0);  }
}
