class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }//
      };
    
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value"); 
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    }
  
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
      wall30=createSprite();
      wall31=createSprite();
  
  


      if(keyWentDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }

      if(keyWentDown(DOWN_ARROW) && player.index !== null){

      player.y.pos=-10
      player.update();
      }
       
      if(keyWentDown(LEFT_ARROW) && player.index !== null){

        player.x.pos=-10
        player.update();
        }
        if(keyWentDown(RIGHT_ARROW) && player.index !== null){

          player.x.pos=+10
          player.update();
          }
    /*play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
  
        //index of the array
        var index =0;
  
        //x and y position of the cars
        var x =200;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
          }
          
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
    
      if(player.distance > 3860){
        gameState = 2;
  
        if(keyIsDown(38) && player.index !== null){
      yVel+=0.9;
  
        }
        if(keyIsDown(37)){
  
          xVel-=0.2
        }   mimininuebo
        if(keyIsDown(39)){ 
  
          xVel+=0.2
        }
        else if(keyIsDown(38) && yVel >0 && player.index !==null){
  
          xVel+=0.9
          yvel-=0.1
        }
        else{
  
          y.Vel*=0.985;
          xVel*=0.985;
        }
      }
      player.distance+=yVel
      yVel*=0.98;
      player.xPos=x.vel;
      xVel*=0.985;
      player.update();
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
    }*/
  
