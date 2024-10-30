// Constants representing the suits and values of a standard deck of cards.
const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
]

// Deck class to manage a deck of cards and related operations.
export default class Deck {
  // Initializes the deck, defaulting to a new, shuffled deck of 52 cards if none is provided.
  constructor(cards = freshDeck()) {
    this.cards = cards
  }

  // Getter to return the current number of cards in the deck.
  get numberOfCards() {
    return this.cards.length
  }

  // Removes and returns the top card from the deck.
  pop() {
    return this.cards.shift()
  }

  // Adds a card to the bottom of the deck.
  push(card) {
    this.cards.push(card)
  }

  // Shuffles the deck using the Fisher-Yates algorithm.
  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1)) // Generate a random index
      const oldValue = this.cards[newIndex] // Temporary storage for the value at the new index
      this.cards[newIndex] = this.cards[i] // Swap cards
      this.cards[i] = oldValue // Complete the swap
    }
  }
}

// Card class to represent an individual card with suit, value, and color.
class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }

  // Getter to determine the color of the card based on its suit.
  get color() {
    return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
  }

  // Creates and returns an HTML element representing the card for display in the DOM.
  getHTML() {
    const cardDiv = document.createElement("div") // Create card element
    cardDiv.innerText = this.suit // Set the suit as the text content
    cardDiv.classList.add("card", this.color) // Add classes for card and color styling
    cardDiv.dataset.value = `${this.value} ${this.suit}` // Store card value and suit for reference
    return cardDiv
  }
}

// Generates a new deck of cards with all combinations of suits and values.
function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value) // Create a new card for each suit-value pair
    })
  })
}
