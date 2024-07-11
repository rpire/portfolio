import { hideNavbar, showNavbar } from './helpers/navbar';
import populateCarousel from './helpers/populateCarousel';
import projects from './data/projects';
import renderProjectCards from './helpers/renderProjects';
import technologies from './data/technologies';
import updateMessageCharCount from './helpers/charCounter';
import './style.scss';

document.getElementById('show')?.addEventListener('click', (): void => showNavbar());

document.getElementById('hide')?.addEventListener('click', (): void => hideNavbar());

[...document.getElementsByClassName('navlink')].forEach((navlink) =>
  navlink.addEventListener('click', (): void => hideNavbar()),
);

const projectCardsContainer = document.getElementById('project-cards');

if (projectCardsContainer) renderProjectCards(projectCardsContainer, projects);

const carousel = document.getElementById('carousel');

if (carousel) populateCarousel(carousel, technologies);

document.getElementById('message')?.addEventListener('input', updateMessageCharCount);
