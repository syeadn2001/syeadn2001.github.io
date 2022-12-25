var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 700,
    autoCenter: true,
    backgroundColor: '#000000',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('forest', 'assets/forestBackground.jpeg');
    this.load.image('city', 'assets/cityBackground.jpeg');
    this.load.image('space', 'assets/spaceBackground.jpg');
    this.load.image('mario', 'assets/mario.png');
    this.load.image('yoshi', 'assets/yoshi.png');
    this.load.image('toad', 'assets/toad.png');

}

function create() {

    this.add.image(400, 300, 'space');

    //below are sprites
    var mario = this.add.sprite(100, 660, 'mario');
    var yoshi = this.add.sprite(300, 700, 'yoshi');
    var toad = this.add.sprite(600, 690, 'toad');

    mario.setScale(0.3)
    yoshi.setScale(0.3)
    toad.setScale(0.3)

    mario.setInteractive();
    yoshi.setInteractive();
    toad.setInteractive();

    this.input.setDraggable(mario);
    this.input.setDraggable(yoshi);
    this.input.setDraggable(toad);

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    function changeToSpace() {
        background.destroy()
        background = this.add.image(400, 300, 'space');
    }

    document.querySelector('#forest').addEventListener('click',
        function () {
            console.log('The button was clicked!')
        }
    );


}