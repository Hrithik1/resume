import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  data:any;
  constructor(private usersService:UsersService, private router : Router) { }

  ngOnInit(): void {
    this.usersService.getProfile().subscribe(
      (res) => {this.data = res},
      (err) => {console.log(err)}
    );
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('Form not valid!!');
      return;
    }
    console.log(form.value);
    
    this.usersService.submitResume(JSON.stringify(form.value)).subscribe(
      (data) => {
        form.resetForm(), alert('Resume submitted Successfully!');
        this.router.navigate(['/search']);
      },
      (err) => {
        console.error(err);
      }
    );
  }


}
