var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var circleButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");

ctx.fillStyle = "#00ff00";

var begin = false;
var radius = 0;
var ID;
var expand = true;

var start = function(){
    begin = true;
}

var drawC = function(){
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
    
    ID = requestAnimationFrame(drawC);
};

if(begin){
    ID = requestAnimationFrame(drawC);
}

var stopC = function(){
    cancelAnimationFrame(ID);
};

circleButton.addEventListener("click", drawC);
circleButton.addEventListener("click", start);
stopButton.addEventListener("click", stopC);
