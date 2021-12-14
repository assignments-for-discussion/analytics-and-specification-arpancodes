const {expect} = require('chai');
const {average} = require('../average');
const {filterInput} = require('../filterInput');

it('computes average of a list of numbers', ()=> {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN on an empty list', ()=> {
  expect(average([])).to.be.NaN;
});

it('ignores NaN in the input', ()=> {
  expect(average([1, NaN, 2])).to.be.approximately(1.5, 0.01);
});

it('removes NaN from the input', () => {
  expect(filterInput([1, NaN, 2])).to.be.eql([1, 2]);
});
