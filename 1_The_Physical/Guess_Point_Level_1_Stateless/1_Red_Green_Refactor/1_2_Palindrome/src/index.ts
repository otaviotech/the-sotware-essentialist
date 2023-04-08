export class PalindromeChecker {
  static isPalindrome(word: string): boolean {
    const reversed = word.split("").reverse().join("");
    return word.toLocaleLowerCase() === reversed.toLocaleLowerCase();
  }
}
