const textInput = document.getElementById('text_input');
const checkButton = document.getElementById('check');
const vowel = ["a", "e", "i", "o", "u", "y"]

function countVowel(){
const analyzeText = textInput.value;
let count = 0;

for (let letter of analyzeText) {
    if (vowel.includes(letter)) {
        count++;
    }
}

alert('il y a ' + count + ' voyelles')

}

checkButton.addEventListener('click', countVowel)