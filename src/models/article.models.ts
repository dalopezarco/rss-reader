export interface Article {
  author: string;
  categories: string[];
  description: string;
  enclosure: {
    length: string;
    link: string;
    type: string;
  };
  guid: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}
