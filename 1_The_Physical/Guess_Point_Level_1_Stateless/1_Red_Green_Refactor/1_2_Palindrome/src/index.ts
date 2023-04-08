function withoutSpaces(str: string): string {
  return str.replace(/\s/g, "");
}

function reversed(str: string): string {
  return str.split("").reverse().join("");
}

export class PalindromeChecker {
  static isPalindrome(word: string): boolean {
    return (
      reversed(withoutSpaces(word.toLowerCase())) ===
      withoutSpaces(word.toLowerCase())
    );
  }
}
