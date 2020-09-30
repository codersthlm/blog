import { Injectable } from '@angular/core';

const BASE_URL = "http://localhost:8080/api/v1"

@Injectable({
  providedIn: 'root'
})


export class BlogServiceService {
  constructor() { }

  public getBlogEntries() {
    const url = `${BASE_URL}/blogentries`;
    return fetch(url).then(response => response.json()).then(data => Promise.resolve(data));
  }

  public getBlogEntry(id) {
    const url = `${BASE_URL}/blogentry/${id}`;
    return fetch(url).then(response => response.json()).then(data => Promise.resolve(data));
  }

  public createBlogEntry(entry: { title, description, content }) {
    const url = `${BASE_URL}/blogentry`;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entry)
    }).then(response => response.json()).then(data => Promise.resolve(data));
  }

  public deleteBlogEntry(id) {
    const url = `${BASE_URL}/blogentry/${id}`;
    return fetch(url, { method: 'DELETE' }).then(response => response.json()).then(data => Promise.resolve(data));
  }
}