var c
var cc
var imageObj = new Image()
var langth = 140
var player = {
  x: 170,
  l: 30,
  y: 610,
}
var enemyOne = {
  x: 15,
  y: 10,
  timer = 0,
  langth
}
var enemyTwo = {
  x: 175,
  y: 10,
  timer  = 0,
  langth
}
setInterval(ciclu,50);
var r1 =  Math.floor((Math.random(10) * 25) + 5);
var r2 =  Math.floor((Math.random(4) * 25) + 2);
c = document.getElementById("cnv");
cc = c.getContext("2d");
enemyOne.timer = Math.floor((Math.random(1000) * 3000) + 1);
enemyTwo.timer = Math.floor((Math.random(500 ) * 3000) + 1);
function enemy2Move() {
  enemyTwo.y += 7
  //console.log(e2y)
  if (enemyTwo.y >= 625) {
    enemyTwo.y = 10
  }
}
function checkEnd(xe,ye) {
  //console.log("xe :",xe + el)
var xes = xe - player.l
var xed = xe + el
  if(player.x > xes && player.x < xed && player.y < e1y+140 || player.y < enemyTwo.y+140) {
      e1y = 10
      enemyTwo.y = 10
      time = 0
      console.log("xes",xes,"xed",xed,"pX",player.x,"Y",ye)
    alert("mai ancearca odata")
  }
  //console.log(xed)
}
function enemy1Move() {
  //console.log("before  enemy1Move ", e1y)
  e1y += 5
  //console.log(" enemy1Move ", e1y)
  if (e1y >= 625) {
  e1y = 10
  }
}
function ciclu() {
  //console.log("in ciclu");
  checkEnd(e1x,e1y)
  checkEnd(enemyTwo.x,enemyTwo.y)
  backround();
  Theplayer();
  enemy1Move();
  enemy2Move();
  enemy1();
  enemy2();
}
function backround (){
  cc.fillStyle ='#000000'
  cc.fillRect(0 , 0,c.width,c.height)
}
function Theplayer(){
  cc.fillStyle =' orange'
  cc.fillRect(player.x,player.y,player.l,player.l)
  if (player.x >= 338) {
    player.x = 5
  }
  if (player.x <= 1) {
    player.x = 330
  }
    }
function enemy1() {
  cc.fillStyle='gray'
  cc.fillRect(e1x,e1y,langth,langth)
    }
function enemy2() {
  cc.fillStyle='gray'
  cc.fillRect(enemyTwo.x,enemyTwo.y,langth,langth)
    }
function move(e) {
  if (e.keyCode == 37) {
     player.x-=20
     //console.log(pX)
    }
  if (e.keyCode == 39) {
     player.x+=20
     //console.log(pX)
   }
  }
  document.onkeydown = move
