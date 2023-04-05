export function fizzbuzz(n: number) {
  if (n < 1) {
    throw new Error("n must be greater than 0");
  }

  if (n > 100) {
    throw new Error("n must be less than 101");
  }

  const fizz = n % 3 === 0;
  const buzz = n % 5 === 0;
  const fizzbuzz = fizz && buzz;

  if (fizzbuzz) {
    return "FizzBuzz";
  }

  if (fizz) {
    return "Fizz";
  }

  if (buzz) {
    return "Buzz";
  }

  return n.toString();
}
