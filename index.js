#!/usr/bin/env node
 
// Function to display text art
function displayTextArt() {
  const textArt =
		    
"  ,-.       _,---._ __  / \\\n" +
    " /  )    .-'       `./ /   \\\n" +
    "(  (   ,'            `/    /|\n" +
    " \\  `\"             '\\   / |\n" +  // Properly escape the single quote here
    "  `.              ,  \\ \\ /  |\n" +
    "   /`.          ,'-`----Y   |\n" +
    "  (            ;        |   '\n" +
    "  |  ,-.    ,-'         |  /\n" +
    "  |  | (   |            | /\n" +
    "  )  |  \\  `.___________|/\n" +
    "  `--'   `--'";
  console.log(textArt);
}

// Example usage
displayTextArt();

const presenters = process.argv.slice(2);

// Check if there are 2 or more presenters
if (presenters.length < 2) {
  process.exit(1);
}

// Randomize the array of presenters
const randomizedPresenters = presenters.sort(() => Math.random() - 0.5);

// Select the first presenter from the randomized array
const selectedPresenter = randomizedPresenters[0];

// Print the selected presenter
console.log('\n발표자: ' + selectedPresenter);
