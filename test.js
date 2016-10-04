const bemmit = require('./');
const test = require('tape');

test('BEM-style class generation', assert => {
  assert.plan(7);
  
  // bemmit returns a function.
  assert.equal(typeof bemmit('foo'), 'function');

  // Without an argument, returns the block class.
  assert.equal(bemmit('foo')(), 'foo');

  // With a modifier, returns the block class + modifier class.
  assert.equal(bemmit('foo')(null, ['bar']), 'foo foo--bar');

  // With modifiers, returns the block class + modifier classes.
  assert.equal(bemmit('foo')(null, ['bar', 'bat']), 'foo foo--bar foo--bat');

  // With an argument, returns the element class.
  assert.equal(bemmit('foo')('bar'), 'foo__bar');

  // With a modifier, returns the element class + modifier class.
  assert.equal(bemmit('foo')('bar', ['bat']), 'foo__bar foo__bar--bat');

  // With modifiers, returns the element class + modifier classes.
  assert.equal(bemmit('foo')('bar', ['bat', 'baz']), 'foo__bar foo__bar--bat foo__bar--baz');
});
