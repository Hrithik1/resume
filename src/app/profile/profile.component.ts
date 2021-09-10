import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

interface dataDisplay {
  firstName ?: string,
  lastName ?: string,
  email ?: string,
  gender ?: string,
  phone ?: string,
  age ?: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  data: dataDisplay;
  constructor(public userService: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe(
      (data) => {
        console.log("data on profile comp: "+ data);
        
        this.data = {
          firstName : data.firstname,
          lastName : data.lastname,
          email : data.email,
          gender: data.gender,
          phone : data.phone,
          age: data.age
        }
      },
      (err) => {
        if(err instanceof HttpErrorResponse){
          if(err.status == 401){
            this.router.navigate(['./login'])
          }
        }
      }
    );
  }
}