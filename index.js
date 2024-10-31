
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576


let collisionsMap
let canteenEntryMap
let boundaries
let canteenEntry

let canteenExitMap
let canteenExit

let image
let foregroundimage
let background
let foreground
let movable

let offset

let level = "main"
let levels = {
    "main":{
        init: (offset= {x: -1950, y: -2250}) => {
            collisionsMap = []  
            for (let i = 0; i < collisions.length; i += 70) {
                collisionsMap.push(collisions.slice(i, i + 70))
            }
            canteenEntryMap = []  
        for (let i = 0; i < canteen_entry.length; i += 70) {
                canteenEntryMap.push(canteen_entry.slice(i, i + 70))
            }

        boundaries = []

        offset = {
            x: offset.x,
            y: offset.y
        }
 
        collisionsMap.forEach((row, i) => {
            row.forEach((symbol, j) => {
                if (symbol > 0)
                    boundaries.push(
                        new Boundary({
                            position: {
                                x: j * Boundary.width + offset.x,
                                y: i * Boundary.height + offset.y
                            }
                        })
                    )
            })
        })

        canteenEntry = []
        canteenEntryMap.forEach((row, i) => {
            row.forEach((symbol, j) => {
                if (symbol > 0)
                    canteenEntry.push(
                        new Boundary({
                            position: {
                                x: j * Boundary.width + offset.x,
                                y: i * Boundary.height + offset.y
                            }
                        })
                    )
            })
        })
        
        image = new Image()  //map image
        image.src = './img/col_map.png'

        foregroundimage = new Image()  //foregorund image
        foregroundimage.src = './img/foreground.png'

        
        //setting a background object
        background = new Sprite({
            position: {
                x: offset.x,
                y: offset.y
            },
            image: image
        })

        //setting a foreground object
        foreground = new Sprite({
            position: {
                x: offset.x,
                y: offset.y
            },
            image: foregroundimage
        })
        

        //objects that moves with the character
        movables = [background, ...boundaries, foreground, ...canteenEntry]
    }
    },
    "canteen":{
        init: (offset={x:-150, y:-1050}) => {
            collisionsMap = []  
            for (let i = 0; i < canteenCollisions.length; i += 26) {
                collisionsMap.push(canteenCollisions.slice(i, i + 26))
            }
            canteenExitMap = []  
            for (let i = 0; i < canteen_exit.length; i += 26) {
                canteenExitMap.push(canteen_exit.slice(i, i + 26))
            }

            offset = {
                x: offset.x,
                y: offset.y
            }

            canteenExit = []
            canteenExitMap.forEach((row, i) => {
                row.forEach((symbol, j) => {
                    if (symbol > 0)
                        canteenExit.push(
                            new Boundary({
                                position: {
                                    x: j * Boundary.width + offset.x,
                                    y: i * Boundary.height + offset.y
                                }
                            })
                        )
                })
            })

            boundaries = []

            

            collisionsMap.forEach((row, i) => {
                row.forEach((symbol, j) => {
                    if (symbol > 0)
                        boundaries.push(
                            new Boundary({
                                position: {
                                    x: j * Boundary.width + offset.x,
                                    y: i * Boundary.height + offset.y
                                }
                            })
                        )
                })
            })

       
            image = new Image()  
            image.src = './img/canteen.png'

            foregroundimage = new Image()  
            foregroundimage.src = './img/Empty.png'

            background = new Sprite({
                position: {
                    x: offset.x,
                    y: offset.y
                },
                image: image
            })
            foreground = new Sprite({
                position: {
                    x: offset.x,
                    y: offset.y
                },
                image: foregroundimage
            })
            
            movables = [background, ...boundaries, foreground, ...canteenExit]
    }
}
}



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


//default key pressed status
const keys = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    q: {
        pressed: false
    }
}


let speed = 4       //speed for character movement

//to check if character is colliding with boundary
function rectangularCollision({rectangle1, rectangle2}) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    )
}

const overlay = {
    opacity: 0,
}

infoPanel = createInfoPanel()
let activeBuilding = null;
const interactionDistance = 300; // I think 200-300 is a good value

function checkBuildingProximity() {
    activeBuilding = null;
    let closestDistance = Infinity;
    
    for (const building of Object.values(buildingInfo)) {
        const dx = -background.position.x - building.position.x;
        const dy = -background.position.y - building.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < interactionDistance && distance < closestDistance) {
            activeBuilding = building;
            closestDistance = distance;
        }
    }
}

