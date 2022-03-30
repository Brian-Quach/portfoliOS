export const intro = [
  'Hey. My name is Brian Quach.',
  "I'm a full stack web developer based in Toronto.",
  'Welcome to my porfolio!',
  'This is still a work in progress but feel free to type a command or interact with the page!'
];

export const commands = {
  echo: input => input,
  oche: input => input.split('').reverse().join(''),
  hello: () => 'Hello!',
  about: () =>
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula diam elementum placerat commodo. Aliquam vitae magna maximus, eleifend neque quis, pharetra risus.',
  help: () =>
    'The current commands that are available are: help, about, echo, oche'
};
