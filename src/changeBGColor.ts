const colors = [
  'rgb(255, 120, 120)',
  'rgb(255, 150, 120)',
  'rgb(255, 255, 120)',
  'rgb(150, 255, 120)',
  'rgb(120, 255, 120)',
  'rgb(120, 255, 150)',
  'rgb(120, 255, 255)',
  'rgb(120, 150, 255)',
  'rgb(120, 120, 255)',
  'rgb(150, 120, 255)',
  'rgb(255, 120, 155)',
  'rgb(255, 120, 150)',
];

const changeBGColor = (element: HTMLElement | null): void => {
  if (element) {
    const currentColor = element.style.backgroundColor;

    if (currentColor === 'rgb(255, 120, 150)') {
      element.style.backgroundColor = colors[0];
    } else {
      element.style.backgroundColor = colors[colors.indexOf(currentColor) + 1];
    }
  }
};

export default changeBGColor;
