import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";

import { Post } from "../models/post.model";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post> {
    return this.http
      .get<Post>(`https://hn.algolia.com/api/v1/search_by_date?tags=story`)
      .pipe(map(res => new Post().deserialize(res)));
  }
}
