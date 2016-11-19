/**
 * This defines the user profile.
 *
 * @class UserClass
 * @param id {String} The unique player identifier.
 * @param displayName {String} The display name of the player.
 */
function UserClass(options) {
    var self = this;

    // define the appropriate initialization defaults for a UserClass instance
    self.options = _.defaults(options, {
        id: null,
        displayName: null,

        // this is a privately managed variable to indicate the game that
        // this user is actively participating in. The user can only be
        // participating in one active game at a time.
        _Game: null
    });
}
/**
 * This will initialize the user.
 *
 * @method init
 */
UserClass.prototype.init = function() {
    console.log("User:init");
};
/**
 * This will have the user create game that other users can join.
 *
 * @method createGame
 */
UserClass.prototype.createGame = function() {
    console.log("User:createGame");
};
/**
 * This will set up this user as a player of the specified game.
 *
 * @method joinGame
 * @param Game {GameClass} The game that the player wants to join as.
 */
UserClass.prototype.joinGame = function(Game) {
    console.log("User:joinGame", Game);
};
/**
 * This will have the user leave its currently active game.
 *
 * @method leaveGame
 */
UserClass.prototype.leaveGame = function() {
    console.log("User:leaveGame");
};
/**
 * This will destroy the user.
 *
 * @method destroy
 */
UserClass.prototype.destroy = function() {
    console.log("User:destroy");
};
