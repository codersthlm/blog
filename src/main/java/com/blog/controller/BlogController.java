package com.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.blog.service.BlogService;
import com.blog.model.BlogEntry;


@RestController

@RequestMapping("/api/v1/")
public class BlogController {
    
        @Autowired
        private BlogService blogService;


        @CrossOrigin(origins = "http://localhost:4200")
        @GetMapping("/blogentries")
        public ResponseEntity blogs() {
            return ResponseEntity.ok(blogService.getBlogs());
        }
        @CrossOrigin(origins = "http://localhost:4200")
        @PostMapping("/blogentry")
        public ResponseEntity createBlogEntry(@RequestBody BlogEntry blogEntry) {
            return ResponseEntity.ok(blogService.createBlogEntry(blogEntry));
        }


        @CrossOrigin(origins = "http://localhost:4200")
        @GetMapping("/blogentry/{id}")
        public ResponseEntity getBlogEntry(@PathVariable Long id) {
            return ResponseEntity.ok(blogService.getBlogEntry(id));
        }

        @CrossOrigin(origins = "http://localhost:4200")
        @DeleteMapping("/blogentry/{id}")
        public ResponseEntity deleteBlogEntry(@PathVariable Long id) {
            blogService.deleteBlogEntry(id);
            return ResponseEntity.ok(200);
        }
}

    
