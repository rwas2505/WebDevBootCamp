var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var resetButton = document.querySelector("#resetButton");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var playTo = document.querySelector("p span");
var inputNum = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;




// Player 1 button logic
p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		console.log(p1Score , winningScore);
		p1Display.textContent = p1Score;
		if (p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
	}	
});

// Player 2 button logic
p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		p2Display.textContent = p2Score;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver=true;
		}
	}
});


// Reset button logic
resetButton.addEventListener("click",function(){
	reset();
});

// Input box logic
inputNum.addEventListener("change",function(){
	playTo.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

// reset function
function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}
