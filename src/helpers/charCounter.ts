const displayCount = (count: number, message: HTMLTextAreaElement): void => {
  const display = document.getElementById('char-count');

  if (count > 600) {
    display?.classList.add('error');
    message.classList.add('border-error');
  } else {
    display?.classList.remove('error');
    message.classList.remove('border-error');
  }

  if (display) display.innerText = `${count} / 600`;
};

const updateMessageCharCount = (event: Event): void => {
  const message = event.target as HTMLTextAreaElement;

  displayCount(message.value.length, message);
};

export default updateMessageCharCount;
