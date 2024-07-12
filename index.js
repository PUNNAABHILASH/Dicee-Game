function playGame() {
	let player1Score = Math.floor(Math.random() * 6) + 1;
	let player2Score = Math.floor(Math.random() * 6) + 1;
	let player1Image = document.querySelector('.img1');
	let player2Image = document.querySelector('.img2');
	player1Image.setAttribute('src', `./images/dice${player1Score}.png`);
	player2Image.setAttribute('src', `./images/dice${player2Score}.png`);
	let header = document.querySelector('h1');
	if (player1Score > player2Score) {
		header.innerHTML = '<img src="./images/flag.png"/> Player 1 Wins!';
	} else if (player2Score > player1Score) {
		header.innerHTML = 'Player 2 Wins! <img src="./images/flag.png" />';
	} else {
		header.innerHTML = 'Draw!';
	}
}

document.querySelector('.play').addEventListener('click', function () {
	document.querySelector('.intial').classList.add('start');
	const headingElement = document.querySelector('.playnext');
	if (headingElement.classList.contains('start')) {
		headingElement.classList.remove('start');
	}
	playGame();
});
