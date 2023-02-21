export default function fibonacci(num) {
  if (Number.isNaN(num) || !Number.isInteger(num) || num < 0) {
    throw new Error('n must be a positive non-zero integer');
  }
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
