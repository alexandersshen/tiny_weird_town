	function resizeGame() {
	  const container = document.querySelector('.game-container');
	  const wrapper = document.querySelector('.game-wrapper');

	  const gameWidth = 640;
	  const gameHeight = 480;

	  const availableWidth = container.clientWidth;
	  const scale = Math.min(availableWidth / gameWidth, 1);

	  wrapper.style.marginLeft =
	    `${(availableWidth - gameWidth * scale) / 2}px`;
	  wrapper.style.marginRight = '0';
	  wrapper.style.transform = `scale(${scale})`;

	  container.style.height = `${gameHeight * scale}px`;

	  // Show the game only after positioning is complete
	  container.style.visibility = 'visible';
	}

	resizeGame();
	window.addEventListener('resize', resizeGame);