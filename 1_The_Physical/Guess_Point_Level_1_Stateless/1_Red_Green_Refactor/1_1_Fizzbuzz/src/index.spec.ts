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
});
