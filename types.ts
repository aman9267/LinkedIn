
export interface User {
  id: string;
  name: string;
  headline: string;
  avatar: string;
  connections?: number;
  profileViews?: number;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
  image?: string;
}

export interface Suggestion {
  id: string;
  name: string;
  headline: string;
  avatar: string;
}
