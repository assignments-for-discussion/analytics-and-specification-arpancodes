function average(numbers) {
  const numsWithoutNaN = numbers.filter((num) => !isNaN(num));
  return (
    numsWithoutNaN.reduce((p, c) => p + c, 0) / numsWithoutNaN.length
  );
}

module.exports = {average};
