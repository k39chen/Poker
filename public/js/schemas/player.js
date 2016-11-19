/**
 * This defines a player and owns its private game state.
 *
 * @class PlayerClass
 * @param id {String} The unique player id.
 * @param User {UserClass} The user associated with this player.
 * @param Game {GameClass} The game instance that this player is participating in.
 * @param hand {Array<Card>} the list of cards that are in this player's hand.
 */
function PlayerClass(options) {
    var self = this;

    // define the appropriate initialization defaults for a Player instance
    self.options = _.defaults(options, {
        id: null,
        User: null,
        Game: null,
        hand: []
    });
}
/**
 * This will initialize the player.
 *
 * @method init
 */
PlayerClass.prototype.init = function() {
    console.log("Player:init");
};
/**
 * This method will have the user draw a card from the game deck.
 *
 * @method drawCard
 * @param instruction {Object} A set of draw instructions.
 */
PlayerClass.prototype.drawCard = function(instruction) {
    console.log("Player:drawCard");
};
/**
 * This will destroy the player.
 *
 * @method destroy
 */
PlayerClass.prototype.destroy = function() {
    console.log("Player:destroy");
};
