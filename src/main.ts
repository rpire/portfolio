import projects from './data/projects';
import renderProjectCards from './helpers/renderProjects';
import './style.scss';

const projectCardsContainer = document.getElementById('project-cards');

if (projectCardsContainer) renderProjectCards(projectCardsContainer, projects);
