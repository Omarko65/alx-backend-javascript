// prints to STOUT
const displayMessage = (d) => {
  // function reads what is passed to d to stdout
  process.stdout.write(d + '\n');
};

module.exports = displayMessage;
