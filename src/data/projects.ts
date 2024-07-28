import borluvDevelopments from '../assets/images/projects/borluv-developments.png';
import mathMagicians from '../assets/images/projects/math-magicians.png';
import paytrack from '../assets/images/projects/paytrack.png';

export interface Project {
  id: string;
  title: string;
  imageURL: string;
  description: string;
  tags: string[];
  githubURL?: string;
  liveURL: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Borluv Developments',
    imageURL: borluvDevelopments,
    description:
      "A modern, fully responsive React website built with TypeScript and Sass. The site fetches property listings and opportunities directly from Borluv's database, providing clients with information on real estate offerings. Explore properties, view details, and discover investment opportunities effortlessly",
    tags: ['React JS', 'Sass', 'TypeScript', 'Vite', 'React Router'],
    liveURL: 'https://borluv.com/',
  },
  {
    id: '02',
    title: 'Math Magicians',
    imageURL: mathMagicians,
    description:
      'A single-page application (SPA) calculator developed using React. The calculator features a user-friendly interface for performing basic arithmetic operations. Tested with Jest and React Testing Library to ensure accuracy and reliability.',
    tags: ['React JS', 'CSS', 'Jest', 'React Router'],
    githubURL: 'https://github.com/rpire/math-magicians/',
    liveURL: 'https://rpire.github.io/math-magicians/',
  },
  {
    id: '03',
    title: 'Paytrack',
    imageURL: paytrack,
    description:
      'Paytrack is a light Ruby on Rails application designed for efficient budget management. It allows users to track their expenses by associating transactions with specific categories. Easily visualize spending patterns and analyze where your money goes',
    tags: ['Ruby', 'Ruby on Rails', 'Sass', 'PostgreSQL', 'Heroku'],
    githubURL: 'https://github.com/rpire/budget-app/',
    liveURL: 'https://rpire-paytracker.herokuapp.com/',
  },
];

export default projects;
