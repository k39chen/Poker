/**
 * This defines a card's properties.
 *
 * @class CardClass
 * @param value {String} The value component of the card.
 * @param suite {String} The suite component of the card.
 * @param image {String} The image path.
 * @param description {String} An optional description to provide the card.
 * @param ability {Function} An optional ability of the card.
 */
function CardClass(options) {
    var self = this;

    // define the appropriate initialization defaults for a Card instance
    self.options = _.defaults(options, {
        value: null,
        suite: null,
        imagePath: null,
        description: null,
        ability: noop
    });
}
/**
 * This will initialize the card.
 *
 * @method init
 */
CardClass.prototype.init = function() {
    console.log("Card:init");
};
/**
 * This will destroy the card.
 *
 * @method destroy
 */
CardClass.prototype.destroy = function() {
    console.log("Card:destroy");
};
