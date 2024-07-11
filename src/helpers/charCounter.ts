const displayCount = (count: number): void => {
  const display = document.getElementById('char-count');

  count > 600 ? display?.classList.add('error') : display?.classList.remove('error');

  if (display) display.innerText = `${count} / 600`;
};

const updateMessageCharCount = (event: Event): void => displayCount((event.target as HTMLTextAreaElement).value.length);

export default updateMessageCharCount;
