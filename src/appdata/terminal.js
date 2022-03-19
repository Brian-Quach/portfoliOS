export const intro = [
  'Hey. My name is Brian Quach.',
  "I'm a full stack web developer based in Toronto.",
  'Welcome to my porfolio!',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Nam vehicula diam elementum placerat commodo.',
  'Blahblahblah (Something about typing a command or interacting with the page)'
];

export const commands = {
  echo: input => input,
  oche: input => input.split('').reverse().join(''),
  hello: () => 'Hello!',
  about: () =>
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula diam elementum placerat commodo. Aliquam vitae magna maximus, eleifend neque quis, pharetra risus.',
  help: () =>
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula diam elementum placerat commodo. Aliquam vitae magna maximus, eleifend neque quis, pharetra risus.'
};
