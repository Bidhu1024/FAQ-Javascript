let sentences = "my name is bidhubhushan gahan and i am woking as a frontend developer bidhubhushangahan";

function findLongest(sentence){
if(sentence.length === 0) return "No words available";
let max = 0
let longestWord = ""
let response = sentence.split(" ");
for(let word of response){
    let wordLength = word.length;
    if(wordLength>max){
        max = wordLength;
        longestWord = word
    }
}
return {max,longestWord}
}

const ans = findLongest(sentences)
console.log(ans)