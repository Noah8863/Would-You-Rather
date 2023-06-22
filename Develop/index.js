//Start Screen Variables
const startBtn = document.getElementById("startBtn");
const btnContainer = document.getElementById("btnContainer");
const startingInstructions = document.getElementById("startingInstructions");

const leftSlider = document.getElementById("leftSlider");
const rightSlider = document.getElementById("rightSlider");

//In Game Variables
const leftChoice = document.getElementById("leftButton");
const rightChoice = document.getElementById("rightButton");

const leftResults = document.getElementById("leftResults");
const rightResults = document.getElementById("rightResults");

//Screen Variables
const gameContainer = document.getElementById("questionsContainer");

//Start Game Event Listener
startBtn.addEventListener("click", StartGame);
startBtn.addEventListener("click", showQuestion);

//In Game Event Listener
leftChoice.addEventListener("click", showQuestion);
rightChoice.addEventListener("click", showQuestion);

function StartGame() {
  leftSlider.classList.add("slide-left");
  rightSlider.classList.add("slide-right");
  startBtn.classList.add("hide");
  startingInstructions.classList.add("hide");
  btnContainer.classList.add("hide");
  setTimeout(function FadeIn() {
    gameContainer.classList.add("fadeIn");
  }, 1);
}

const url = "https://would-you-rather.p.rapidapi.com/wyr/random";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ca75b62c85mshdb48cab1b700d04p1387f4jsn794cb6953840",
    "X-RapidAPI-Host": "would-you-rather.p.rapidapi.com",
  },
};

async function showQuestion() {
  const url = "https://would-you-rather.p.rapidapi.com/wyr/random";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ca75b62c85mshdb48cab1b700d04p1387f4jsn794cb6953840",
      "X-RapidAPI-Host": "would-you-rather.p.rapidapi.com",
    },
  };

  try {
    //fetch the response from API server
    const response = await fetch(url, options);
    const result = await response.json();

    //Isolate the question from the response object
    var question = result[0].question;

    //Split the response into each individual word
    var brokenQuestion = question.split(" ");

    //Find the Index of the "or" keyword
    var orIndex = brokenQuestion.indexOf("or");

    //Create the first option before the "or" word
    var firstHalf = brokenQuestion.slice(0, orIndex);
    var firstChoice = firstHalf.join(" ");

    //Create the second option after the "or" word and remove the word "or"
    var secondHalf = brokenQuestion.slice(orIndex);
    secondHalf.shift();
    var secondChoice = secondHalf.join(" ");

    //Inject the options into the buttons
    leftChoice.innerHTML = firstChoice;
    rightChoice.innerHTML = secondChoice;
  } catch (error) {
    console.error(error);
  }
}
