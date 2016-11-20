$(document).ready(function() {
    // define the user data.
    var userId = "k39chen";
    var userData = {
        id: "k39chen",
        email: "k39chen@gmail.com",
        firstName: "Kevin",
        lastName: "Chen"
    };
    // add the user k39chen to the database
    db.ref("users/" + userId).set(userData);

    db.ref("users").on("value", function(snap) {
        var usersData = snap.val();
        console.log(usersData);
    });

    db.ref("users/" + userId).on("value", function(snap) {
        var userData = snap.val();
        console.log(userData);
        renderUser(userData);
    });

    function renderUser(userData) {
        var $users = $("#users");
        var $user = $("<div class='user' />").appendTo($users);

        _.each(userData, function(value, property) {
            var $row = $("<div class='row' />")
                .append("<span class='property'>" + property + "</span>: ")
                .append("<span class='value'>" + value + "</span>")
                .appendTo($user)
        });
    }


    // start off with the login screen
    var Login = new Controllers.Login();


    
});
