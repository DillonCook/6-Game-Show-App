// Selectors and variables
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const overlay = document.querySelector('#overlay');
const startButton = document.querySelector('.btn__reset');
const ul = document.getElementsByTagName('ul');
let randomCharacters;
let missed = 0;


// Remove overlay on "start game" click
startButton.addEventListener('click', function(){
    overlay.style.display = 'none';
    
});

// Array of phrases 
const phraseList = [
    "DONT DRINK AND DRIVE",
    "DONT TOUCH WET PAINT",
    "WHATS YOUR POINT",
    "SO WHAT HAD HAPPENED WAS",
    "CLICK IT OR TICKET"
];

// Function to select random item from Array
function getRandomPhraseAsArray(a) {
    let randomItem = a[Math.floor(Math.random()*a.length)];
    let randomCharacters = randomItem.split("");
    return randomCharacters;
    
    
    function addPhraseToDisplay(randomCharacters) {
        for(let i = 0; i < randomCharacters[i].length; i++){
            randomCharacters[i] = document.createElement('li');
            ul.appendChild(randomCharacters[i]);
    
            if(randomCharacters[i] !== ' '){
                randomCharacters[i].className = "letter";
            } 
        }
    }
}




getRandomPhraseAsArray(phraseList);




