const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

// Arrays that will be storing and comparing the choices
let cardsChosen = [];
let cardsChosenIds = [];

// Score variable
const score = document.querySelector('#score');
let scoreNumber = 0;
score.innerHTML = scoreNumber;

// Sort everything in the array randomly
cardArray.sort(() => 0.5 - Math.random());

// Gets the grid div
const grid = document.querySelector('#grid');

// Creates the board
let i = 0
const createBoard = () => {
    cardArray.forEach(card => {
        let img = document.createElement('img');
        img.setAttribute('src', 'images/blank.png');
        img.setAttribute('data-id', i);
        i++;
        grid.appendChild(img);
        img.addEventListener('click', flipCard);
    })     
}

createBoard();

// Flip card when clicked
function flipCard () {
    // Finding the card id
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

// Check if has a match than transform the card
function checkMatch() {
    allImgs = document.querySelectorAll('#grid img');
    if (cardsChosen[0] == cardsChosen[1]) {
        // Turn the card
        allImgs[cardsChosenIds[0]].setAttribute('src', 'images/white.png');
        allImgs[cardsChosenIds[1]].setAttribute('src', 'images/white.png');

        // Remove it from the game
        allImgs[cardsChosenIds[0]].removeEventListener('click', flipCard);
        allImgs[cardsChosenIds[1]].removeEventListener('click', flipCard);

        // Raise the score
        scoreNumber += 10;
        score.innerHTML = scoreNumber;
    } else {
        allImgs[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
        allImgs[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');
    }

    cardsChosen = [];
    cardsChosenIds = [];
}