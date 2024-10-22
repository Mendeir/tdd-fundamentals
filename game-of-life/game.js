const isAlive = (cell, neighbours) =>
  ((neighbours === 3) || (Boolean(cell) && neighbours === 2)) ? 1 : 0;

const generate = () => [0];

window.game = {
  isAlive,
  generate
};
