import type { Project } from '../data/projects';

const generateProjectTag = (tagValue: string): HTMLLIElement => {
  const tag = document.createElement('li');
  tag.classList.add('project-tag');

  const tagText = document.createTextNode(tagValue);

  tag.appendChild(tagText);

  return tag;
};

const generateProjectCard = (project: Project): HTMLLIElement => {
  const card = document.createElement('li');
  card.classList.add('project-card');

  const container = document.createElement('div');

  const imageFrame = document.createElement('div');
  imageFrame.classList.add('project-image-frame');

  const image = document.createElement('img');
  image.src = project.imageURL;
  image.alt = `Project ${project.id} mockup`;
  image.classList.add('project-image');

  const information = document.createElement('div');
  information.classList.add('project-info');

  const title = document.createElement('h3');
  title.classList.add('project-title');

  const number = document.createElement('span');

  const numberValue = document.createTextNode(project.id);

  const titleText = document.createTextNode(` ${project.title}`);

  const description = document.createElement('p');

  const descriptionText = document.createTextNode(project.description);

  const tags = document.createElement('ul');
  tags.classList.add('project-tags');

  const buttons = document.createElement('div');
  buttons.classList.add('project-buttons');

  const githubButton = document.createElement('a');
  githubButton.href = project.githubURL;
  githubButton.classList.add('github-button');

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('bx', 'bxl-github');

  const githubButtonText = document.createTextNode('GitHub');

  const liveButton = document.createElement('a');
  liveButton.href = project.liveURL;
  liveButton.classList.add('secondary-button');

  const liveButtonText = document.createTextNode('See Live Site');

  imageFrame.appendChild(image);

  number.appendChild(numberValue);

  title.appendChild(number);
  title.appendChild(titleText);

  description.appendChild(descriptionText);

  project.tags.forEach((tag) => tags.appendChild(generateProjectTag(tag)));

  information.appendChild(title);
  information.appendChild(description);
  information.appendChild(tags);

  container.appendChild(imageFrame);
  container.appendChild(information);

  githubButton.appendChild(githubIcon);
  githubButton.appendChild(githubButtonText);

  liveButton.appendChild(liveButtonText);

  buttons.appendChild(githubButton);
  buttons.appendChild(liveButton);

  card.appendChild(container);
  card.appendChild(buttons);

  return card;
};

const renderProjectCards = (element: HTMLElement, projects: Project[]): void =>
  projects.forEach((project) => element.appendChild(generateProjectCard(project)));

export default renderProjectCards;
