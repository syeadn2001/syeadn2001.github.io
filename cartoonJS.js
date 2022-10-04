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

Cartoon.draw = function () {
    //total dimensions 700x400


    //sky
    this.ctx.fillStyle = "#99ccff";
    this.ctx.fillRect(0, 0, 700, 250);

    //ground
    this.ctx.fillStyle = "#00cc66";
    this.ctx.fillRect(0, 250, 700, 150);




}


Cartoon.mainLoop = function () {
    Cartoon.draw();
};

/*
Script for button
*/

//selecting HTML button with JS through DOM
var backButton = document.getElementById("backButton")
backButton.addEventListener("click", () => {
    console.log("Button clicked")
})




