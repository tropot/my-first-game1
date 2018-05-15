var c
var cc
var enemyImage = new Image()
enemyImage.src = "/home/sergio/anton/programare/death rain/character.png"

var langth = 140
var r1 =  Math.floor((Math.random(5) * 10)+1);
var r2 =  Math.floor((Math.random(5) * 10)+1);
var amlitudaX
var player = {
  x: 170,
  l: 30,
  y: 610,
}
var enemyOne = {
  xInitial: 15,
  x: 15,
  y: 10,
  timer: 0,
  speed: r1,
  xSpeed: 1,
  langth,
  amplitudaX: 20
}
var enemyTwo = {
  xInitial:175,
  x: 175,
  y: 10,
  timer: 0,
  speed: r2 ,
  xSpeed: 1,
  langth,
  amplitudaX: 20
}
setInterval(ciclu,24);
c = document.getElementById("cnv");
cc = c.getContext("2d");
enemyOne.timer = Math.floor((Math.random(1000) * 3000));
enemyTwo.timer = Math.floor((Math.random(500 ) * 3000));
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
    enemy.speed = Math.floor((Math.random(5) * 10)+1);
  }
  if (enemy.y >= 625) {
    enemy.speed +=  Math.floor((Math.random(5) * 10)+1);
    enemy.y = 10
  }

}

function checkEnd(enemy) {
  //console.log("xe :",xe + el)
var xes = enemy.x - player.l
var xed = enemy.x + langth
  if(player.x > xes && player.x < xed && player.y < enemy.y+langth) {
      enemy.y = 10
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
   console.log("obj1 : ",enemyOne,"obj2 : ",enemyTwo)

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
  image= enemyImage
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
