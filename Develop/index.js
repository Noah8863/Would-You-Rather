//Start Screen Variables
const startBtn = document.getElementById("startBtn");
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
startBtn.addEventListener("click", StartGame)
startBtn.addEventListener("click", showQuestion)


//In Game Event Listener
leftChoice.addEventListener("click", showQuestion);
rightChoice.addEventListener("click", showQuestion);




const url = 'https://would-you-rather.p.rapidapi.com/wyr/random';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5ead5cf470msh36ab28d485526e2p1a0624jsn33e9f2c7cbfd',
		'X-RapidAPI-Host': 'would-you-rather.p.rapidapi.com'
	}
};

function StartGame(){
    leftSlider.classList.add("slide-left")
    rightSlider.classList.add("slide-right")
    startBtn.classList.add("hide")
    FadeIn()
}
setTimeout(function FadeIn(){
    gameContainer.classList.add("fadeIn")
}, 1000);


async function showQuestion() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        
    } catch (error) {
        console.error(error);
    }
}








