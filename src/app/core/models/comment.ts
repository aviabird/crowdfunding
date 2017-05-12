export class Comment {
  id: number;
  body: string;
  user_id: number;
  author_name: string;
  author_image: string;
  project_id: number;
  parent_id: number;
  created_at: Date;
  child_comments: Comment[];
}
