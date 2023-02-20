import { assert } from 'chai';
import fibonacci from '../fibonacci.js';

describe('Testing Fibonacci', () => {
  it('should return fibonacci 0 is 0', () => {
    const result = fibonacci(0);
    assert.equal(result, 0);
  });
  it('should return fibonacci 1 is 1', () => {
    const result = fibonacci(1);
    assert.equal(result, 1);
  });
  it('should return fibonacci 2 is 1', () => {
    const result = fibonacci(2);
    assert.equal(result, 1);
  });
});
