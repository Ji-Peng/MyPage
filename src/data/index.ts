/**
 * Barrel export for Dr. Jipeng Zhang's academic website data layer.
 */

export * from './types';
export * from './profile';
export * from './publications';
export * from './activities';
export * from './scholar';
export * from './news';

import profile from './profile';
import publications, { selectedPublications } from './publications';
import activities, { programCommittee, talks, software, projects } from './activities';
import scholar from './scholar';
import news from './news';

export default {
  profile,
  publications,
  selectedPublications,
  activities,
  programCommittee,
  talks,
  software,
  projects,
  scholar,
  news,
};

