const bemmit = require('./index');

describe('Creates BEM-compliant block names', () => {
  test('generates a block-level class name', () => {
    expect(bemmit('foo')()).toEqual('foo');
  });

  test('generates a block-level class names with one modifier', () => {
    expect(bemmit('foo')(null, ['bar'])).toEqual('foo foo--bar');
  });

  test('generates a block-level class names with multiple modifiers', () => {
    expect(bemmit('foo')(null, ['bar', 'bat'])).toEqual('foo foo--bar foo--bat');
  });
});

describe('Creates BEM-compliant element names', () => {
  test('generates an element-level class name', () => {
    expect(bemmit('foo')('bar')).toEqual('foo__bar');
  });

  test('generates an element-level class name with one modifier', () => {
    expect(bemmit('foo')('bar', ['bat'])).toEqual('foo__bar foo__bar--bat');
  });

  test('generates an element-level class name with multiple modifiers', () => {
    expect(bemmit('foo')('bar', ['bat', 'baz'])).toEqual('foo__bar foo__bar--bat foo__bar--baz');
  });
});
