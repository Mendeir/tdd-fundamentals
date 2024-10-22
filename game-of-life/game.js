function isAlive(cell, neighbours) {
  if (!Boolean(cell) && neighbours === 3) {
    return 1;
  }
  return 0;
}

window.game = {
  isAlive
};
