import { PalindromeChecker } from "./index";

describe("palindrome checker", () => {
  it("should return true for 'mom'", () => {
    expect(PalindromeChecker.isPalindrome("mom")).toBe(true);
  });

  it("should return false for 'xyz'", () => {
    expect(PalindromeChecker.isPalindrome("xyz")).toBe(false);
  });

  it("should return true for 'Mom'", () => {
    expect(PalindromeChecker.isPalindrome("Mom")).toBe(true);
  });

  it("should return true for 'Was It A Rat I Saw'", () => {
    expect(PalindromeChecker.isPalindrome("Was It A Rat I Saw")).toBe(true);
  });

  it("should return true form 'Never Odd or Even'", () => {
    expect(PalindromeChecker.isPalindrome("Never Odd or Even")).toBe(true);
  });
});
