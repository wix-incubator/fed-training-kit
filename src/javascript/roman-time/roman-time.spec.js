var romanTime = require('./roman-time');

it('should return IX:X for 09:10', function () {
  assert(romanTime('09:10'), 'IX:X');
});

it('should return N:N for 00:00', function () {
  assert(romanTime('00:00'), 'N:N');
});

it('should return XXIII:LIX for 23:59', function () {
  assert(romanTime('23:59'), 'XXIII:LIX');
});

it('should throw TypeError for 24:00', function () {
  assert(romanTime('24:00'), TypeError);
});

function it(name, testFn) {
  console.log('\x1b[36m%s\x1b[0m', name);
  testFn();
}

function assert(val, expected) {
  if (val === expected) {
    console.log('\x1b[32m%s\x1b[0m', '   passed');
  } else {
    console.log('\x1b[31m%s\x1b[0m', `   expected ${expected} but got ${val}`);
  }
}