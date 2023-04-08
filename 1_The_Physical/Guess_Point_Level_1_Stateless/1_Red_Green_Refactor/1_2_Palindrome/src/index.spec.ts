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
});
