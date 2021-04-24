let colors = [
  { name: 'red', value: 'Red' },
  { name: 'yellow', value: 'Yellow' },
  { name: 'green', value: 'Green' },
  { name: 'blue', value: 'Blue' },
  { name: 'brown', value: 'Brown' },
  { name: 'purple', value: 'Purple' },
];
const members = [
  { icon: 'red', firstname: 'Kikou' },
  { icon: 'yellow', firstname: 'lol' },
];

members.forEach((member) => {
  colors = colors.filter((color) => color.name !== member.icon);
});
console.log(colors);
