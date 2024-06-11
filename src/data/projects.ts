export interface Project {
  id: string;
  title: string;
  imageURL: string;
  description: string;
  tags: string[];
  githubURL: string;
  liveURL: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Project Name',
    imageURL: 'https://img.freepik.com/premium-photo/laptop-with-code-programming_587448-2809.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, necessitatibus ea delectus, sit repellendus facilis soluta odit itaque eos non eum temporibus labore, enim molestiae consequatur iusto! Hic, fuga debitis?',
    tags: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Netlify', 'AWS', 'EC2'],
    githubURL: '#',
    liveURL: '#',
  },
  {
    id: '02',
    title: 'Other Project',
    imageURL: 'https://img.freepik.com/premium-photo/laptop-with-code-programming_587448-2809.jpg',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, necessitatibus ea delectus, sit repellendus facilis soluta odit itaque eos non eum temporibus labore, enim molestiae consequatur iusto! Hic, fuga debitis?',
    tags: ['HTML', 'Sass', 'TypeScript', 'Vite', 'Vitest', 'AWS', 'EC2', 'RTK'],
    githubURL: '#',
    liveURL: '#',
  },
  {
    id: '03',
    title: 'Last Project',
    imageURL: 'https://img.freepik.com/premium-photo/laptop-with-code-programming_587448-2809.jpg',
    description:
      'This description will be a little different since I want to test some stuff, I will just write some random stuff for now and it should work just fine.',
    tags: ['Ruby', 'Ruby on Rails', 'Sass', 'PostgreSQL', 'Heroku', 'AWS S3'],
    githubURL: '#',
    liveURL: '#',
  },
];

export default projects;
