(function() {
	const firstLottie = document.getElementById('firstLottie');
	if(firstLottie) { 
	   LottieInteractivity.create({
		  mode:"scroll",
		  player:'#firstLottie',
		  actions: [
		    {
		      visibility: [0,1],
		      type: "seek",
		      frames: [0, 300]
		    }
		  ]  
		});
	   /*firstLottie.addEventListener("frame", (evt) =>
          console.log("frame entered", evt.detail)
        );*/
	}

   if(document.getElementById('secondLottie')) {
	   LottieInteractivity.create({
		    mode: "scroll",
		    player: "#secondLottie",
		    container: "#services",
		    actions: [
		    {
		      visibility: [0,1],
		      type: "seek",
		      frames: [0, 301]
		    }
		  ]
		});
	}

if(document.getElementById('secondLottie--confetti')) {
   LottieInteractivity.create({
	    mode: "scroll",
	    player: "#secondLottie--confetti",
	    container: "#services",
	    actions: [
	    {
	      visibility: [0,1],
	      type: "loop",
	      frames: [0, 301]
	    }
	  ]
	});
}
if(document.getElementById('secondLottie--confettiTwo')) {
   LottieInteractivity.create({
	    mode: "scroll",
	    player: "#secondLottie--confettiTwo",
	    container: "#services",
	    actions: [
	    {
	      visibility: [0,1],
	      // type: "loop",
	      type: "seek",
	      frames: [0, 301]
	    }
	  ]
	});
}

/*.addEventListener("frame", (evt) =>
          console.log("frame entered", evt.detail)
    );*/

const rocketContainer = document.getElementById('rocket__container');
const rocket = document.getElementById('rocket');

if(rocket) {
	//TEST CONFIRMED: Can add scale transformation to element and any css styling within the bounds of SVG css rules
	rocketContainer.addEventListener('mouseenter', () => {
		rocket.seek(0);
		rocket.setDirection(1);
		rocket.play();
		rocket.toggleLooping();
	});

	rocketContainer.addEventListener('mouseleave', () => {
		rocket.seek('82%');
		rocket.setDirection(1);
		rocket.play();
		rocket.toggleLooping();
	});
}

const spinTestContainer = document.getElementById('spinTest__container');
const spinTest = document.getElementById('spinTest--two');

if(spinTest) {
	//TEST CONFIRMED: Can add scale transformation to element and any css styling within the bounds of SVG css rules
	spinTestContainer.addEventListener('mouseenter', () => {
		spinTest.setDirection(1);
		spinTest.play();
	});

	spinTestContainer.addEventListener('mouseleave', () => {
		spinTest.seek('100%');
		spinTest.setDirection(-1);
		spinTest.play();
	});
}

if(document.getElementById('eyeRolling')) {
	LottieInteractivity.create({
	    mode: "cursor",
	    player: "#eyeRolling",
	    container: "#rollingEyes",
	    actions: [
	    {
	    	position: { x: [0, 1], y: [0, 1] },
	      visibility: [0,1],
	      type: "seek",
	      frames: [0, 30]
	    }
	  ]
	});
}

const drinkContainer = document.getElementById('drink__container');
const drink = document.getElementById('drink');

if(drink) {
	LottieInteractivity.create({
	    mode: "hover",
	    player: "#drink",
	    container: "#drink__container",
	    actions: [
	    {
	    	position: { x: [0, 1], y: [0, 1] },
	      visibility: [0,1],
	      type: "seek",
	      frames: [0, 285]
	    }
	  ]
	});
	//TEST CONFIRMED: Can add scale transformation to element and any css styling within the bounds of SVG css rules
	drinkContainer.addEventListener('mouseenter', () => {
		drink.setDirection(1);
		drink.play();
	});

	drinkContainer.addEventListener('mouseleave', () => {
		drink.seek('100%');
		drink.setDirection(-1);
		drink.play();
	});
}

// console.log(document.getElementById('spinTest--two').getLottie());
const balloons = document.getElementById('balloons');
if(balloons) {
	LottieInteractivity.create({
		  mode:"scroll",
		  player:'#balloons',
		  container:'#htmlContainer',
		  actions: [
		    {
		      visibility: [0,1],
		      type: "seek",
		      frames: [0, 600]
		    }
		  ]
		});
}

const car = document.getElementById('car');
if(car) {
	LottieInteractivity.create({
		  mode:"scroll",
		  player:'#car',
		  container:'#htmlContainer',
		  actions: [
		    {
		      visibility: [0,1],
		      type: "loop",
		      frames: [0, 181]
		    }
		  ]
		});
}

/*
balloons.addEventListener('complete', function() {
  setTimeout(function(){
    balloons.goToAndPlay(0);
  }, 2000);
})*/

})();


///https://lottiefiles.github.io/lottie-player/usage.html

// https://github.com/LottieFiles/lottie-player

// https://github.com/samuelOsborne/Lottie-interactive

//https://lottiefiles.com/interactivity