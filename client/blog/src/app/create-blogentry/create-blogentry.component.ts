import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import { BlogEntry } from './blog-entry'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-blogentry',
  templateUrl: './create-blogentry.component.html',
  styleUrls: ['./create-blogentry.component.css']
})


export class CreateBlogentryComponent implements OnInit {
  model = new BlogEntry()
  constructor(private blogService: BlogServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    if (form.valid) {
      this.blogService.createBlogEntry(this.model).then(entry => {
        this.router.navigate(['/blog-list']);
      });
    }
  }
}
