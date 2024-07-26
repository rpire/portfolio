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
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, necessitatibus ea delectus, sit repellendus facilis soluta odit itaque eos non eum temporibus labore, enim molestiae consequatur iusto! Hic, fuga debitis?',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Netlify', 'AWS', 'EC2'],
    liveURL: '#',
  },
  {
    id: '02',
    title: 'Math Magicians',
    imageURL: mathMagicians,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, necessitatibus ea delectus, sit repellendus facilis soluta odit itaque eos non eum temporibus labore, enim molestiae consequatur iusto! Hic, fuga debitis?',
    tags: ['HTML', 'Sass', 'TypeScript', 'Vite', 'Vitest', 'AWS', 'EC2', 'RTK'],
    githubURL: '#',
    liveURL: '#',
  },
  {
    id: '03',
    title: 'Paytrack',
    imageURL: paytrack,
    description:
      'This description will be a little different since I want to test some stuff, I will just write some random stuff for now and it should work just fine.',
    tags: ['Ruby', 'Ruby on Rails', 'Sass', 'PostgreSQL', 'Heroku', 'AWS S3'],
    githubURL: '#',
    liveURL: '#',
  },
];

export default projects;
