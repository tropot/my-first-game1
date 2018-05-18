var c
var cc
var img = document.getElementById("scream")
class Sprite {
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.prev_x = x;
    this.prev_y = y;
    this.image = image;
    this.width = this.image.naturalWidth;
    this.height = this.image.naturalHeight;
    this.backgroundCopy = false;
    //console.log("this.image = ", this.image, " this.width ", this.width);
  }
  draw() {
  //  console.log("draw",this.y)
    if (this.backgroundCopy) {
      cc.putImageData(this.backgroundCopy, this.prev_x, this.prev_y);
    }
    this.backgroundCopy = cc.getImageData(this.x, this.y, this.width, this.height);
    this.prev_x = this.x;
    this.prev_y = this.y;
    //console.log(" this.height ", this.height, " naturalWidth ", this.image.naturalWidth );
    cc.drawImage(this.image, this.x, this.y);
  }
}
class Enemy extends Sprite {
  constructor(enemyObj) {
    super(enemyObj.x, enemyObj.y, enemyObj.image);
    this.xInitial = enemyObj.xInitial;
    this.timer = enemyObj.timer
    this.speed = enemyObj.speed
    this.xSpeed = enemyObj.xSpeed
    this.langth = enemyObj.langth
    this.amplitudaX = enemyObj.amplitudaX
  }
}

function fillCanvas() {
  for(var x=0; x<3000; x +=220) {
    for(var y=0;y<2500;y +=190) {
  //    console.log(" x=", x, " y=", y);
      cc.drawImage(bushImg, x, y);
    }
  }
}

var bushImg = document.getElementById("bush");
console.log("bush",bushImg);
bushImg.setAttribute('crossOrigin', '');

var enemys = []
function createEnemies() {
  for (var enemyNr  = 2;enemyNr >= 1;enemyNr--){
    enemys.push(new Enemy({
      image: img,
      xInitial: Math.floor((Math.random(20) * 300)),
      x: Math.floor((Math.random(20) * 300)),
      y: Math.floor((Math.random(10) * 50)),
      timer: Math.floor((Math.random(1000) * 3000)),
      speed: Math.floor((Math.random(5) * 7)+1),
      xSpeed: 10,
      langth:140,
      amplitudaX:15,
    }))
  }
}

console.log("enemy =",enemys)
var enemyImage = new Image()
//enemyImage.src = "/home/sergio/anton/programare/death rain/enemy.jpg"
var langth = 140
var amlitudaX
var player = {
  x: 170,
  l: 30,
  y: 610,
}
window.onload=function(){
  fillCanvas()
  createEnemies()
setInterval(ciclu,24);

}
c = document.getElementById("cnv");
cc = c.getContext("2d");
function enemyMove(enemy) {
enemy.y += enemy.speed
  enemy.x += enemy.xSpeed
   //console.log("enemy.x+enemy.amplitudaX",enemy.x+enemy.amplitudaX,"")
  if(enemy.xSpeed > 0 )  {
    if (enemy.xInitial+enemy.amplitudaX < enemy.x) {
      enemy.xSpeed = -enemy.xSpeed
    }
  }else {
    if(enemy.x < enemy.xInitial) {
      enemy.xSpeed = -enemy.xSpeed
    }
  }
  if (enemy.speed >= 10) {
    enemy.speed = Math.floor((Math.random(5) * 7)+1);
  }
  if (enemy.y >= 625) {
    enemy.speed =  Math.floor((Math.random(5) * 7)+1);
    enemy.y = 10
  }

}

function checkEnd(enemy) {
  //console.log("xe :",xe + el)
var xes = enemy.x - player.l
var xed = enemy.x + langth
  if(player.x > xes && player.x < xed && player.y < enemy.y+langth) {
    enemy.speed +=  Math.floor((Math.random(5) * 7)+1);
      enemy.y = 10
      time = 0
      //console.log("xes",xes,"xed",xed,"pX",player.x,"Y",enemy.y)
    alert("mai ancearca odata")
  }
  //console.log(xed)
}
function ciclu() {
//  cc.clearRect(0, 0, c.width, c.height);
    //fillCanvas();
    for(o = 0;o < enemys.length;o++){
      enemyMove(enemys[o]);
      enemyDraw(enemys[o]);
    }
    Theplayer();

  //console.log("in ciclu");
  //console.log("caroce enemys este",enemys)
  for(var o = 0;o < enemys.length;o++){
    checkEnd(enemys[o])
  }
}
function Theplayer(){
  cc.fillStyle ='green'
  cc.fillRect(player.x,player.y,player.l,player.l)
  if (player.x >= 338) {
    player.x = 5
  }
  if (player.x <= 1) {
    player.x = 330
  }
    }
function enemyDraw(enemy) {
  //prev_pos = pos;
  //sprite.y = sprite.y + enemy.speed;
   enemy.draw();
  // console.log("acum sunt in draw",sprite)
    }
function move(e) {
  if (e.keyCode == 37) {
     player.x-=40
     //console.log(pX)
    }
  if (e.keyCode == 39) {
     player.x+=40
     //console.log(pX)
   }
  }
  document.onkeydown = move
console.log(enemys)
