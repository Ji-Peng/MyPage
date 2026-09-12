import type { ActivitiesData, ProgramCommitteeItem, TalkItem, SoftwareItem, ProjectItem } from './types';
import activitiesData from './activities.json';

export const activities: ActivitiesData = activitiesData as ActivitiesData;
export const programCommittee: ProgramCommitteeItem[] = activities.programCommittee;
export const talks: TalkItem[] = activities.talks;
export const software: SoftwareItem[] = activities.software;
export const projects: ProjectItem[] = activities.projects;

export default activities;
