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

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Manga and webtoon',
    info: 'Nexttoon is a website for reading and following your faviorte arabic manga and webtoon artists',
    info2: 'NextToon is improving and coming with new version in the next few weeks',
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
