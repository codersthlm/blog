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

    // @Todo Hardcoded. Use corsConfigurer class and application.properties instead.
    private static final String originUrl = "http://localhost:4200";

    @CrossOrigin(origins = originUrl)
    @GetMapping("/blogentries")
    public ResponseEntity blogs() {
        return ResponseEntity.ok(blogService.getBlogs());
    }

    @CrossOrigin(origins = originUrl)
    @PostMapping("/blogentry")
    public ResponseEntity createBlogEntry(@RequestBody BlogEntry blogEntry) {
        return ResponseEntity.ok(blogService.createBlogEntry(blogEntry));
    }

    @CrossOrigin(origins = originUrl)
    @GetMapping("/blogentry/{id}")
    public ResponseEntity getBlogEntry(@PathVariable Long id) {
        return ResponseEntity.ok(blogService.getBlogEntry(id));
    }

    @CrossOrigin(origins = originUrl)
    @DeleteMapping("/blogentry/{id}")
    public ResponseEntity deleteBlogEntry(@PathVariable Long id) {
        blogService.deleteBlogEntry(id);
        return ResponseEntity.ok(200);
    }
}
