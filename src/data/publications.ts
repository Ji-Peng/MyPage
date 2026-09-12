import type { Publication } from './types';
import publicationsData from './publications.json';

export const publications: Publication[] = publicationsData as Publication[];
export const selectedPublications: Publication[] = publications.filter(p => p.selected);

export default publications;
