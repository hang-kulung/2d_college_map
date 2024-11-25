const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const speed = 4; // Speed for character movement
const keys = {
    w: { pressed: false },
    s: { pressed: false },
    a: { pressed: false },
    d: { pressed: false },
    q: { pressed: false },
};

// // Load character images for different directions
// const playerSprites = {
//     down: './img/playerDown.png',
//     up: './img/playerUp.png',
//     left: './img/playerLeft.png',
//     right: './img/playerRight.png',
// };
