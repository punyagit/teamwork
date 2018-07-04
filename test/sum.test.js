const sum = require('../sum');
//const multiply = require('../sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum.add(1, 2)).toBe(3);
  });

  test('adds -5 + 2 to equal -3', () => {
    expect(sum.add(-5, 2)).toBe(-3);
  });

  test('adds "1" + 2 cannot be added ', () => {
    expect(sum.add("1", 2)).toBe("String can't be Calculated");
  });

  test('[1,4]It should return 10', () => {
    expect(sum.sumAll(1, 4)).toBe(10);
  });

  test('[4, 1] should return 10', () => {
    expect(sum.sumAll(4, 1)).toBe(10);
  });

  