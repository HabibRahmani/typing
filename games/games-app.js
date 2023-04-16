const boxesContainer = document.querySelector('.boxes');


const words = ["book", "help", "home", "school", "typing", "note book", "pen", "box", "ant", "desk"]

let value;
let currentLetter = 0;
let currentWord = 0;
let boxes;
let topAb = 0;
let leftAb;
let positionTimer;


function callLetters() {
    boxesContainer.innerHTML = "";
    addLetters(words[currentWord]);
}
callLetters()

document.addEventListener('keypress', (e) => {
    value = e.key;
    if (currentLetter < boxes.length) {
        written();
    }
})

function written() {

    if (boxes[currentLetter].textContent === value) {
        boxes[currentLetter].style.backgroundColor = "#45A29E";

        if (currentLetter + 1 === words[currentWord].length) {
            currentWord++;
            if (currentWord === words.length) {
                finish()
                return;
            }

            currentLetter = 0;
            callLetters();

            randomNumber()
            topAb = 0;
            clearInterval(positionTimer);
            positionTimer = setInterval(wordPosition, 30);

            return;
        }
        currentLetter++;
    }
}

function addLetters(words) {
    for (let i = 0; i < words.length; i++) {
        const box = document.createElement('div');
        box.classList.add("box");

        const letter = document.createElement("h1");
        letter.textContent = words[i];

        boxesContainer.appendChild(box);
        box.appendChild(letter);
    }
    boxes = document.querySelectorAll('.box');

}

randomNumber();
positionTimer = setInterval(wordPosition, 30);

function wordPosition() {
    boxesContainer.style.left = leftAb + "px";
    boxesContainer.style.top = topAb + "px";
    topAb += 5;
    if (topAb > 600) {
        topAb = 0;
    }
}

function randomNumber() {
    let random = Math.floor(Math.random() * 765);
    leftAb = random;
}

function finish() {
    boxesContainer.innerHTML = "";
    boxesContainer.textContent = "THE END"
    topAb = 0;
    leftAb = 600;
    boxesContainer.style.color = "#c5c6c7";
    boxesContainer.style.fontSize = 30 + "px";
}