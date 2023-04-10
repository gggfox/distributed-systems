export interface Comment {
  id: string;
  content: string;
  status: string;
}

export interface Post {
  id: string;
  title: string;
  comments: Comment[];
}

export interface Event {
  type: string;
  data: any;
}
