import { HttpService } from './../../../core/services/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentHttpService {

  constructor(
    private http: HttpService
  ) { }

  fetchProjectComments(project_id: number) {
    return this.http.get(
      `/api/v1/comments/${project_id}`
    ).map((res: Response) => {
      return res.json();
    });
  }

  addNewComment(comment) {
    return this.http.post(
      '/api/v1/comments', comment
    ).map((res: Response) => {
      return res.json();
    });
  }

  editComment(comment) {
    const id = comment.id;
    return this.http.put(
      `/api/v1/comments/${id}`, comment
    ).map((res: Response) => {
      return res.json();
    });
  }

  deleteComment(id: number) {
    return this.http.delete(
      `/api/v1/comments/${id}`, {}
    ).map((res: Response) => {
      console.log('response', res.json());
      return res.json().id;
    });
  }

}
