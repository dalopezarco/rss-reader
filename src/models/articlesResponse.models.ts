import { Article } from './article.models';
export interface articlesResponse {
  status: 'ok';
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: Article[];
}
