if (_.isUndefined(window.Controllers)) {
    window.Controllers = {};
}
/**
 * This defines the login controller.
 *
 * @class Login
 */
Controllers.Login = function(options) {
    // define the appropriate defaults
    this.options = _.defaults(options || {}, {
        $el: null
    });
    /**
     * This initializes the controller.
     *
     * @method init
     */
    this.init = function() {
        var self = this;

        // point to the correct binding element
        self.options.$el = $("#Login");

        // render the controller
        self.render();
    };
    /**
     * This renders the controller.
     *
     * @method render
     */
    this.render = function() {
        var self = this;

        // render the corresponding template
        self.options.$el.render("js/Controllers/Login/views/view.ejs", {
            // ...
        });
        // call the post-render method
        self.postRender();
    };
    /**
     * This occurs after the controller is rendered.
     *
     * @method postRender
     */
    this.postRender = function() {
        var self = this;
        var s = Snap("#logo");

        // Now lets create another small circle:
        var smallCircle = s.circle(100, 150, 70);
        // Lets put this small circle and another one into a group:
        var discs = s.group(smallCircle, s.circle(200, 150, 70));

        Snap.load("images/cards.svg", function(fragment) {
            fragment.selectAll("g").attr({
                stroke: "#fafafa",
                fill: "#fafafa"
            })
            discs.attr({
                mask: fragment,
                    stroke: "#fafafa",
                    fill: "#fafafa"
            });
            discs.selectAll("circle").forEach(function(circle) {
                console.log(circle);
                circle.animate({r: 100}, 1000, mina.elastic);
            });
            s.append(fragment);
        });

    };
    /**
     * This destroys the controller.
     *
     * @method destroy
     */
    this.destroy = function() {
        // ...
    };
    // initializes the contoller.
    this.init();
}
