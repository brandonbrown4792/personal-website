const projectNavLink = document.querySelector('#projects-nav-link');
const scrollDown = document.querySelector('#scroll-down');
const skillsetContainer = document.querySelector('#skillset');
const projectsContainer = document.querySelector('#projects');

projectNavLink.addEventListener('click', () => window.scrollTo(0, projectsContainer.offsetTop));

if (scrollDown) {
  scrollDown.addEventListener('click', () => window.scrollTo(0, skillsetContainer.offsetTop));
}