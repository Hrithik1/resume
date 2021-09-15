import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
@ViewChild('contentToConvert', { static: false })
  contentToConvert!: ElementRef;
  public downloadPdf() {
    let filename = this.data.firstname;
    const doc = new jsPDF('l', 'mm', 'a3');
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();
    const node = this.contentToConvert.nativeElement;
    html2canvas(node).then(function (canvas) {
      doc.internal.scaleFactor = 4;
      var img = canvas.toDataURL('image/png');
      doc.addImage(img, 'PNG', 0, 0.1, width, height);
      doc.save(`${filename}_Resume.pdf`);
    });
  }
}
