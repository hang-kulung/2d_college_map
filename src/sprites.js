//character images for different directions
const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'


//player object for the character
const player = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,  //positioning character in the middle of the screen
        y: canvas.height / 2 - 68 / 2,
    },
    image: playerDownImage,
    frames: {
        max: 4      //4 character frames in playerDown image
    },
    sprites: {      //for animation in different direction
        up:  playerUpImage, 
        left:  playerLeftImage,
        right:  playerRightImage,
        down:  playerDownImage
    }
})