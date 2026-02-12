
import { Member, AgendaItem, Testimonial } from './types';

export const CLUB_NAME = "Millennium Toastmasters Club";
export const CLUB_LOCATION = "Trust Asian Training Center, Office 901, Bin Weidha Bldg (Same as Al Jamal), Behind Mediclinic Al Noor Hospital, Khalifa Street, Abu Dhabi, UAE";
export const MEETING_TIME = "Alternate Thursdays, 7:45 PM - 10:00 PM";
export const CONTACT_EMAIL = "millenniumtm.auh@gmail.com";
export const CONTACT_PHONE = "+971- 507 798624";
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Trust+Asian+Training+Center+Bin+Weidha+Bldg+Abu+Dhabi";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/millennium-toastmasters-club-abudhabi/",
  facebook: "https://www.facebook.com/millennium.tmclub",
  instagram: "https://www.instagram.com/millenniumtm_auh"
};

export const TMI_LINKS = {
  howItWorks: "https://www.toastmasters.org/about/all-about-toastmasters",
  pathways: "https://www.toastmasters.org/pathways-overview",
  resources: "https://www.toastmasters.org/resources",
  faq: "https://www.toastmasters.org/faq"
};

const getDriveUrl = (id: string) => `https://lh3.googleusercontent.com/d/${id}=s1000`;

const PHOTO_IDS = {
  POORNI: "1gEyTPE_EwfcSUnnFzOXs64bYtP8Ef21t",
  KULDEEP: "1KNZhbfClunScC9YW9w_ijHYWsRAhXBsb",
  JATINDER: "10PwIUEWAi21h1oubyLYWVYgHbKodGFsd",
  SEBASTIEN: "1uUuyDsXSSl9ZwaNuPwJPSPWzSnh8WkfG",
  MAQSOOD: "1_Bbkkg3w9dpAB8H8MvavmLijVksCbLX7",
  SAIKIRAN: "1ErGwKGSpdWmUnsFUuyrveEm7dM5-J87_",
  PUSHPA: "1mkX9aMKdFvIG6M8VmZDit3z5XZmm7U02",
};

export const EXCO_MEMBERS: Member[] = [
  {
    id: '1',
    name: 'TM Kuldeep Kaushik',
    role: 'Club President',
    bio: 'Leading our club with a vision to create a world-class platform for public speaking and leadership development in Abu Dhabi.',
    photo: getDriveUrl(PHOTO_IDS.KULDEEP),
    email: 'president@millenniumtm.com'
  },
  {
    id: '2',
    name: 'TM Jatinder K Dhillon',
    role: 'VP Education',
    bio: 'Dedicated to managing our educational pathways and ensuring every member progresses through their speech goals effectively.',
    photo: getDriveUrl(PHOTO_IDS.JATINDER)
  },
  {
    id: '3',
    name: 'TM Mohammad Maqsood Ali',
    role: 'VP Membership',
    bio: 'Passionate about growing our club family and ensuring that every new guest feels at home at Millennium Toastmasters.',
    photo: getDriveUrl(PHOTO_IDS.MAQSOOD)
  },
  {
    id: '4',
    name: 'TM Sebastien Jaulent',
    role: 'VP Public Relations',
    bio: 'Driving our club presence across digital and physical platforms to showcase the amazing talent within our community.',
    photo: getDriveUrl(PHOTO_IDS.SEBASTIEN)
  },
  {
    id: '5',
    name: 'TM Pushpa Singh',
    role: 'Secretary',
    bio: 'Maintaining organizational excellence through meticulous record-keeping and efficient club administration.',
    photo: getDriveUrl(PHOTO_IDS.PUSHPA)
  },
  {
    id: '6',
    name: 'DTM Poorni Sudhakar',
    role: 'Club Treasurer',
    bio: 'Managing club finances with integrity and transparency to support our members educational journey. Also serving as Immediate Past President.',
    photo: getDriveUrl(PHOTO_IDS.POORNI)
  },
  {
    id: '7',
    name: 'TM Sai Kiran Kalvakunta',
    role: 'Sergeant At Arms',
    bio: 'Ensuring our meeting environment is professional, welcoming, and perfectly staged for every presentation.',
    photo: getDriveUrl(PHOTO_IDS.SAIKIRAN)
  }
];

