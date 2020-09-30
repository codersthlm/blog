package com.blog.repository;

import com.blog.model.BlogEntry;

import org.springframework.data.jpa.repository.JpaRepository;


public interface BlogEntryRepository extends JpaRepository<BlogEntry,Long>
{

}