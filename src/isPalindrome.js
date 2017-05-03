export default function isPalindrome(string) {
  let newString = string.toLowerCase().replace(/[^a-z]+/ig, '');
  let reverseString = newString.split('').reverse().join('')
    return reverseString === newString
}

isPalindrome('wow')
