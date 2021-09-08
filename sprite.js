let canvas = document.getElementById('ctx')
canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.9;
let ctx = canvas.getContext("2d");



let slime = new Image();
slime.src = "sprites/Slime/spritesheet.png"


function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(slime, canvas.width/2, canvas.height/2, 500, 500)

    requestAnimationFrame(animate);


}

animate();