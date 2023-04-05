import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it("should return a string", () => {
    expect(typeof fizzbuzz(1)).toBe("string");
  });

  it("should throw if n is less than 1", () => {
    expect(() => fizzbuzz(0)).toThrow(new Error("n must be greater than 0"));
  });

  it("should throw if n is greater than 100", () => {
    expect(() => fizzbuzz(101)).toThrow(new Error("n must be less than 101"));
  });

  it("should return 'Fizz' if n = 3 (n is divisible by 3)", () => {
    expect(fizzbuzz(3)).toBe("Fizz");
  });

  it("should return 'Fizz' if n = 6 (n is divisible by 3)", () => {
    expect(fizzbuzz(6)).toBe("Fizz");
  });

  it("should return 'Buzz' if n = 5 (n is divisible by 5)", () => {
    expect(fizzbuzz(5)).toBe("Buzz");
  });

  it("should return 'Buzz' if n = 10 (n is divisible by 5)", () => {
    expect(fizzbuzz(10)).toBe("Buzz");
  });

  it("should return FizzBuzz if n = 15 (n is divisible by 3 and 5)", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz");
  });

  it("should return FizzBuzz if n = 30 (n is divisible by 3 and 5)", () => {
    expect(fizzbuzz(30)).toBe("FizzBuzz");
  });

  it("should return '1' if n = 1 (n is neither divisible by 3 nor 5)", () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  it("should return '2' if n = 2 (n is neither divisible by 3 nor 5)", () => {
    expect(fizzbuzz(2)).toBe("2");
  });

  it("should return '4' if n = 4 (n is neither divisible by 3 nor 5)", () => {
    expect(fizzbuzz(4)).toBe("4");
  });
});
