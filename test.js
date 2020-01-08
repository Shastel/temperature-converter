const assert = require('assert');

const {
  cToF,
  fToC,
} = require('./src');

describe('.cToF, should conver Celcius to Fahrenheit', () => {
  it('Should convert 84° of Celcius to 183.20° of Fahrenheit', () => {
    const f = cToF(84);

    assert.equal(f, 183.20);
  });
  it('Should convert -55° of Celcius to -67.00° of Fahrenheit', () => {
    const f = cToF(-55);

    assert.equal(f, -67.00);
  });
  it('Should convert 64° of Celcius to 147.20° of Fahrenheit', () => {
    const f = cToF(64);

    assert.equal(f, 147.20);
  });
  it('Should convert -9° of Celcius to 15.80° of Fahrenheit', () => {
    const f = cToF(-9);

    assert.equal(f, 15.80);
  });
  it('Should convert -1° of Celcius to 30.20° of Fahrenheit', () => {
    const f = cToF(-1);

    assert.equal(f, 30.20);
  });
  it('Should convert 21° of Celcius to 69.80° of Fahrenheit', () => {
    const f = cToF(21);

    assert.equal(f, 69.80);
  });
  it('Should convert 92° of Celcius to 197.60° of Fahrenheit', () => {
    const f = cToF(92);

    assert.equal(f, 197.60);
  });
  it('Should convert -69° of Celcius to -92.20° of Fahrenheit', () => {
    const f = cToF(-69);

    assert.equal(f, -92.20);
  });
  it('Should convert -16° of Celcius to 3.20° of Fahrenheit', () => {
    const f = cToF(-16);

    assert.equal(f, 3.20);
  });
  it('Should convert 94° of Celcius to 201.20° of Fahrenheit', () => {
    const f = cToF(94);

    assert.equal(f, 201.20);
  });
  it('Should convert 39° of Celcius to 102.20° of Fahrenheit', () => {
    const f = cToF(39);

    assert.equal(f, 102.20);
  });
  it('Should convert 53° of Celcius to 127.40° of Fahrenheit', () => {
    const f = cToF(53);

    assert.equal(f, 127.40);
  });
  it('Should convert 77° of Celcius to 170.60° of Fahrenheit', () => {
    const f = cToF(77);

    assert.equal(f, 170.60);
  });
  it('Should convert -12° of Celcius to 10.40° of Fahrenheit', () => {
    const f = cToF(-12);

    assert.equal(f, 10.40);
  });
  it('Should convert -95° of Celcius to -139.00° of Fahrenheit', () => {
    const f = cToF(-95);

    assert.equal(f, -139.00);
  });
  it('Should convert -71° of Celcius to -95.80° of Fahrenheit', () => {
    const f = cToF(-71);

    assert.equal(f, -95.80);
  });
  it('Should convert 11° of Celcius to 51.80° of Fahrenheit', () => {
    const f = cToF(11);

    assert.equal(f, 51.80);
  });
  it('Should convert 41° of Celcius to 105.80° of Fahrenheit', () => {
    const f = cToF(41);

    assert.equal(f, 105.80);
  });
  it('Should convert -79° of Celcius to -110.20° of Fahrenheit', () => {
    const f = cToF(-79);

    assert.equal(f, -110.20);
  });
  it('Should convert 80° of Celcius to 176.00° of Fahrenheit', () => {
    const f = cToF(80);

    assert.equal(f, 176.00);
  });
});
describe('.fToC, should conver Fahrenheit to Celcius', () => {
  it('Should convert 11° of Fahrenheit to -11.67° of Celcius', () => {
    const c = fToC(11);

    assert.equal(c, -11.67);
  });
  it('Should convert 65° of Fahrenheit to 18.33° of Celcius', () => {
    const c = fToC(65);

    assert.equal(c, 18.33);
  });
  it('Should convert 20° of Fahrenheit to -6.67° of Celcius', () => {
    const c = fToC(20);

    assert.equal(c, -6.67);
  });
  it('Should convert -76° of Fahrenheit to -60.00° of Celcius', () => {
    const c = fToC(-76);

    assert.equal(c, -60.00);
  });
  it('Should convert 82° of Fahrenheit to 27.78° of Celcius', () => {
    const c = fToC(82);

    assert.equal(c, 27.78);
  });
  it('Should convert -31° of Fahrenheit to -35.00° of Celcius', () => {
    const c = fToC(-31);

    assert.equal(c, -35.00);
  });
  it('Should convert 39° of Fahrenheit to 3.89° of Celcius', () => {
    const c = fToC(39);

    assert.equal(c, 3.89);
  });
  it('Should convert 84° of Fahrenheit to 28.89° of Celcius', () => {
    const c = fToC(84);

    assert.equal(c, 28.89);
  });
  it('Should convert 10° of Fahrenheit to -12.22° of Celcius', () => {
    const c = fToC(10);

    assert.equal(c, -12.22);
  });
  it('Should convert 67° of Fahrenheit to 19.44° of Celcius', () => {
    const c = fToC(67);

    assert.equal(c, 19.44);
  });
  it('Should convert 42° of Fahrenheit to 5.56° of Celcius', () => {
    const c = fToC(42);

    assert.equal(c, 5.56);
  });
  it('Should convert 77° of Fahrenheit to 25.00° of Celcius', () => {
    const c = fToC(77);

    assert.equal(c, 25.00);
  });
  it('Should convert 73° of Fahrenheit to 22.78° of Celcius', () => {
    const c = fToC(73);

    assert.equal(c, 22.78);
  });
  it('Should convert 43° of Fahrenheit to 6.11° of Celcius', () => {
    const c = fToC(43);

    assert.equal(c, 6.11);
  });
  it('Should convert 55° of Fahrenheit to 12.78° of Celcius', () => {
    const c = fToC(55);

    assert.equal(c, 12.78);
  });
  it('Should convert -28° of Fahrenheit to -33.33° of Celcius', () => {
    const c = fToC(-28);

    assert.equal(c, -33.33);
  });
  it('Should convert 74° of Fahrenheit to 23.33° of Celcius', () => {
    const c = fToC(74);

    assert.equal(c, 23.33);
  });
  it('Should convert 53° of Fahrenheit to 11.67° of Celcius', () => {
    const c = fToC(53);

    assert.equal(c, 11.67);
  });
  it('Should convert 47° of Fahrenheit to 8.33° of Celcius', () => {
    const c = fToC(47);

    assert.equal(c, 8.33);
  });
  it('Should convert 64° of Fahrenheit to 17.78° of Celcius', () => {
    const c = fToC(64);

    assert.equal(c, 17.78);
  });
});
