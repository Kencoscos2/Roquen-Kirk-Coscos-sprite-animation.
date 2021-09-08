let canvas = document.getElementById('ctx')
canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.9;
let ctx = canvas.getContext("2d");


let slime = new Image();
slime.src = "sprites/spritesheet.png"


let frameCounter = 0;
let spritewidth = 34;
let spriteheight = 32;
let gameFrame = 0;
let frameStagger = 6;


function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(slime, frameCounter*spritewidth, 0, spritewidth, spriteheight, 0, 0, canvas.width*0.2, canvas.height*0.2)
    
    if (gameFrame % frameStagger == 0){
    
    frameCounter++;

    if (frameCounter > 4){
        frameCounter = 0;
    }
}


    gameFrame++;

    requestAnimationFrame(animate);


}

animate();




//class Circle {
    //constructor(x, y, radius, weight) {
       // this.radius = radius;
       // this.x = radius;
       // this.y = radius;
       // this.weight = weight;
   // }

   // update() {
      //  this.y = this.y + this.weight;

     //   if (this.y > canvas.height) {
     //       this.y = 0;
            
     //       let random = parseInt((Math.random() * canvas.width) + 1);
     //       this.x = random;
   //     }
   // }

   // draw() {
   //     ctx.beginPath();
   //     ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
   //     ctx.stroke();
   //     ctx.closePath();
   // }
//}

//function animate() {
   // ctx     .clearRect(0, 0, canvas.width, canvas.height);

    //for(let i = 0; i < group.length; i++) {
   //     group[i].update();
    //    group[i].draw();
   // }

   // requestAnimationFrame(animate);
//}

//const circle = new Circle(0, 0, 10, 5);
//const circle2 = new Circle(5, 5, 20, 10)
//const circle3 = new Circle(5, 5, 50, 15)
//let group = [circle, circle2, circle3]
//animate();