function getSizeValue(valueWithUnit, unit) {
	return parseInt(valueWithUnit.split(unit)[0]);
}

function balloon(event) {
	// if (event.defaultPrevented) {
	//   return; // Do nothing if the event was already processed
	// }
	switch (event.keyCode) {
		case 40:
			changeSize('.balloon', 1.1, 'down');
			break;
		case 38:
			changeSize('.balloon', 1.1);
			break;
		default:
			return; // Quit when this doesn't handle the key event.
	}

	// Cancel the default action to avoid it being handled twice
	// event.preventDefault();
}

function question() {
  $( ".exercise" ).toggleClass( "active" );
}

// element = 'string'
// amount = int
// direction '' or down
function changeSize(element, amount, direction) {
	element = document.querySelector(element);
	let elementSize = window.getComputedStyle(element).fontSize;
	let elementSizeValue = getSizeValue(elementSize, 'px');

	if (direction === undefined) {
		elementSizeValue *= amount;
	} else elementSizeValue /= amount;

	if (elementSizeValue <= 250) {
		console.log(elementSize);
		elementSize = Math.ceil(elementSizeValue) + 'px';
		element.style.fontSize = elementSize;
	} else boom(element);
}

function boom(element) {
	element.firstChild.nodeValue = '💥';
	document.removeEventListener('keydown', balloon, true);
}

document.addEventListener('keydown', balloon, true);

button = document.querySelector('button.question');
button.addEventListener('click', question, true);
for(i=0; i<200; i++) {
	// Random rotation
	var randomRotation = Math.floor(Math.random() * 360);
	// Random width & height between 0 and viewport
	var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
	var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
	
	// Random animation-delay
	var randomAnimationDelay = Math.floor(Math.random() * 10);
	console.log(randomAnimationDelay)
  
	// Random colors
	var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
	var randomColor = colors[Math.floor(Math.random() * colors.length)];
  
	// Create confetti piece
	var confetti = document.createElement('div');
	confetti.className = 'confetti';
	confetti.style.top=randomHeight + 'px';
	confetti.style.left=randomWidth + 'px';
	confetti.style.backgroundColor=randomColor;
	confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
	confetti.style.animationDelay=randomAnimationDelay + 's';
	document.getElementById("confetti-wrapper").appendChild(confetti);
  }
