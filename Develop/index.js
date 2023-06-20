
const leftChoice = document.getElementById("leftButton");
const rightChoice = document.getElementById("rightButton");
const leftResults = document.getElementById("leftResults");
const rightResults = document.getElementById("rightResults");

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

async function showQuestion() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}