function showBuildingInfo() {
    if (activeBuilding) {
        buildingInfoDisplay.innerHTML = `
            <h3>${activeBuilding.name}</h3>
            <p>${activeBuilding.description}</p>
        `;
        buildingInfoDisplay.style.display = 'block';
    } else {
        buildingInfoDisplay.style.display = 'none';
    }
}

const locationDisplay = createLocationDisplay();  

function animate() {
    window.requestAnimationFrame(animate)
    
    background.draw()
    boundaries.forEach(boundary =>{
        boundary.draw()
    })
    
    player.draw()
    foreground.draw()

    // c.save()
    // c.globalAlpha = overlay.opacity
    // c.fillStyle = "black"
    // c.fillRect(0, 0, canvas.width, canvas.height)
    // c.restore()

   let moving  = true
   player.moving = false
    if (keys.w.pressed && lastKey == 'w') {
        player.moving = true
        player.image = player.sprites.up            //playerUpImage load up
        for(let i =0; i < boundaries.length; i++){  //checking for collision
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position:{
                    x:boundary.position.x,
                    y:boundary.position.y + speed 
                }}
            })) {
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach(movable => { movable.position.y += speed }) //moves moveable objects creating illusion that character is moving
    }

    else if (keys.a.pressed && lastKey == 'a') {
        player.moving = true
        player.image = player.sprites.left
        for(let i =0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position:{
                    x:boundary.position.x + speed,
                    y:boundary.position.y 
                }}
            })) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movable => { movable.position.x += speed })
    }
    else if (keys.s.pressed && lastKey == 's') {
        player.moving = true
        player.image = player.sprites.down
        for(let i =0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position:{
                    x:boundary.position.x,
                    y:boundary.position.y - speed
                }}
            })) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movable => { movable.position.y -= speed })
    }

    else if (keys.d.pressed && lastKey == 'd') {
        player.moving = true
        player.image = player.sprites.right
        for(let i =0; i < boundaries.length; i++){
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: {...boundary, position:{
                    x:boundary.position.x - speed,
                    y:boundary.position.y 
                }}
            })) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movable => { movable.position.x -= speed })
    }
    else if (keys.q.pressed && lastKey== 'q'){
        if (level == 'main'){
            for(let i =0; i < canteenEntry.length; i++){  //checking for collision
                const canteenEntry1 = canteenEntry[i]
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: canteenEntry1
                })) {
                    gsap.to(overlay, {
                        opacity: 1,
                        onComplete: () => {
                            level = "canteen"
                            levels[level].init()
                        }
                    })
                    break
                }
            }
        } 
        else if(level == "canteen"){
            for(let i =0; i < canteenExit.length; i++){  //checking for collision
                const canteenExit1 = canteenExit[i]
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: canteenExit1
                })) {
                    gsap.to(overlay, {
                        opacity: 1,
                        onComplete: () => {
                            level = "main"
                            levels[level].init(offset={x:-3225, y:-820})
                        }
                    })
                    break
                }
            }
        }
    }
    checkBuildingProximity();
    updateLocationDisplay(locationDisplay, -background.position.x, -background.position.y);

}


levels[level].init()
animate()


let lastKey = ''

//when key is pressed, status in keys object is set to true
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break

        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break

        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break

        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
        case 'q':
            keys.q.pressed = true
            lastKey = 'q'
            break
        case 'l':
            locationDisplay.style.display = locationDisplay.style.display === 'none' ? 'block' : 'none'
            break
    }
    if (e.key === 'i') {
        updateInfoPanel(infoPanel, activeBuilding);
    }
})


//when wasd keyip, status in keys object is set to false
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break

        case 's':
            keys.s.pressed = false
            break

        case 'a':
            keys.a.pressed = false
            break

        case 'd':
            keys.d.pressed = false
            break
        case 'q':
            keys.q.pressed = false
            break
    }
    if (e.key === 'i') {
        infoPanel.style.display = 'none';
    }
})

// Ensure the info panel and location display stay within the canvas boundary
function updateUIPositions() {
    const canvasRect = canvas.getBoundingClientRect();
    
    infoPanel.style.top = `${canvasRect.top + 10}px`;
    infoPanel.style.right = `${window.innerWidth - canvasRect.right + 10}px`;
    
    locationDisplay.style.top = `${canvasRect.top + 10}px`;
    locationDisplay.style.left = `${canvasRect.left + 10}px`;
}

window.addEventListener('resize', updateUIPositions);
updateUIPositions();