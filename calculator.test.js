const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1000000;
    actual = sum(500000, 500000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -1000000;
    actual = sum(-500000, -500000);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 2;
    actual = sum(2, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two positive numbers', ()=> {
    expected = 4;
    actual = subtract(6, 2);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', ()=> {
    expected = -4;
    actual = subtract(-6, -2);
    expect(actual).toBe(expected);
  })
});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
