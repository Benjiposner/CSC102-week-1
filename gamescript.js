// Importing the Deck class from deck.js to manage deck operations.
import Deck from "./deck.js"

// Mapping card values to their corresponding numeric values for comparison.
const CARD_VALUE_MAP = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

// Selecting elements from the DOM for display and interaction.
const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")

// Variables to hold player and computer decks, as well as game states.
let playerDeck, computerDeck, inRound, stop

// Main event listener for handling clicks on the page.
document.addEventListener("click", () => {
  if (stop) { // If game over, restart game
    startGame()
    return
  }

  if (inRound) { // If in a round, prepare for the next round
    cleanBeforeRound()
  } else { // Otherwise, flip the cards to start a new round
    flipCards()
  }
})

// Initializes and starts the game.
startGame()
function startGame() {
  const deck = new Deck() // Create a new deck instance
  deck.shuffle() // Shuffle the deck to randomize order

  // Divide the deck into two halves for player and computer.
  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
  inRound = false // Indicates no round is in progress
  stop = false // Reset stop status for game continuity

  cleanBeforeRound() // Prepare the board for the first round
}

// Clears the board before starting a new round.
function cleanBeforeRound() {
  inRound = false // Set round status to false
  computerCardSlot.innerHTML = "" // Clear computer's card slot
  playerCardSlot.innerHTML = "" // Clear player's card slot
  text.innerText = "" // Clear any result text

  updateDeckCount() // Update the displayed deck count for both players
}

// Flips cards for both player and computer to begin a round.
function flipCards() {
  inRound = true // Mark that a round is in progress

  const playerCard = playerDeck.pop() // Get top card from player's deck
  const computerCard = computerDeck.pop() // Get top card from computer's deck

  // Display both cards in their respective slots.
  playerCardSlot.appendChild(playerCard.getHTML())
  computerCardSlot.appendChild(computerCard.getHTML())

  updateDeckCount() // Update deck counts after cards have been drawn

  // Determine the winner of the round based on card values.
  if (isRoundWinner(playerCard, computerCard)) {
    text.innerText = "Win" // Display result
    playerDeck.push(playerCard) // Return cards to winner's deck
    playerDeck.push(computerCard)
  } else if (isRoundWinner(computerCard, playerCard)) {
    text.innerText = "Lose" // Display result
    computerDeck.push(playerCard) // Return cards to winner's deck
    computerDeck.push(computerCard)
  } else {
    text.innerText = "Draw" // Display draw result
    playerDeck.push(playerCard) // Return cards to respective decks
    computerDeck.push(computerCard)
  }

  // Check for game-over condition if a deck is empty.
  if (isGameOver(playerDeck)) {
    text.innerText = "You Lose!!"
    stop = true // Stop the game if player loses
  } else if (isGameOver(computerDeck)) {
    text.innerText = "You Win!!"
    stop = true // Stop the game if computer loses
  }
}

// Updates the displayed deck count for both player and computer.
function updateDeckCount() {
  computerDeckElement.innerText = computerDeck.numberOfCards // Computer deck count
  playerDeckElement.innerText = playerDeck.numberOfCards // Player deck count
}

// Determines if the first card is of higher value than the second.
function isRoundWinner(cardOne, cardTwo) {
  return CARD_VALUE_MAP[cardOne.value] > CARD_VALUE_MAP[cardTwo.value]
}

// Checks if a given deck is empty, indicating the game is over.
function isGameOver(deck) {
  return deck.numberOfCards === 0
}
