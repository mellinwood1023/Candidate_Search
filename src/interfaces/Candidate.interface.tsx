// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    id: string;
    name: string;
    email: string;
    phone?: string;
    location?: string;
    skills: string[];
    experience: number; // in years
    resumeUrl?: string;
    appliedDate?: string; // ISO date string
  }