import { PalindromeChecker } from "./index";

describe("palindrome checker", () => {
  it("should return true for 'mom'", () => {
    expect(PalindromeChecker.isPalindrome("mom")).toBe(true);
  });
});
