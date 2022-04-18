export const intro = [
  'Hiya!',
  'It looks like you found the terminal!',
  'This is still a work in progress but feel free to type in a command.'
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
