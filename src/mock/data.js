import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'NextToon', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Hi, NextToon is coming soon', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, NextToon is ',
  name: 'coming soon',
  subtitle: 'Site under maintenance',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'NextToon is improving',
  paragraphTwo: 'wait for it',
  paragraphThree: 'Just few weeks',
  twitter: 'https://www.nexttoon.net', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Manga and webtoon',
    info: 'read and follow arabic artist',
    info2: '',
    url: 'nexttoon.net',
    repo: 'https://www.nexttoon.net', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nexttoonbox@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/nexttoonnet',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
