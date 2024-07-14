import logo from '/rpire-logo.svg';

const validatePresence = (value: string): boolean => !value;
const validateMaxLength = (value: string, max: number): boolean => value.length > max;
const validateMinLength = (value: string, min: number): boolean => value.length < min;
const validateFormat = (value: string, format: RegExp): boolean => !value.match(format);

export const isValidName = (nameInput: HTMLInputElement): boolean => {
  const nameValue = nameInput.value;
  const nameError = document.getElementById('name-error') as HTMLElement;

  if (validatePresence(nameValue)) {
    nameError.innerText = "can't be blank";
  } else if (validateMaxLength(nameValue, 50)) {
    nameError.innerText = 'is too long (max 50)';
  } else {
    nameError.innerText = '';
    nameInput.classList.remove('border-error');

    return true;
  }

  nameInput.classList.add('border-error');

  return false;
};

export const isValidEmail = (emailInput: HTMLInputElement): boolean => {
  const emailValue = emailInput.value;
  const emailError = document.getElementById('email-error') as HTMLElement;

  if (validatePresence(emailValue)) {
    emailError.innerText = "can't be blank";
  } else if (validateFormat(emailValue, /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
    emailError.innerText = 'is not valid';
  } else if (validateMaxLength(emailValue, 150)) {
    emailError.innerText = 'is too long (max 150)';
  } else {
    emailError.innerText = '';
    emailInput.classList.remove('border-error');

    return true;
  }

  emailInput.classList.add('border-error');

  return false;
};

export const isValidMessage = (message: HTMLTextAreaElement): boolean => {
  const messageValue = message.value;
  const messageError = document.getElementById('message-error') as HTMLElement;

  if (validateMinLength(messageValue, 20)) {
    messageError.innerText = 'is too short (min 20)';
  } else if (validateMaxLength(messageValue, 600)) {
    messageError.innerText = 'is too long (max 600)';
  } else {
    messageError.innerText = '';
    message.classList.remove('border-error');

    return true;
  }

  message.classList.add('border-error');

  return false;
};

const areFormInputsValid = (name: HTMLInputElement, email: HTMLInputElement, message: HTMLTextAreaElement): boolean => {
  const validName = isValidName(name);
  const validEmail = isValidEmail(email);
  const validMessage = isValidMessage(message);

  return validName && validEmail && validMessage;
};

const generateSuccessMessage = (section: HTMLElement): void => {
  section.innerHTML = '';

  const title = document.createElement('h2');
  title.style.marginBottom = '90px';
  const titleText = document.createTextNode('Received');

  const paragraph = document.createElement('p');
  paragraph.classList.add('response');
  const paragraphText = document.createTextNode(
    "Thank you for reaching out! I've got you message and I'll be contacting you soon. I'll be as quick as possible. 🚀",
  );

  const image = document.createElement('img');
  image.src = logo;
  image.alt = "Rubén's personal logo";
  image.style.display = 'block';
  image.style.maxWidth = '150px';
  image.style.margin = '50px auto 20px';

  title.appendChild(titleText);

  paragraph.appendChild(paragraphText);

  section.appendChild(title);
  section.appendChild(paragraph);
  section.appendChild(image);
};

const generateErrorMessage = (section: HTMLElement): void => {
  section.innerHTML = '';

  const title = document.createElement('h2');
  title.style.marginBottom = '90px';
  const titleText = document.createTextNode('Whoops');

  const paragraph = document.createElement('p');
  paragraph.classList.add('response');
  const paragraphText = document.createTextNode(
    'It seems like something went wrong when submitting the form... Please wait a couple of minutes before trying again.',
  );

  const mailMe = document.createElement('p');
  mailMe.classList.add('response');
  const mailMeStart = document.createTextNode('If this issue persists, please mail me at ');
  const mailMeEnd = document.createTextNode('.');

  const mailMeLink = document.createElement('a');
  mailMeLink.href = 'mailto:rubenpire7@gmail.com';
  const mailMeLinkText = document.createTextNode('rubenpire7@gmail.com');

  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('primary-button');
  button.style.margin = '80px auto';
  button.addEventListener('click', () => location.reload());
  const buttonText = document.createTextNode('Retry');

  title.appendChild(titleText);

  paragraph.appendChild(paragraphText);

  mailMeLink.appendChild(mailMeLinkText);

  mailMe.appendChild(mailMeStart);
  mailMe.appendChild(mailMeLink);
  mailMe.appendChild(mailMeEnd);

  button.appendChild(buttonText);

  section.appendChild(title);
  section.appendChild(paragraph);
  section.appendChild(mailMe);
  section.appendChild(button);
};

const handleSubmit = (event: Event): void => {
  event.preventDefault();

  const section = document.getElementById('contact') as HTMLElement;
  const name = document.getElementById('name') as HTMLInputElement;
  const email = document.getElementById('email') as HTMLInputElement;
  const message = document.getElementById('message') as HTMLTextAreaElement;

  if (areFormInputsValid(name, email, message)) {
    fetch(import.meta.env.VITE_MAILER_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        submission: {
          data: {
            name: name.value,
            email: email.value,
            message: message.value,
          },
        },
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error();

        generateSuccessMessage(section as HTMLElement);
      })
      .catch(() => generateErrorMessage(section as HTMLElement));
  }
};

export default handleSubmit;
