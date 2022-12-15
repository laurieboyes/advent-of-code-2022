import day4 from './04';

describe('04', () => {
  it('should return a boolean', () => {
    expect(typeof day4([])).toBe('boolean');
  });

  it('should return true whe given one box', () => {
    expect(day4([{ l: 1, w: 1, h: 1 }])).toBe(true);
  });

  it('should return false when given two boxes of the same size', () => {
    expect(
      day4([
        { l: 1, w: 1, h: 1 },
        { l: 1, w: 1, h: 1 },
      ])
    ).toBe(false);
  });

  it('should return true when given two boxes where one is twice as big as the other', () => {
    expect(
      day4([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
      ])
    ).toBe(true);
  });

  it('should return false when given two boxes one is bigger than the other except in one dimension', () => {
    expect(
      day4([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 1 },
      ])
    ).toBe(false);
  });

  it('should return false when given two boxes that fit and one that doesn’t', () => {
    expect(
      day4([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 1, w: 1, h: 1 },
      ])
    ).toBe(false);
  });

  it('should pass this test that failed', () => {
    expect(
      day4([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 2, w: 10, h: 2}
      ])
    ).toBe(false);
  })
});
