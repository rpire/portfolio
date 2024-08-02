const populateCarousel = (carousel: HTMLElement, imageURLs: string[]): void => {
  const repeatedURLs = [...imageURLs, ...imageURLs];

  repeatedURLs.forEach((url) => {
    const image = document.createElement('img');
    image.src = url;
    image.alt = 'Carousel image';

    const separator = document.createElement('div');
    separator.classList.add('tech-separator');

    carousel.appendChild(image);
    carousel.appendChild(separator);
  });
};

export default populateCarousel;
