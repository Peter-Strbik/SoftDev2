var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var clearButton = document.getElementById("clear");
var curveButton = document.getElementById("curve");

ctx.fillStyle = "#00ff00";

var preX;
var preY;
var first = true;
var curve = false;

var clear = function(e){
    e.preventDefault();
    first = true;
    ctx.clearRect(0,0,500,500);
};

var toggleCurve = function(e){
    e.preventDefault();
    if (curve){
	curve = false;
    }
    else{
	curve = true;
    }
};

var drawDot = function(e){
    e.preventDefault();
    if (!first){
	ctx.beginPath();
	ctx.moveTo(preX, preY);
	if (curve){
	    ctx.quadraticCurveTo(250, 250, e.offsetX, e.offsetY);
	}
	else{
	    ctx.lineTo(e.offsetX, e.offsetY);
	}
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(preX, preY, 10, 0, 2 * Math.PI);
	ctx.fill();
    }
    else{
	first = false;
    }
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 10, 0, 2 * Math.PI);
    ctx.fill();
    preX = e.offsetX;
    preY = e.offsetY;
};

clearButton.addEventListener("click", clear);
curveButton.addEventListener("click", toggleCurve);
c.addEventListener("click", drawDot);
