import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  baseUrl = "http://localhost:8080/api/v1/"

  constructor() { }


  public getBlogEntries() {
    const url = this.baseUrl + "blogentries";
    return fetch(url).then(response => response.json()).then(data => Promise.resolve(data));
  }

  public getBlogEntry(id) {
    const url = this.baseUrl + "blogentry" + "/" + id;
    return fetch(url).then(response => response.json()).then(data => Promise.resolve(data));
  }

  public createBlogEntry(entry: { title, description, content }) {
    const url = this.baseUrl + "blogentry";
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
    const url = this.baseUrl + "blogentry" + "/" + id;
    return fetch(url, { method: 'DELETE' }).then(response => response.json()).then(data => Promise.resolve(data));
  }
}