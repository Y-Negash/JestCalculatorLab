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

  test('can multiply two positive numbers', ()=> {
    expected = 16;
    actual = multiply(8, 2);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', ()=> {
    expected = 16;
    actual = multiply(-8, -2);
    expect(actual).toBe(expected);
  });
});

describe('divide', () => {
  test('can divide two positive numbers', ()=> {
    expected = 4;
    actual = divide(32, 8);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', ()=> {
    expected = 4;
    actual = divide(-32, -8);
    expect(actual).toBe(expected);
  })
});

describe('modulus', () => {

  test('can find remainder of two positive numbers', ()=> {
    expected = 0;
    actual = modulus(32, 4);
    expect(actual).toBe(expected);
  });

  test('can find remainder of two negative numbers', ()=> {
    expected = -2;
    actual = modulus(-56, -3);
    expect(actual).toBe(expected);
  });
  
});

describe('even', () => {

});

describe('odd', () => {

});
