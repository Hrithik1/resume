import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(public usersService: UsersService, private router: Router) {}
  aese: any;
  ngOnInit(): void {}

  onSearch(form: NgForm) {
    if (form.invalid) {
      console.log('form not valid!!');
      return;
    }
    this.router.navigate(['/template',form.value.email]);
    // this.usersService.getResume(form.value.email).subscribe(
    //   (data) => {
    //     console.log(data)
        
        
    //   },
    //   (err) => {
    //     console.log(err);
    //     if (err.status == 401) {
    //       alert('Not authorized to access resume');
    //     } else {
    //       alert('Resume does not exist!!');
    //     }
    //   }
    // );
  }
}