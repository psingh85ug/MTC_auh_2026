
export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  email?: string;
  linkedin?: string;
}

export interface AgendaItem {
  id: string;
  time: string;
  description: string;
  rolePlayer: string;
}

export interface WordOfTheDay {
  word: string;
  type: string;
  meaning: string;
  examples: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  photo: string;
  quote: string;
  roleInClub?: string;
}
