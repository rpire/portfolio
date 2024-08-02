const checkViewportWidth = (width: number): boolean => window.innerWidth <= width;

export const showNavbar = (): void => {
  if (checkViewportWidth(768)) {
    const navbar = document.getElementById('navbar');

    navbar?.classList.add('nav-visible', 'nav-drop');
  }
};

export const hideNavbar = (): void => {
  if (checkViewportWidth(768)) {
    const navbar = document.getElementById('navbar');

    navbar?.classList.remove('nav-drop');

    setTimeout(() => navbar?.classList.remove('nav-visible'), 500);
  }
};
