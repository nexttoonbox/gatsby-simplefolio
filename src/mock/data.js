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
  img: 'project.jpg',
  paragraphOne: 'Nexttoon is a website for reading and following your faviorte arabic manga and webtoon artists',
  paragraphTwo: 'NextToon is improving and coming with new version in the next few weeks',
  paragraphThree: 'for more information and update visit our twitter account',
  twitter: 'https://www.nexttoon.net', // if no resume, the button will not show up
};
// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'NextToon V.3.0',
    info: 'All new All improved',
    info2: 'NextToon 3.0 will have a new homepage and new style',
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
