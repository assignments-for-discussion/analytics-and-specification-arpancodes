function filterInput(numbers) {
  return numbers.filter((num) => !isNaN(num));
}

module.exports = {filterInput};
