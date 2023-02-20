import { assert } from 'chai';
import fibonacci from '../fibonacci.js';

describe('Testing Fibonacci', () => {
  it('should return fibonacci 0 is 0', () => {
    const result = fibonacci(0);
    assert.equal(result, 0);
  });
});
