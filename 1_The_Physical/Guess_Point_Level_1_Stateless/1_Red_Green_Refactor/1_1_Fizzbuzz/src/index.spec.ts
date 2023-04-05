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
});