export const GALLERY_IMAGES = [
  getDriveUrl("1WN9afktTJGHrflj3Gji68Vyk7IF6_tSh"),
  getDriveUrl("1lD5dHE0YC93AsD6bH6TozVoqULqBKdUf"),
  getDriveUrl("1ZWmisDCWyTr1cLOBFQXPybBaQ_Rt3GU6"),
  getDriveUrl("1guFvbTxYsUu-JNB5xE-UzuJltqCfwJwr"),
  getDriveUrl("1rYjWZhJSGnst6-E53wk8lsssWAf4bIvP"),
  getDriveUrl("1z_1EGOdgjBO--1V5pyyMLa69TMawqgqM"),
  getDriveUrl("1My4oLWSYdIz2McpRYo2fIOQQZz3RCBFA"),
  getDriveUrl("1U0L5sFP9LVpNJ26zbdzMHXK5UIw1ncwb"),
  getDriveUrl("1J10XD2-4-lFY8Bny7kDJhkob_BnEMlP8"),
];

// Meeting #608 Official Agenda from PDF
export const MOCK_AGENDA: AgendaItem[] = [
  { id: '1', time: '08:00 PM', description: 'Sergeant-At-Arms Calls Meeting to Order', rolePlayer: 'TM Sai Kiran Kalvakunta' },
  { id: '2', time: '08:03 PM', description: "President's Address", rolePlayer: 'TM Kuldeep Kaushik' },
  { id: '3', time: '08:08 PM', description: 'Takeover by Toastmaster of the Evening', rolePlayer: 'TM Jatinder Kaur Dhillon' },
  { id: '4', time: '08:13 PM', description: 'TME Introduces Evaluators & Auxiliary Team (Ah-Counter, Timer, Grammarian)', rolePlayer: 'DTM Poorni & Team' },
  { id: '5', time: '08:17 PM', description: 'Thought for the Day: "React vs Response"', rolePlayer: "TM Wilson D'mello" },
  { id: '6', time: '08:21 PM', description: 'Humor for the Day', rolePlayer: 'TM Sabestien Jaulent' },
  { id: '7', time: '08:25 PM', description: 'Prepared Speech 1: "Who Was I - Cat or a Rat"', rolePlayer: 'TM Vijay Muniraj' },
  { id: '8', time: '08:32 PM', description: 'Prepared Speech 2: "Connection Is a Choice"', rolePlayer: 'TM Dana Fathah' },
  { id: '9', time: '08:39 PM', description: 'Prepared Speech 3: "Microplastics: Now Streaming in Your Blood"', rolePlayer: 'TM Irene Nuutila' },
  { id: '10', time: '08:46 PM', description: 'Prepared Speech 4: "A Near Miss - A Few Centimeters"', rolePlayer: 'TM Sai Kiran Kalvakunta' },
  { id: '11', time: '08:57 PM', description: 'Speech Evaluations Session', rolePlayer: 'TM Arafat, Sabestien, Martin, Wilson' },
  { id: '12', time: '09:15 PM', description: 'Table Topics Session', rolePlayer: 'TM Kamal Piryani' },
  { id: '13', time: '09:40 PM', description: 'Grammarian & Word Master Report', rolePlayer: 'TM Mohammad Maqsood Ali' },
  { id: '14', time: '09:42 PM', description: 'Ah Counter Report', rolePlayer: 'TM Gowtham Rajas' },
  { id: '15', time: '09:45 PM', description: 'General Evaluator Report', rolePlayer: 'DTM Poorni Sudhakar' },
  { id: '16', time: '09:55 PM', description: 'Closing Remarks & Awards', rolePlayer: 'TM Kuldeep Kaushik' },
];

export const MEETING_608_THEME = "Toastmasters: A Love Story";
export const MEETING_608_WORD = {
  word: "Effulgent",
  type: "Adjective",
  meaning: "Shining brightly; radiant, emanating joy, warmth, or goodness.",
  example: "She greeted us with an effulgent smile that erased every ounce of exhaustion."
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'DTM Poorni Sudhakar',
    photo: getDriveUrl(PHOTO_IDS.POORNI),
    quote: 'My journey from a hesitant beginner to a Distinguished Toastmaster has been life-changing. Toastmasters gave me the tools to not only speak but to lead with heart and purpose.',
    roleInClub: 'Treasurer & Past President'
  },
  {
    id: '2',
    name: 'TM Jatinder K Dhillon',
    photo: getDriveUrl(PHOTO_IDS.JATINDER),
    quote: 'Toastmasters is more than just public speaking; it is a community of like-minded individuals pushing each other to achieve excellence in every aspect of life.',
    roleInClub: 'VP Education'
  },
  {
    id: '3',
    name: 'TM Kuldeep Kaushik',
    photo: getDriveUrl(PHOTO_IDS.KULDEEP),
    quote: 'As President, I see members transform every single meeting. The confidence gained here ripples out into professional careers and personal relationships.',
    roleInClub: 'Club President'
  }
];
