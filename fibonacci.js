export default function fibonacci(num) {
  if (num < 0) {
    throw new Error('Argument should not be negative Number');
  }
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
