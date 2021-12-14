const {filterInput} = require('./filterInput');

function average(numbers) {
  const numsWithoutNaN = filterInput(numbers);
  return (
    numsWithoutNaN.reduce((p, c) => p + c, 0) / numsWithoutNaN.length
  );
}

module.exports = {average};
