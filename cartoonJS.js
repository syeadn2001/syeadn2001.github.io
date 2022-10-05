"use strict"

var Cartoon = {
    canvas: undefined,
    ctx: undefined,
}

Cartoon.start = function () {
    Cartoon.canvas = document.getElementById('myCanvas')
    //debugging if obtained the Canvas element
    if (Cartoon.canvas) {
        console.log("worked")
    }
    Cartoon.ctx = Cartoon.canvas.getContext('2d')
    //Debugging to check if obtained the context of Canvas
    if (Cartoon.ctx !== undefined) {
        console.log("worked2")
    }
    Cartoon.mainLoop();
    // this.canvasContext.beginPath()
    // this.canvasContext.moveTo(0, 0)
    // this.canvasContext.lineTo(700, 480);
    // this.canvasContext.stroke()
}
document.addEventListener('DOMContentLoaded', Cartoon.start)

Cartoon.drawBackground = function () {
    //total dimensions 700x400

    //sky (300 px in y)
    //console.log(this.ctx.width) WHY DOESNT IT WORK???
    this.ctx.fillStyle = "#99ccff";
    this.ctx.fillRect(0, 0, 900, 300);

    //ground (300-500 in y)
    this.ctx.fillStyle = "#00cc66";
    this.ctx.fillRect(0, 300, 900, 200);

}

Cartoon.drawTitle = function () {
    //Creating distinct box for text
    this.ctx.fillStyle = "#000000";
    this.ctx.strokeRect(0, 500, 900, 100)
    //code for text
    this.ctx.font = '48px serif';
    this.ctx.textAlign = "center";
    this.ctx.fillText("Barn!", 450, 560);
}

Cartoon.drawHouse = function () {
    //dimensions (900x500)

    //base of the house
    this.ctx.fillStyle = "brown"
    var rect = this.ctx.fillRect(550, 250, 275, 200)


    //roof of house
    this.ctx.fillStyle = "black"
    this.ctx.beginPath();
    this.ctx.moveTo(500, 250)
    this.ctx.lineTo(550, 190);
    this.ctx.lineTo(825, 190)
    this.ctx.lineTo(875, 250);
    this.ctx.fill();
}

Cartoon.drawSun = function () {
    this.ctx.fillStyle = "yellow"
    this.ctx.beginPath()
    this.ctx.arc(100, 100, 75, 0, Math.PI * 2, true)
    this.ctx.fill();
    this.ctx.stroke()
    this.ctx.closePath()
    //this.ctx.align = "center";

    // this.ctx.beginPath()
    // this.ctx.moveTo(0, 0)
    // this.ctx.lineTo(200, 200)
    // this.ctx.stroke()

    //Testing sun rays
    //MARK: Tried making sun rays, failed
    // this.ctx.beginPath()
    // this.ctx.arc(300, 300, 75, (3 / 2) * Math.PI, 1.75 * Math.PI, false)
    // this.ctx.arcTo((300 * Math.cos(2 * Math.PI)), (300 * Math.sin(2 * Math.PI)), 300 * Math.cos(.5 * Math.PI), 300 * Math.sin(.5 * Math.PI), 100)
    // this.ctx.stroke()

    //this.ctx.stroke()

}

/*
@param: 
    x = x-coordinate for your wheel
    y = y-coordinate for your wheel

Creates a wheel
*/
function wheelMaker(x, y) {

    Cartoon.ctx.strokeStyle = 'brown';
    Cartoon.ctx.fillStyle = "black"

    var angle1 = 0, angle2 = .20

    while (angle2 < 2) {
        Cartoon.ctx.beginPath()
        Cartoon.ctx.arc(x, y, 30, angle1 * Math.PI, angle2 * Math.PI, false)
        Cartoon.ctx.fill()
        Cartoon.ctx.lineTo(x, y)
        Cartoon.ctx.stroke()
        angle1 += .20;
        angle2 += .20;
    }

}

Cartoon.carMaker = function () {
    wheelMaker(150, 400)
    wheelMaker(300, 400)
    this.ctx.fillStyle = "#996600"
    this.ctx.strokeStyle = "black"
    this.ctx.fillRect(86, 270, 275, 100)
    this.ctx.strokeRect(86, 270, 275, 100)

}




Cartoon.mainLoop = function () {
    Cartoon.drawBackground();
    Cartoon.drawTitle();
    Cartoon.drawHouse();
    Cartoon.drawSun();
    Cartoon.carMaker();
};

/*
Script for button
*/

//selecting HTML button with JS through DOM
//WHY DOESNT THIS WORK
// var backButton = document.getElementById("backButton")
// backButton.onclick(() => {
//     console.log("Hello")
// }
// )



