// Selectors and variables
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');
const letter = document.querySelector('.letter');
const ul = document.querySelector('ul');
let startOver = document.createElement('BUTTON');
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

        if (letterFound === null) {
            let liveHeart = document.querySelector("img[src='images/liveHeart.png']");
            let lostHeart = document.createElement('IMG');
            lostHeart.setAttribute('src','images/lostHeart.png');
            lostHeart.setAttribute('height','35px');
            lostHeart.setAttribute('width','35px');
            liveHeart.replaceWith(lostHeart);
            missed ++;
        }
        checkWin();
    } 
    console.log(e.target.textContent);
});


// Function to check if player has won or lost

function checkWin() {
    const letters = document.querySelectorAll('.letter').length;
    const show = document.querySelectorAll('.show').length;
    // const overlayA = document.querySelector('#overlay a')
    if (missed === 5) {
        setTimeout(youLose, 1500);
    }else if (show == letters) {
        setTimeout(youWin, 1500);
    }
}

// You lose function
function youLose() {
    overlay.style.display = "";
    overlay.className = "lose";
    restart();
}

// You win function
function youWin() {
    overlay.style.display = "";
    overlay.className = 'win';
    restart();
}

// start over function
function restart() {
    overlay.removeChild(startButton);
    overlay.appendChild(startOver);

    startOver.innerHTML = "Go At It Again!";
    startOver.classList.add('start-over');
}

startOver.addEventListener('click', function(){
    location.reload(true);
});


// function afterStartOver() {
//     overlay.style.display = 'none';
// }







