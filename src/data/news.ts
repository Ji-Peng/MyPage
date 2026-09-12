import type { NewsItem } from './types';
import newsData from './news.json';

export const news: NewsItem[] = newsData as NewsItem[];
export default news;
