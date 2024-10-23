const isAlive = (cell, neighbours) =>
  ((neighbours === 3) || (Boolean(cell) && neighbours === 2)) ? 1 : 0;

const generate = (root) => new Array(root * root).fill(0);

const add = (...args) => args.reduce((accumulator, current) =>
  accumulator + (current || 0), 0)

const countNeighbours = (cells, index) => {
  const width = Math.sqrt(cells.length)
  return add(
    cells[index + 1] +
    cells[index + width] +
    cells[index + width + 1]
  );
};

const regenerate = cells => cells.map(cell => isAlive(cell, 0));

window.game = {
  isAlive,
  generate,
  regenerate,
  countNeighbours
};
