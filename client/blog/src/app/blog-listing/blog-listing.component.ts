import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.css']
})
export class BlogListingComponent implements OnInit {
  entries = [];
  constructor(private blogService:BlogServiceService) { }

  loadBlogEntries() {
     this.blogService.getBlogEntries().then(entries => {
     this.entries = entries; 
    
     });
  }


  ngOnInit(): void {
    this.loadBlogEntries();
  }
}
