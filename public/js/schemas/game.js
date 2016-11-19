/**
 * This defines a games rules and states.
 *
 * @class GameClass
 * @param id {String} The game id.
 * @param title {String} The title of the game.
 * @param createdAt {String} The timestamp of when the game was created.
 * @param createdBy {String} The id of the user that created the game.
 * @param Deck {DeckClass} The deck of cards used to play the game.
 * @param players {Array<PlayerClass>} The players that are participating in this game.
 * @param minPlayers {Number} The minimum number of players to be able to play the game.
 * @param maxPlayers {Number} The maximum number of players to be able to play the game.
 */
function GameClass(options) {
    var self = this;

    // define the appropriate initialization defaults for a GameClass instance
    self.options = _.defaults(options, {
        id: null,
        title: null,
        createdAt: null,
        createdBy: null,

        // define the deck
        Deck: null,

        // create the constraints on players
        players: [],
        minPlayers: 2,
        maxPlayers: 4
    });
}
/**
 * This will initialize the game.
 *
 * @method init
 */
GameClass.prototype.init = function() {
    console.log("Game:init");
};
/**
 * This will destroy the game.
 *
 * @method destroy
 */
GameClass.prototype.destroy = function() {
    console.log("Game:destroy");
};
/**
 * This will start the game.
 *
 * @method start
 */
GameClass.prototype.start = function() {
    console.log("Game:start");
};
/**
 * This will determine if the game is over.
 *
 * @method isGameOver
 */
GameClass.prototype.isGameOver = function() {
    console.log("Game:isGameOver");
};
/**
 * This will end the game.
 *
 * @method end
 */
GameClass.prototype.end = function() {
    console.log("Game:end");
};
