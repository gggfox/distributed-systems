import Comment from './comment';

export default interface Post {
  id?: string;
  title: string;
  comments: Comment[]
}
