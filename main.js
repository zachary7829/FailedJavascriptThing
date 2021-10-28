var playerx = 50;
var oldplayerx = playerx;
var playery = 50;
var oldplayery = playery;
var playerwidth = 50;
var oldplayerwidth = playerwidth;
var playerheight = 50;
var oldplayerheight = playerheight;
window.lefton = 0;
window.righton = 0;
window.upon = 0;
window.downon = 0;
window.keyinuse = 0;
var idVar;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.lineWidth = "10";
// ctx.strokeStyle = "blue";
// ctx.rect(50, 50, 100, 0);
// ctx.stroke();
// ctx.beginPath();
// ctx.lineWidth = "10";
// ctx.strokeStyle = "green";
// ctx.rect(50, 80, 1000, 0);
// ctx.stroke();
ctx.fillStyle = '#FFFFF';
ctx.fillRect(50, 50, 50, 50);
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 37) {
    if (lefton == 0){
      window.lefton = 1;
      window.keyinuse = "left";
    }
  } else {
    
  }
  if (event.keyCode == 39) {
    if (righton == 0){
      window.righton = 1;
      window.keyinuse = "right";
    }
  } else {
  
  }
  if (event.keyCode == 38) {
    if (upon == 0){
      window.upon = 1;
      window.keyinuse = "up";
    }
  } else {
  
  }
  if (event.keyCode == 40) {
    if (downon == 0){
      window.downon = 1;
      window.keyinuse = "down";
    }
  } else {
   
  }

});

document.addEventListener('keyup', function(event) {
  switch (keyinuse){
    case "left":
      window.lefton = 0;
      break;
    case "right":
      window.righton = 0;
      break;
    case "up":
      window.upon = 0;
      break;
    case "down":
      window.downon = 0;
      break;
  }
  downon = 0;
  lefton = 0;
  righton = 0;
  upon = 0;
});

function movefunc(){
  if (lefton == 1) {
    // Left
    oldplayerx = playerx;
    playerx -= 1;
    oldplayerwidth = playerwidth;
    oldplayerheight = playerheight;
    if (playerwidth < 60 ) {playerwidth += 0.5};
    if (playerheight > 40) {playerheight -= 0.5};
    ctx.clearRect(oldplayerx, oldplayery + ((50 - oldplayerheight)/2), oldplayerwidth, oldplayerheight);
    ctx.fillRect(playerx, playery + ((50 - playerheight)/2), playerwidth, playerheight);
  } if (righton == 1) {
      // Right
      oldplayerx = playerx;
      playerx += 1;
      oldplayerwidth = playerwidth;
      oldplayerheight = playerheight;
      if (playerwidth < 60 ) {playerwidth += 0.5};
      if (playerheight > 40) {playerheight -= 0.5};
      ctx.clearRect(oldplayerx, oldplayery + ((50 - oldplayerheight)/2), oldplayerwidth, oldplayerheight);
      ctx.fillRect(playerx, playery + ((50 - playerheight)/2), playerwidth, playerheight);
  } if (upon == 1) {
      // Up
      oldplayery = playery;
      playery -= 1;
      oldplayerwidth = playerwidth;
      oldplayerheight = playerheight;
      if (playerwidth > 40 ) {playerwidth -= 1};
      if (playerheight < 60) {playerheight += 1};
      ctx.clearRect(oldplayerx - ((50 - oldplayerheight)/2), oldplayery, oldplayerwidth, oldplayerheight);
      ctx.fillRect(playerx - ((50 - playerheight)/2), playery, playerwidth, playerheight);
  } if (downon == 1) {
      // Down
      oldplayery = playery;
      playery += 1;
      oldplayerwidth = playerwidth;
      oldplayerheight = playerheight;
      if (playerwidth > 40 ) {playerwidth -= 1};
      if (playerheight < 60) {playerheight += 1};
      ctx.clearRect(oldplayerx - ((50 - oldplayerheight)/2), oldplayery, oldplayerwidth, oldplayerheight);
      ctx.fillRect(playerx - ((50 - playerheight)/2), playery, playerwidth, playerheight);
  } if (lefton == 0 && righton == 0 && upon == 0 && downon == 0){
    oldplayerwidth = playerwidth;
    oldplayerheight = playerheight;
    if (playerwidth > 50 ) {playerwidth -= 2};
    if (playerwidth < 50 ) {playerwidth += 2};
    if (playerheight > 50) {playerheight -= 2};
    if (playerheight < 50) {playerheight += 2};
    ctx.clearRect(playerx, playery + ((50 - oldplayerheight)/2), oldplayerwidth, oldplayerheight);
    ctx.fillRect(playerx, playery + ((50 - playerheight)/2), playerwidth, playerheight);
  }
}

setInterval(movefunc, 10);