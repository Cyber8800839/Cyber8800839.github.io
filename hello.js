function startgame(user) {
    console.log("Hello, "+user+". Would you like to play a game?");
    console.log("1. Yes");
    console.log("2. No");
    console.log("");
    let choice = prompt("Enter your choice:");
    switch (choice) {
        case "1":
            draft(user);                                 // Change the scene.
            return;
        case "2":
            console.log("End.");
            endgame();                                          // Ending 1.
            return;
        default:
            console.log("Invalid choice.");
            startgame(user);                                 // Try the same scene again.
    }
}
/*
 * Display a consistent end game dialogue.
 */
function endgame() {
    console.log("");
    console.log("Game over. Refresh to play again.");
    console.log("");
    console.log("This was one of 5 unique endings. Try different choices to see the others!");
}
/*
 * Change the scene to the draft.
 *
 * Parameters:
 * - user: a string with the user's name
 * 
 *  Description:
  * - Presents the player with 4 team choices
  * - Team choice does NOT affect ending, but is a personal preference
  * - Presents the player with 2 work ethic choices
  * - Presents the player with 2 choices in the middle of the season
  * - Each choice leads to a unique ending (4 total)
  * - Re-prompts the user if input is invalid
 */
function draft(user) {
    let Chiefs = "Chiefs";
    let Seahawks = "Seahawks";
    let Dolphins = "Dolphins";
    let Patriots = "Patriots";

    // ROUND 1
    console.log("");
    console.log(user + ", you are a football player entering the 2026 NFL Draft.");
    console.log("You have offers from multiple teams. Do you:");
    console.log("");

    console.log("1. Select the "+Chiefs+", and start your career there.");
    console.log("2. Select the "+Seahawks+", and start your career there.");
    console.log("3. Select the "+Dolphins+", and start your career there.");
    console.log("4. Select the "+Patriots+", and start your career there.");
    console.log("");

    let teamChoice = prompt("Enter your team choice:");
    let team = "";
    switch (teamChoice) {
        case "1":
            console.log("You are drafted by the "+Chiefs+"."); 
            team = Chiefs;
            break;

        case "2":
            console.log("You are drafted by the "+Seahawks+"."); 
            team = Seahawks;
            break;

        case "3":
            console.log("You are drafted by the "+Dolphins+".");
            team = Dolphins;
            break;

        case "4":
            console.log("You are drafted by the "+Patriots+".");
            team = Patriots;
            break;

        default:
            console.log("Invalid choice.");
            draft(user);            // Try the same scene again.
    }

    // ROUND 2
    
    console.log("");
    console.log("Before your rookie season, do you:");
    console.log("1. Train extremely hard");
    console.log("2. Enjoy fame and relax");

    let workChoice = prompt("Enter your choice:");

    // ROUND 3
    console.log("");

    if (workChoice === "1") {
        console.log("You push yourself hard every day.");

        console.log("Mid-season, do you:");
        console.log("1. Play through an injury");
        console.log("2. Sit out and recover");

        let injuryChoice = prompt("Enter your choice:");

        if (injuryChoice === "1") {
            console.log("");
            console.log("You play through the injury and lead the " + team + " to a championship!");
            console.log("You are remembered as a legend.");
        } else if (injuryChoice === "2") {
            console.log("");
            console.log("You recover fully and have a long, successful career with the " + team + ".");
            console.log("You make multiple Pro Bowls but never win a Super Bowl.");
        } else {
            console.log("Invalid choice.");
            draft(user);
            return;
        }

    } else if (workChoice === "2") {
        console.log("You enjoy the spotlight.");

        console.log("Your performance drops. Do you:");
        console.log("1. Refocus and train");
        console.log("2. Continue partying");

        let fameChoice = prompt("Enter your choice:");

        if (fameChoice === "1") {
            console.log("");
            console.log("You turn things around and become a solid player.");
        } else if (fameChoice === "2") {
            console.log("");
            console.log("Your career falls apart quickly.");
            console.log("You are out of the league in 3 years.");
        } else {
            console.log("Invalid choice.");
            draft(user);
            return;
        }

    } else {
        console.log("Invalid choice.");
        draft(user);
        return;
    }
    endgame()
}

//Start game by asking for user's name.
let user = prompt("What is your name?");
startgame(user);