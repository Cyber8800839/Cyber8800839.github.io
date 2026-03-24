function startgame(user) {
    console.log("Hello, "+user+". Would you like to play a game?");
    console.log("1. Yes");
    console.log("2. No");
    console.log("");
    let choice = prompt("Enter your choice:");
    switch (choice) {
        case "1":
            draft(user);                                   // Change the scene.
            return;
        case "2":
            console.log("End.");
            endgame();                                          // Ending 1.
            return;
        default:
            console.log(choice+" is not valid. Please enter 1 or 2.");
            startgame(user);                                    // Try the same scene again.
    }
}
/*
 * Display a consistent end game dialogue.
 */
function endgame() {
    console.log("");
    console.log("Game over. Refresh to play again.");
    console.log("");
    console.log("This was one of 4 unique endings. Try different choices to see the others!");
}
/*
 * Change the scene to the draft.
 *
 * Parameters:
 * - user: a string with the user's name
 * - Chiefs: a boolean tracking whether the player has selected the Chiefs
 * - Seahawks: a boolean tracking whether the player has selected the Seahawks
 * - Dolphins: a boolean tracking whether the player has selected the Dolphins
 * - Patriots: a boolean tracking whether the player has selected the Patriots
 */
function draft(user, Chiefs, Seahawks, Dolphins, Patriots) {
    console.log("You are a football player taking part in the 2026 NFL draft. You have been selected by the "+Chiefs+", but you also have received offers to play for the "+Seahawks+", "+Dolphins+" or the "+Patriots+". Do you:");

    console.log("1. Select the "+Chiefs+", and start your career there.");
    console.log("2. Select the "+Seahawks+", and start your career there.");
    console.log("3. Select the "+Dolphins+", and start your career there.");
    console.log("4. Select the "+Patriots+", and start your career there.");
    console.log("");

    let teamchoice = prompt("Enter your team choice:");
    switch (teamchoice) {
        case "1":
            if (Chiefs) {
                console.log("You are drafted by the "+Chiefs+". You have a solid rookie year, but the team fails to make the playoffs. You have a long and successful career in Kansas City, but never win a Super Bowl.");
            }  
            return;
        case "2":
            if (Seahawks) {
                console.log("You are drafted by the "+Seahawks+". You have a stellar rookie year, and go on to win the Super Bowl, winning MVP as well. You are hailed as a hero in Seattle, and have a long and successful career there.");
            }                
            return;
        case "3":
            if (Dolphins) {
                console.log("You are drafted by the "+Dolphins+". You live the lavish life in Miami, but fall short of expectations on the field. You have a short career in Miami, and are out of the league by your third season. You go on to work as a high school football coach in Florida.");
            }
            return;
        case "4":
            if (Patriots) {
                console.log("You are drafted by the "+Patriots+". You have an excellent rookie year, making it to the Super Bowl. However, you are released after the season, and go on to work as an NFL analyst for ESPN.");
            }
            return;
        default:
            console.log(teamchoice+" is not valid. Please enter a number corresponding to your choice.");
            draft(user, Chiefs, Seahawks, Dolphins, Patriots);            // Try the same scene again.
    }
    endgame()
}

let user = prompt("What is your name?");
startgame(user);