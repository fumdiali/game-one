var myGamePiece,pregPiece,runnerPiece;
var myBackground;
var speedBump;
//var redGamePiece, blueGamePiece, yellowGamePiece;

function startGame(){
  myGamePiece = new component(45,45,"biker-sprite.png",0,190,"image");
  speedBump = new component(35,36,"black",250,192);
  pregPiece = new component(45,45,"pregPiece.png",500,190,"image");
  myBackground = new component(856, 270, "road-scape.png", 0, 0, "background");
  /*
  redGamePiece = new component(75, 75, "red", 10, 10);
    yellowGamePiece = new component(75, 75, "yellow", 50, 60); 
    blueGamePiece = new component(75, 75, "blue", 10, 110);
    */
    myGameArea.start();
 }
 
 var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function(){
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext('2d');
      document.body.insertBefore(this.canvas, document.body.childNodes[0]); 
      this.interval = setInterval(updateGameArea, 20);   
    },
     clear : function(){
       this.context.clearRect(0,0,this.canvas.width,this.canvas.height);     
     }
    
   }
 
 function component(width, height, color, x, y,type) {
 	this.type = type;
 	if(type==="image" || type==="background"){
     this.image = new Image();
     this.image.src = color; 	
 	}
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    
    this.update = function() { 
    ctx = myGameArea.context;
    if(type==="image" || type==="background"){
    	ctx.drawImage(this.image,
    	  this.x,this.y,this.width,this.height);
    	if (type === "background") {
             ctx.drawImage(this.image,
             this.x + this.width, this.y, this.width, this.height);
            }  
    }else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
         }
    }
 
    this.newPos = function(){
      this.x += this.speedX;
      this.y += this.speedY;
       if (this.type === "background") {
            if (this.x === -(this.width)) {
                this.x = 0;
            }
        }    
    }
    
    
}
 

   
   //functions to move game piece
   function moveUp(){
     myGamePiece.speedY -= 1;
       
   }
   
   function moveDown(){
     myGamePiece.speedY += 1;   
   }
   
   function moveFront(){
     myGamePiece.speedX += 1;   
   }
   
   function moveBack(){
     myGamePiece.speedX -= 1; 
      
   }
   
   function moveStop(){
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;   
   }
   
function updateGameArea() {
	
    myGameArea.clear();
    myBackground.x -= 1; 
    myBackground.newPos();
    myBackground.update();
    myGamePiece.newPos();
    //myGamePiece.x += 1;
    myGamePiece.update();
    pregPiece.x -= 1;
    pregPiece.update();
    speedBump.x -= 1;
    speedBump.update();
    /*
    redGamePiece.x += 1;
    yellowGamePiece.x += 1; 
    yellowGamePiece.y += 1; 
    blueGamePiece.x += 1; 
    blueGamePiece.y -= 1;
    redGamePiece.update();
    yellowGamePiece.update(); 
    blueGamePiece.update();
    */
        
  }   
  
  