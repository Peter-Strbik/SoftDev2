var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var circleButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");

ctx.fillStyle = "#00ff00";




var ID;

var drawC = function(){
    window.cancelAnimationFrame(ID);
    var radius = 0;
    var expand = true;
    var animate = function(){
	ctx.clearRect(0,0,500,500);
	if (expand){
	    radius += 1;
	}
	else{
	    radius -= 1;
	}
	if (radius == c.height/2){
	    expand = false;
	}
	if (radius == 0){
	    expand = true;
	}

	ctx.beginPath();
	ctx.arc(c.height/2, c.width/2, radius, 0, 2 * Math.PI);
	ctx.fill();
	
	ID = requestAnimationFrame(animate);
    };

    animate()
};

var stopC = function(){
    cancelAnimationFrame(ID);
};

circleButton.addEventListener("click", drawC);
stopButton.addEventListener("click", stopC);
