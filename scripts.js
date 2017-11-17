var playerOne = document.querySelector("#player_1"),
	playerTwo = document.querySelector("#player_2"),
	resetBtn = document.querySelector("#reset"),
	winningScoreInput = document.querySelector("#winning_score_input"),
	winningScoreDisplay = document.querySelector("#winning_score_display"),
	scoreBoardPlayerOne = document.querySelector("#player_1_display"),
	scoreBoardPlayerTwo = document.querySelector("#player_2_display"),
	playerOneScore = 0,
	playerTwoScore = 0,
	winningScore = 5,
	gameOver = false;

function reset() {
	playerOneScore = 0;
	playerTwoScore = 0;
	scoreBoardPlayerOne.textContent = 0;
	scoreBoardPlayerTwo.textContent = 0;
	scoreBoardPlayerOne.classList.remove("winner");
	scoreBoardPlayerTwo.classList.remove("winner");
	gameOver = false;
};

playerOne.addEventListener("click", function() {
	if(!gameOver) {
		playerOneScore++;
		if(playerOneScore === winningScore) {
			scoreBoardPlayerOne.classList.add("winner");
			gameOver = true;
		}
		scoreBoardPlayerOne.textContent = playerOneScore;
	}	
});

playerTwo.addEventListener("click", function() {
	if(!gameOver) {
		playerTwoScore++;
		if(playerTwoScore === winningScore) {
			scoreBoardPlayerTwo.classList.add("winner");
			gameOver = true;
		}
		scoreBoardPlayerTwo.textContent = playerTwoScore;
	}
});

resetBtn.addEventListener("click", function() {
	reset();
});

console.log('hi');
winningScoreInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = winningScoreInput.value;
	winningScore = Number(winningScoreInput.value);
	reset();
});