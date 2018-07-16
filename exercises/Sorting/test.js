const sorting = require('./index');

describe('Sorting', () => {
  test('should exists', () => {
    expect(sorting).toBeDefined();
    expect(typeof sorting).toEqual('function');
  });
  
  test('first data set', () => {
    expect(sorting([
        {key: "a", distance: 1},
        {key: "b", distance: 5},
        {key: "e", distance: 9},
        {key: "f", distance: 10},
        {key: "h", distance: 13},
        {key: "k", distance: 2},
        {key: "l", distance: 4},
        {key: "a", distance: 7},
        {key: "g", distance: 6}
    ])).toEqual(
        {
            near: [
                { key: 'k', distance: 2 }
            ],
            medium: [
                { key: 'b', distance: 5 },
                { key: 'k', distance: 2 },
                { key: 'l', distance: 4 },
                { key: 'g', distance: 6 }
            ],
            far: [
                { key: 'b', distance: 5 },
                { key: 'e', distance: 9 },
                { key: 'f', distance: 10 },
                { key: 'k', distance: 2 },
                { key: 'l', distance: 4 },
                { key: 'g', distance: 6 }
            ]
        }
    );
  });
});
