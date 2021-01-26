var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","6b1caee5-84e9-43b6-bbe4-1ae207be82eb"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":9,"looping":true,"frameDelay":4,"version":"gtJvpNUSIAIuUfN4p9DlrD_ohIwIsuoB","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":null,"frameSize":{"x":1011,"y":525},"frameCount":1,"looping":true,"frameDelay":12,"version":"lz.wDHMCPxibMu8kgnX28AcmEQB7ZGo.","loadedFromSource":true,"saved":true,"sourceSize":{"x":1011,"y":525},"rootRelativePath":"assets/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"DFvK6DVMp5Tl.U1wX35uUVkzVTYNrFYF","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"6b1caee5-84e9-43b6-bbe4-1ae207be82eb":{"name":"background","sourceUrl":"assets/v3/animations/CRsVdKs9b-A0xNUIOMEcK1ofPTBA8NIwAJOUNSyVILk/6b1caee5-84e9-43b6-bbe4-1ae207be82eb.png","frameSize":{"x":226,"y":175},"frameCount":1,"looping":true,"frameDelay":4,"version":"ZZuj8XevLs7j462ahBecbdalLw6Qjjmn","loadedFromSource":true,"saved":true,"sourceSize":{"x":226,"y":175},"rootRelativePath":"assets/v3/animations/CRsVdKs9b-A0xNUIOMEcK1ofPTBA8NIwAJOUNSyVILk/6b1caee5-84e9-43b6-bbe4-1ae207be82eb.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player=createSprite(50,325,10,10);
var ground=createSprite(200,380,800,40);
var backGround=createSprite(200,200,400,400);
var score=0;
var bananasGroup = new Group();
var obstacleGroup = new Group();
backGround.setAnimation("background");
backGround.scale=3;
player.setAnimation("monkey");
player.scale=0.1;


           





backGround.depth=backGround.depth-10;



function draw() {
  
  background("green");
  
  backGround.velocityX=-5;
  
   ground.visible=false;
   

   
   if(keyWentDown("space")&& player.y>=159) {
    player.velocityY = -12;
  }
  player.velocityY = player.velocityY + 0.8;
   
   player.collide(ground);
   player.isTouching(ground);
   
   
   if (backGround.x < 80){
    backGround.x = backGround.width/1;
  }
  
   
   switch (score) {
case 10: player.scale=0.12;
break;
case 20: player.scale=0.14;
 break; 
case 30: player.scale=0.16; 
break;
 case 40: player.scale=0.18; 
break; 
default: break;
}
   
   
   
createEdgeSprites();


   
   
  
 food();  
 obstacles();  
  
   
    
 drawSprites();
 textSize(20);
 fill("blue");
 text("score "+score, 100, 20);
}


function food() {
 
   bananasGroup.setLifetimeEach(60);
   
   if (player.isTouching(bananasGroup)) {
  bananasGroup.destroyEach();
  score=score+2;
}
   
  if (World.frameCount % 60 === 0) {
  var banana=createSprite(200,200,10,10);

banana.setAnimation("Banana");
banana.scale=0.05;
banana.velocityX=-4;
banana.y=(randomNumber(140, 320));                                   
bananasGroup.add(banana); 
   }
}

function obstacles() {
  
 obstacleGroup.setLifetimeEach(200);
        
        if (player.isTouching(obstacleGroup)) {
          score=0;
          obstacleGroup.destroyEach();
          player.scale=0.1;
        }
if (World.frameCount % 60 === 0) {
var obstacle=createSprite(200,390,10,10);

  obstacle.setAnimation("Stone");
  obstacle.x=(randomNumber(190,400));
  obstacle.y=345;
  obstacle.velocityX=-4;
   obstacleGroup.add(obstacle);
   obstacle.scale= 0.1;

 }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
