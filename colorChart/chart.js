//Array of objects
var fruit = [
    { name: "Strawberry", quantity: 15, color: "red" },
    { name: "Peach", quantity: 10, color: "orange" },
    { name: "Banana", quantity: 25, color: "yellow" },
    { name: "Pear", quantity: 10, color: "green" },
    { name: "Grape", quantity: 20, color: "purple" }
];

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 100, 900, 600);

var chart = function () {

    var x = 0;
    for (var i = 0; i < fruit.length; i++) {

        ctx.fillStyle = fruit[i].color;
        ctx.fillRect(x, canvas.height-20 * fruit[i].quantity, 120, 600);

        ctx.fillStyle = "white";
        ctx.font = "bold 20px script center";

        ctx.textAlign = "center";
        ctx.fillText(fruit[i].name, x + 55, 650);
        ctx.fillText(fruit[i].quantity, x + 55, 630);
        ctx.stroke();
        x = x + 150;
    }
};

chart();