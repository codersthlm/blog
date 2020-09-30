package com.blog.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Entity
@Table

public class BlogEntry {
    @Id
    @GeneratedValue
    private Long id;


    protected BlogEntry() {}

    public BlogEntry(String title, String description, String content, String imageUrl) {
      this.title = title;
      this.description = description;
      this.content = content;
      this.imageUrl = imageUrl;
    }
  

    private String title;
    private String description;
    private String content;
    private String imageUrl;
    
    @Transient
    private String author = "Blog Author";


    @CreationTimestamp
    private Date createdAt;

    @UpdateTimestamp
    private Date updatedAt;

    public String getTitle() {
        return this.title;
    }
    
    public String getDescription() {
        return this.description;
    }
    
    public String getContent() {
        return this.content;
    }

    public Date getUpdatedAt() {
        return this.updatedAt;
    }

    public Date getCreatedAt() {
        return this.createdAt;
    }

    public String getAuthor() {
        return this.author;
    }

    public String getImageUrl() {
        return this.imageUrl;
    }
    
    public Long getId() {
        return this.id;
    }

}


