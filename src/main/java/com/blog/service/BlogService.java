package com.blog.service;

import java.util.List;

import com.blog.model.BlogEntry;
import com.blog.repository.BlogEntryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BlogService  {
    @Autowired
    private BlogEntryRepository blogEntryRepository;
    
    public List<BlogEntry> getBlogs() {
        return blogEntryRepository.findAll();
    }
    
    public BlogEntry createBlogEntry(BlogEntry blogEntry) {
        System.out.println(blogEntry);
        return blogEntryRepository.save(blogEntry);

    }

    public BlogEntry getBlogEntry(Long id) {
        return blogEntryRepository.findById(id).orElseThrow();
    }

    public void deleteBlogEntry(Long id) {
        blogEntryRepository.deleteById(id);
    }
}