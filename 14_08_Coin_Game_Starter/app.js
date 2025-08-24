function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener("keyup", function(e) {
	//When the down arrow key is pressed
	if(e.key === 'ArrowDown' || e.key === 'Down') {
	//current top is equal to avatar style top
	//add 50px to the top style
		moveVertical(avatar, 50);
	
	} else if (e.key === 'ArrowUp' || e.key === 'Up') {
		moveVertical(avatar, -50);

	} else if(e.key === "ArrowRight") {
		//add 50px to the left style
		moveHorizontal(avatar, 50);
		avatar.style.transform = 'scale(1, 1)';

	} else if(e.key === "ArrowLeft") {
		const currLeft = extractPosition(avatar.style.left);
		//add 50px to the right style
		moveHorizontal(avatar, -50);
		avatar.style.transform = 'scale(-1, 1)';
	}
	if(isTouching(avatar, coin)) moveCoin();
});
const moveCoin = () => {
	const x = Math.floor(Math.random() * window.innerHeight);
	const y = Math.floor(Math.random() * window.innerHeight);
	coin.style.top = `${y}px`;
	coin.style.left = `${x}px`;
}

const moveVertical = (element, amount) => {
	const currTop = extractPosition(element.style.top);
	element.style.top = `${currTop + amount}px`;	
}

const moveHorizontal = (element, amount) => {
	const currLeft = extractPosition(element.style.left);
	element.style.left = `${currLeft + amount}px`;	
}

const extractPosition = (pos) => {
	if(!pos) return 100;
	//Extract the number from the string
	return parseInt(pos.slice(0, -2));
}

moveCoin();