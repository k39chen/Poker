/**
 * This defines a deck and the cards that compose it.
 *
 * @class DeckClass
 * @param cards {Array<CardClass>} The list of cards that compose this deck.
 * @param cardBackPath {String} The image path to the card back.
 */
function DeckClass(options) {
    var self = this;

    // define the appropriate initialization defaults for a Deck instance
    self.options = _.defaults(options, {
        cards: [],
        cardBackPath: null
    });
}
/**
 * This will initialize the deck.
 *
 * @method init
 */
DeckClass.prototype.init = function() {
    console.log("Deck:init");
};
/**
 * This method will deal a card to a designated player with the provided instructions.
 *
 * @method deal
 * @param target {Object} A set of target specifications.
 * @param instruction {Object} A set of deal instructions.
 */
DeckClass.prototype.deal = function(target, instruction) {
    // provide a default set of target specifications
    target = _.defaults(target, {
        // TODO: kchen - figure out how to genericize this
        playerId: null,
        discard: null,
        community: null
    });
    // provide a default set of instructions
    instruction = _.defaults(instruction, {
        // can be one of:
        // 1) top (from the top of the deck)
        // 2) bottom (from the bottom of the deck)
        // 3) middle (anywhere in the middle)
        // 4) top+X (where X is the number of cards from the top)
        // 5) bottom+X (where X is the number of cards from the bottom)
        from: "top",

        // this indicates the number of times to draw from the deck
        // using the prescribed instruction
        times: 1
    });
    console.log("Deck:deal");
};
/**
 * This method will shuffle the cards that are still in the deck.
 *
 * @method shuffle
 */
DeckClass.prototype.shuffle = function() {
    console.log("Deck:shuffle");
};
/**
 * This method will determine if the deck is empty.
 *
 * @method isEmpty
 * @return {Boolean} The result of the evaluation.
 */
DeckClass.prototype.isEmpty = function() {
    console.log("Deck:isEmpty");
    return false;
},
/**
 * This will destroy the deck.
 *
 * @method destroy
 */
DeckClass.prototype.destroy = function() {
    console.log("Deck:destroy");
};
