import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mark Ritchie | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `I'm a friendly neighborhood web developer who wants to use JavaScript to make your dreams come true.`, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi, you can call me`,
  name: 'Mark.',
  subtitle: `Let's develop our dreams.`,
  cta: 'Meet me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `The first desktop computer I used enchanted me right there in my South side elementary school in Chicago, IL. Ever since, I've been looking for ways to use this powerful tool to make life easier, connect with others and brighten someone's day.`,
  paragraphTwo: `Becoming a software engineer was the only logical choice, leading me to learn languages from Python to JavaScript to Ruby. All used to create modern fullstack web applications and bring the power of a connected world to our fingertips.`,
  paragraphThree: `Whatever you need, we can build it together.`,
  resume: 'https://docs.google.com/document/d/13JypgmsSuhfmF5x_mJSht7rnwWThIyrv0t6eRN1CYbA/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Dungeon Buddy',
    info: `Getting your friends together to play TTRPG is hard, so why not make it easier by guiding newbs and veterans alike through character and party creation? This was the inspiration for this growing gaming companion built as a final project in General Assembly's Software Engineering Immersive.`,
    info2: `The front-end of this MERN app (linked below) is built with React (utilizing functional components and hooks) and TypeScript, and uses Apollo GraphQL to communicate with the backend implementing all RESTful actions over a GraphQL API.`,
    url: `https://dngn-frnt.herokuapp.com/`,
    repo: 'https://github.com/markthesecond/dngn-frnt', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Got an idea you want the world to see? I can help.',
  btn: 'Wanna Chat?',
  email: 'mwritchie2@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/DarbyBohnWulf',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/markwritchie',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/markthesecond',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
