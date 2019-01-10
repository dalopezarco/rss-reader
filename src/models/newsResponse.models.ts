import { aNew } from './aNew.models';
export interface newsResponse {
  status: 'ok';
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: aNew[];
}
