const setupCounter = (element: HTMLButtonElement): void => {
  let counter = 0
  const setCounter = (count: number): void => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', (): void => setCounter(counter + 1))
  setCounter(0)
};

export default setupCounter;
