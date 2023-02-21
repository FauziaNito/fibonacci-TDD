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
  it('should return fibonacci 3 is 2', () => {
    const result = fibonacci(3);
    assert.equal(result, 2);
  });
  it('should return fibonacci 4 is 3', () => {
    const result = fibonacci(4);
    assert.equal(result, 3);
  });
  it('should return fibonacci 5 is 5', () => {
    const result = fibonacci(5);
    assert.equal(result, 5);
  });
  it('should throw error for -1', () => {
    assert.throws(() => fibonacci(-1), 'n must be a positive non-zero integer');
  });
  it('should throw error for 7.1', () => {
    assert.throws(
      () => fibonacci(7.1),
      'n must be a positive non-zero integer',
    );
  });
  it('should throw error for "9"', () => {
    assert.throws(
      () => fibonacci('9'),
      'n must be a positive non-zero integer',
    );
  });
  it('should throw error for "life is good"', () => {
    assert.throws(
      () => fibonacci('life is good'),
      'n must be a positive non-zero integer',
    );
  });
});
