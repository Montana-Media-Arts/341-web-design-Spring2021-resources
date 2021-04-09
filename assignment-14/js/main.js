var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// first line
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

// second line
ctx.moveTo(200, 100);
ctx.lineTo(0, 200);
ctx.stroke();

// third line
ctx.moveTo(0, 200);
ctx.lineTo(200, 300);
ctx.stroke();

// fourth line
ctx.moveTo(200, 300);
ctx.lineTo(0, 400);
ctx.stroke();

// fifth line
ctx.moveTo(0, 400);
ctx.lineTo(200, 500);
ctx.stroke();

// sixth line
ctx.moveTo(200, 500);
ctx.lineTo(0, 600);
ctx.stroke();

// top circle

ctx.beginPath();
ctx.arc(200, 100, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.stroke();

// middle circle

ctx.beginPath();
ctx.arc(200, 300, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#00FF00";
ctx.fill();
ctx.stroke();

// final circle

ctx.beginPath();
ctx.arc(200, 500, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#0000FF";
ctx.fill();
ctx.stroke();


// first line
ctx.moveTo(800, 0);
ctx.lineTo(600, 100);
ctx.stroke();

// second line
ctx.moveTo(600, 100);
ctx.lineTo(800, 200);
ctx.stroke();

// third line
ctx.moveTo(800, 200);
ctx.lineTo(600, 300);
ctx.stroke();

// fourth line
ctx.moveTo(600, 300);
ctx.lineTo(800, 400);
ctx.stroke();

// fifth line
ctx.moveTo(800, 400);
ctx.lineTo(600, 500);
ctx.stroke();

// sixth line
ctx.moveTo(600, 500);
ctx.lineTo(800, 600);
ctx.stroke();

// top circle
ctx.beginPath();
ctx.arc(600, 100, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#00FF";
ctx.fill();
ctx.stroke();

// middle circle

ctx.beginPath();
ctx.arc(600, 300, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#00FF00";
ctx.fill();
ctx.stroke();

// final circle

ctx.beginPath();
ctx.arc(600, 500, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.stroke();

ctx.font = "20px Tahoma";
ctx.fillStyle = "#000000";
ctx.fillText("Michael Cassens", 500, 595);

ctx.font = "72px Arial";
ctx.strokeText("A", 375, 100);
ctx.strokeText("R", 375, 200);
ctx.strokeText("I", 385, 300);
ctx.strokeText("S", 375, 400);
ctx.strokeText("E", 375, 500);

