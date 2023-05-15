 var tubarão, peixe;
 var ground, invisibleGround,fundo;

 var score,PLAY,END;

 var gameOverImg;

 var gameOver, restart;

 function preload(){
 peixe=loadImage("peixe.png");
 tubarão=loadImage("tubarão.png");

 gameOverImg=loadImage("gameOver.png");
 fundo=loadImage("fundo.png");
 }

 function setup() {
 createCanvas(600,200);

 peixe-createSprite(50,180,20,50);
 peixe.scale=0.5;

 ground = createSprite(200,180,400,20);
 ground.addImage("ground",groundImage);
 ground.x = ground.width /2;

 gameOver = createSprite(300,100);
 gameOver.addImage(gameOverImg);
 gameOver.scale=0.5;

 invisibleGround = createSprite(200,190,400,10);
 invisibleGround.visible = false;

 peixe.setCollider("circle",0,0,40);
 peixe.debug=true

 score=0;
 }

 function draw() {
 background(180);
 text("Score: "+ score, 500,50);

 if(gameState === PLAY){
    gameOver.visible = false
    
    ground.velocityX = -4;
    ground.velocityX = -(4 + 0.1* score/100);
   
    score = score + Math.round(frameCount/60);

    if(keyDown("space")&& peixe.y >= 100) {
        peixe.velocityY = -12;
    }
    
    //adicionar gravidade
    peixe.velocityY = peixe.velocityY + 0.8
 
    if(tubarão.isTouching(peixe)){
    gameState = END;
    }
 }
 else if (gameState === END) {
    gameOver.visible = true;
    
    ground.velocityX = 0;
    peixe.velocityY = 0;

    tubarão.setLifetimeEach(-1);
 }
 

 peixe.collide(invisibleGround);

 drawSprites();
}

 function spawnObstacles(){
 if (frameCount % 60 === 0){
    tubarão = createSprite(400,165,10,40);
    tubarão.velocityX = -(6 + score/100);
 }
 }

