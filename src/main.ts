import populateCarousel from './helpers/populateCarousel';
import projects from './data/projects';
import renderProjectCards from './helpers/renderProjects';
import technologies from './data/technologies';
import './style.scss';

const projectCardsContainer = document.getElementById('project-cards');

if (projectCardsContainer) renderProjectCards(projectCardsContainer, projects);

const carousel = document.getElementById('carousel');

if (carousel) populateCarousel(carousel, technologies);
