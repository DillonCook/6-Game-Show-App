// Selectors and variables
const qwerty = document.querySelector('#qwerty');
const button = document.querySelectorAll('.keyrow > button')
const phrase = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');
const letter = document.querySelector('.letter');
const ul = document.querySelector('ul');
let missed = 0;

// Array of phrases 
const phraseList = [
    "DONT DRINK AND DRIVE",
    "DONT TOUCH WET PAINT",
    "WHATS YOUR POINT",
    "SO WHAT HAD HAPPENED WAS",
    "CLICK IT OR TICKET"
];

// Remove overlay on "start game" click
startButton.addEventListener('click', function(){
    overlay.style.display = 'none';
});

// Function to select random item from Array
function getRandomPhraseAsArray(a) {
    
    let randomItem = a[Math.floor(Math.random()*a.length)];
    let randomCharacters = randomItem.split("");
    return randomCharacters;
}

const chosenCharacters = getRandomPhraseAsArray(phraseList);

// Function to take chosen phrase and display to screen
function addPhraseToDisplay(a) {
    for(let i = 0; i < a.length; i++){
        let lis = document.createElement('li');
        lis.textContent = a[i];
        ul.appendChild(lis);

        if(lis.textContent !== ' '){
            lis.className = "letter";
        } else {
            lis.className = 'space';
        }
    }
}

// Call functions to generate and display hidden phrase
addPhraseToDisplay(chosenCharacters);

// Function to check matching letters

function checkLetter(e) {
    const li = document.querySelectorAll('ul li');
    let match = null;
    for (let i = 0; i < li.length; i++){
        if (e.textContent.toLowerCase() === li[i].textContent.toLowerCase()) {
            li[i].classList.add('show');
            match = li[i];
        } 
    }
    return match;
}

// Event Listener for keyboard
qwerty.addEventListener('click', (e) => {
    let button = e.target;
    let letterFound = checkLetter(button);

    if (button.tagName == 'BUTTON') {
        button.className = "chosen";
        button.disabled = 'true';
    }

    if (letterFound == null) {
        document.querySelector("ol li").remove();
        missed ++;
    }

    
    checkWin();
    console.log(e.target.textContent);
});

// Function to check if player has won or lost

function checkWin() {
    const letters = document.querySelectorAll('.letter').length;
    const show = document.querySelectorAll('.show').length;
    const overlay = document.querySelector('#overlay');
    const overlayA = document.querySelector('#overlay a')
    if (missed === 5) {
        overlay.style.display = "";
        overlay.className = "lose";
        // overlayA.className = 'lose';
    }

    if (show == letters) {
        overlay.style.display = "";
        overlay.className = 'win';
    }
}



