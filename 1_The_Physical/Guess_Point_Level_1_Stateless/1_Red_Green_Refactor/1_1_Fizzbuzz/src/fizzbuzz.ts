export function fizzbuzz(n: number) {
  if (n < 1) {
    throw new Error("n must be greater than 0");
  }

  if (n > 100) {
    throw new Error("n must be less than 101");
  }

  if (n % 3 === 0) {
    return "Fizz";
  }

  return "";
}
