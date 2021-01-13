class HandsGenerator {
  constructor() {
    this.cards = this.defineCards();
  }

  defineCards() {
    let cards = ['A', 'K', 'Q', 'J', 'T'];

    for (let i = 9; i > 1; i--) {
      cards.push(String(i));
    }

    return cards;
  }

  generateHandsList() {
    const cards = this.cards;

    let handsList = [];

    for (let i = 0; i < cards.length; i++) {
      let handsWithCard = this.generateHandsWith(cards[i]);
      handsList = handsList.concat(handsWithCard);
    }

    return handsList;
  }

  generateHandsWith(mainCard) {
    const cards = this.cards;

    let handsWithMainCard = [];

    for (let j = 0; j < cards.length; j++) {
      let hand = this.createSimpleHand(mainCard, cards[j]);
      let suitedHands = this.createSuitedHandsFromOne(hand);

      if (cards.indexOf(mainCard) < cards.indexOf(cards[j])) {
        hand = suitedHands.suited;
      }

      if (cards.indexOf(mainCard) > cards.indexOf(cards[j])) {
        hand = suitedHands.offSuited;
      }

      handsWithMainCard.push(hand);
    }

    return handsWithMainCard;
  }

  createSimpleHand(firstCard, secondCard) {
    const cards = this.cards;

    const lowerCard =
      cards[Math.max(cards.indexOf(firstCard), cards.indexOf(secondCard))];

    const higherCard =
      cards[Math.min(cards.indexOf(firstCard), cards.indexOf(secondCard))];

    return higherCard + lowerCard;
  }

  createSuitedHandsFromOne(hand) {
    const suitedHands = {
      suited: hand + 's',
      offSuited: hand + 'o'
    };

    return suitedHands;
  }
}

