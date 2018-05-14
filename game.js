var c
var cc
var imageObj = new Image()
var langth = 140
var r1 =  Math.floor((Math.random(5) * 10)+1);
var r2 =  Math.floor((Math.random(5) * 10)+1);
var player = {
  x: 170,
  l: 30,
  y: 610,
}
var enemyOne = {
  x: 15,
  y: 10,
  timer: 0,
  speed: r1,
  langth
}
var enemyTwo = {
  x: 175,
  y: 10,
  timer: 0,
  speed: r2 ,
  langth
}
setInterval(ciclu,50);
c = document.getElementById("cnv");
cc = c.getContext("2d");
enemyOne.timer = Math.floor((Math.random(1000) * 3000) + 1);
enemyTwo.timer = Math.floor((Math.random(500 ) * 3000) + 1);
function enemyMove(enemy) {
  enemy.y += enemy.speed
  //console.log(e2y)
  if (enemy.y >= 625) {
    enemy.y = 10
  }
}
function checkEnd(enemy) {
  //console.log("xe :",xe + el)
var xes = enemy.x - player.l
var xed = enemy.x + langth
  if(player.x > xes && player.x < xed && player.y < enemy.y+langth) {
      enemyOne.y = 10
      enemyTwo.y = 10
      time = 0
      console.log("xes",xes,"xed",xed,"pX",player.x,"Y",enemy.y)
    alert("mai ancearca odata")
  }
  //console.log(xed)
}
function ciclu() {
  //console.log("in ciclu");
  checkEnd(enemyOne)
  checkEnd(enemyTwo)
  backround();
  Theplayer();
  enemyMove(enemyTwo);
  enemyMove(enemyOne);
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
  cc.fillRect(enemyOne.x,enemyOne.y,langth,langth)
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
