import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

interface userData {
  firstname: string;
  lastname: string;
  profession: string;
  email: string;
  phone?: number;
  address?: string;
  intro?: string;
  skills?: string;
  education?: [
    {
      school?: string;
      year?: string;
      degree?: string;
    }
  ];
  projects?: [
    {
      title?: string;
      work?: string;
    }
  ];
}

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
})
export class TemplateComponent implements OnInit {
  data: userData;
  resume: any;
  constructor(public usersService: UsersService, private router: Router, private active: ActivatedRoute) {}

  ngOnInit(): void {
    this.active.data.subscribe(
      (res) => {
        this.data = res.templateData;
      },
      (err) => {
        console.error(err);
        this.router.navigate(['/search']);
      }
    );
}
}
