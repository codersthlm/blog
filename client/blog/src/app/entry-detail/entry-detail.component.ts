import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})

export class EntryDetailComponent implements OnInit {
  id = null;
  entry = { title: '', content: '', description: '', author: '', createdAt: '' };
  
  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogServiceService, private router: Router) {
  }

  loadBlogEntry() {
    this.blogService.getBlogEntry(this.id).then(entry => {
      this.entry = entry;
    });
  }

  deleteEntry() {
    if (window.confirm("Are you sure you want to delete this blog entry?")) {
      this.blogService.deleteBlogEntry(this.id).then(entry => {
        this.router.navigate(['/blog-list']);
      });
    }
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.loadBlogEntry();
    });
  }
}

