export function fibonacciRecursive(num) {
  if (Number.isNaN(num) || !Number.isInteger(num) || num < 0) {
    throw new Error('n must be a positive non-zero integer');
  }
  if (num < 2) {
    return num;
  }
  return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
}

const memo = [0, 1];
export function fibonacciMemo(num) {
  if (Number.isNaN(num) || !Number.isInteger(num) || num < 0) {
    throw new Error('n must be a positive non-zero integer');
  }
  if (Number.isInteger(memo[num])) {
    return memo[num];
  }
  memo[num] = fibonacciMemo(num - 1) + fibonacciMemo(num - 2);
  return memo[num];
}
