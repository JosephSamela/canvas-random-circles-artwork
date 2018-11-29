var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var size = 3840;
canvas.style.width = size + "px";
canvas.style.height = size + "px";
var scale = window.devicePixelRatio; // <--- Change to 1 on retina screens to see blurry canvas.
canvas.width = size * scale;
canvas.height = size * scale;

// Normalize coordinate system to use css pixels.
ctx.scale(scale, scale);
var button = document.getElementById("refresh");

var refresh = function() {

ctx.clearRect(0,0,3840,3840);
for(i=0; i<5000; i++) {

var x = Math.floor(Math.random()*3840);
var y = Math.floor(Math.random()*3840);
var radius = Math.floor(Math.random()*250);

// cyan, red, green, blue, yello
var colors = ["#51e1f5","#ff5c72","#72d9b2","#65a4f4", "#fee25e"];

var r = Math.floor(Math.random()*255);
var g = Math.floor(Math.random()*255);
var b = Math.floor(Math.random()*255);
  
ctx.beginPath();
ctx.arc(x,y,radius,Math.PI*2,0,false);
//ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ",1)";
ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
ctx.fill();
ctx.closePath();
  
}
}

refresh();
button.addEventListener("click", refresh, false);

//setInterval(refresh, 60);

