var form;
var game;
var database;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16
var wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall49
var wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42,wall43,wall44,wall45,wall46,wall47,wall48

var border1,border2,border3,border4;

var player1,player2,player3,player4
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  database= firebase.database();

// game = new Game();
 //game.getState();
 //game.start();

}


function draw(){
background(255);

wall1=createSprite(6,91,150,10);
wall2=createSprite(138,14,10,200);
wall3=createSprite(116,150,150,10);
wall4=createSprite(210,20,150,10);
wall5=createSprite(240,140,10,150);
wall6=createSprite(200,260,150,10);
wall7=createSprite(76,286,10,150);
wall8=createSprite(7,295,140,10);
wall9=createSprite(162,380,10,150);
wall10=createSprite(40,480,10,150);
wall11=createSprite(340,110,10,150);
wal12=createSprite(400,220,150,10);
wall14=createSprite(327,360,10,150);
wall15=createSprite(330,460,150,10);
wall16=createSprite(295,530,10,150);
wall17=createSprite(200,616,150,10);
wall18=createSprite(460,85,150,10);  
wall19=createSprite(502,160,10,150);
wall20=createSprite(480,299,150,10);
wall21=createSprite(489,430,10,150);
wall22=createSprite(454,580,150,10);
wall23=createSprite(565,397,150,10);
wall24=createSprite(580,540,10,150);
wall25=createSprite(593,66,10,150);
wall26=createSprite(575,198,150,10);
wall27=createSprite(602,297,10,150);
wall28=createSprite(687,501,150,10);
wall29=createSprite(780,520,10,150);
wall30=createSprite(672,92,150,10);
wall31=createSprite(740,388,10,150);
wall32=createSprite(670,180,10,150);
wall33=createSprite(778,222,150,10);
wall34=createSprite(805,108,10,150);
wall35=createSprite(949,179,10,150);
wall36=createSprite(820,323,150,10);
wall37=createSprite(1006,327,10,150);
wall38=createSprite(956,481,150,10);
wall39=createSprite(1180,420,150,10);
wall40=createSprite(1150,560,10,150);
wall41=createSprite(900,550,10,150);
wall42=createSprite(924,76,150,10);
wall43=createSprite(1080,84,10,150);
wall44=createSprite(1150,212,150,10);
wall45=createSprite(1210,148,150,10);
wall46=createSprite(1148,319,150,10);
wall47=createSprite(1253,241,10,150);
wall48=createSprite(1202,61,10,150);
wall49=createSprite(1043,566,150,10);
border1=createSprite(259,5,2200,10);
border2=createSprite(1341,274,10,2200);
border3=createSprite(1100,650,2200,10);
border4=createSprite(5,333,10,2200);

text(mouseX + " : " + mouseY,mouseX,mouseY);



drawSprites();
}
