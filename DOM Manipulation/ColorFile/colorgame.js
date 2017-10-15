var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

resetButton.addEventListener("click",function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
	//change each color to match given color
	squares[i].style.background = color;

	}
 }

 function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
 }

 function generateRandomColors(num){
	 //make an array
	 var arr = []
	 //add num random colors to array
	 for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	 }
	 //return array
	 return arr;
 }

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset (){
	resetButton.textContent = "NEW COLORS"; 
	messageDisplay.textContent = "";
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array 
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"; //this brings back the square div after it has been removed by style.display = "none" below. It ensures that if the square exists in the array, we will show it.
		  squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

function init(){
	//mode button event listeners
	setUpModeButtons();
	setUpSquares();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6; //this does what the below if else statement does. Called the ternary operator
			// if(this.textContent === "Easy"){
			// 	numSquares = 3;
			// } else{
			// 	numSquares = 6;
			// }
			reset();
		});
	}	
}

function setUpSquares(){
	// for loop that selects each and every square
	for(var i = 0; i < squares.length; i++){
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare grabbed color to pickedColor
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "PLAY AGAIN?";
				changeColors(pickedColor);
				h1.style.background = clickedColor;
			 } else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
	reset();
}
