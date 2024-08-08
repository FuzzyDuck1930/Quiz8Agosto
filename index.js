let Words = ["Flower", "Avenue", "Career"];

const playedWord = document.getElementById("play")

function getMyNumber() {
    return Math.floor(Math.random() * 3);
  }

function showNumber() {
/*Words.forEach(element => {
    var myIndx = Words.indexOf(element);
    if (getMyNumber() === myIndx) {
        console.log(element)
    }
})*/
const pos = getMyNumber()
console.log(Words[pos])
return Words[pos]
}

function showWord() {
    playedWord.textContent = showNumber();
}