export class PalindromeChecker {
  static isPalindrome(word: string): boolean {
    const reversed = word.split(" ").join("").split("").reverse().join("");
    const w = word.split(" ").join("");
    return w.toLocaleLowerCase() === reversed.toLocaleLowerCase();
  }
}
