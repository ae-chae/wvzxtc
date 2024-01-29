#!/usr/bin/env node
 
// Function to display text art
function displayTextArt() {
  const textArt =
		    
"  ,-.       _,---._ __  / \\\n" +
    " /  )    .-'       `./ /   \\\n" +
    "(  (   ,'            `/    /|\n" +
    " \\  `\"             '\\     / |\n" +  // Properly escape the single quote here
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

class Presentation {
  constructor(args) {
    if (args.length < 2) {
    console.error("두 명 이상 입력해 주세요.");
    process.exit(1);
	  }
    this.args = args;
    this.length = args.length;
  }

  getRandomPresenter() {
    return this.args[Math.floor(Math.random() * this.length)];
  }
}

class PresenterSelector extends Presentation {
  constructor(args) {
    super(args);
  }

  selectPresenter() {
    console.log('발표자: ', this.getRandomPresenter());
  }
}

// Usage
const args = process.argv.slice(2);
const presenterSelector = new PresenterSelector(args);
presenterSelector.selectPresenter();


