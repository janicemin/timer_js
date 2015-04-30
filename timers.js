var resetButton = document.querySelector("#reset")
var startButton = document.querySelector("#start")
var pauseButton = document.querySelector("#pause")
var display = document.querySelector("#timer")
var counter = 0;
var isItCounting = 0;

startButton.addEventListener("click", function(){
	if( isItCounting === 0) {
		var counting = setInterval( function(){
			display.innerHTML = "Time elapsed: " + counter;
			counter ++;
		}, 1000);
		isItCounting = 1;
	}

pauseButton.addEventListener("click", function(){
	clearInterval(counting);
	isItCounting = 0;
	})

resetButton.addEventListener("click", function(){
	clearInterval(counting);
	isItCounting = 0;
	display.innerHTML = "Stop Watch"
	counter = 0
	})
})


