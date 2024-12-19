let word = "bhurhb";

function checkPallindrome(words) {
  if (words.trim().length === 0) return "word is empty";
  let start = 0;
  let end = words.length - 1;
  for (let i = 0; i < words.length; i++) {
    if (words[start] === words[end]) {
      start++;
      end--;
      if (start > end) {
        return true;
      }
    }
  }
  return false;
}
const ans = checkPallindrome(word);
console.log(ans);
