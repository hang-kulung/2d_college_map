let level = 'main';
let lastKey = '';
const overlay = {
    opacity: 0,
}

infoPanel = createInfoPanel()

const locationDisplay = createLocationDisplay();  

levels[level].init();

let spritesInitialized = false; 

function animate() { 
    // Request the next frame
    window.requestAnimationFrame(animate)
    
    // Draw the background
    background.draw()
    
    // Draw each boundary
    boundaries.forEach(boundary => {
        boundary.draw()
    })
    
    // Draw the player
    player.draw()
    
    // Draw the foreground
    foreground.draw()

    // Initialize movement and player movement status
    let moving = true
    player.moving = false

    // Handle upward movement
    if (keys.w.pressed && lastKey == 'w') {
        player.moving = true
        player.image = player.sprites.up
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: { ...boundary, position: { x: boundary.position.x, y: boundary.position.y + speed } }
            })) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movable => { movable.position.y += speed })
    }

    // Handle leftward movement
    else if (keys.a.pressed && lastKey == 'a') {
        player.moving = true
        player.image = player.sprites.left
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: { ...boundary, position: { x: boundary.position.x + speed, y: boundary.position.y } }
            })) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movable => { movable.position.x += speed })
    }

    // Handle downward movement
    else if (keys.s.pressed && lastKey == 's') {
        player.moving = true
        player.image = player.sprites.down
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: { ...boundary, position: { x: boundary.position.x, y: boundary.position.y - speed } }
            })) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movable => { movable.position.y -= speed })
    }

    // Handle rightward movement
    else if (keys.d.pressed && lastKey == 'd') {
        player.moving = true
        player.image = player.sprites.right
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: { ...boundary, position: { x: boundary.position.x - speed, y: boundary.position.y } }
            })) {
                moving = false
                break
            }
        }
        if (moving)
            movables.forEach(movable => { movable.position.x -= speed })
    }

    // Handle level transitions
    else if (keys.q.pressed && lastKey == 'q') {
        // Transition from main level to canteen
        if (level == 'main') {
            for (let i = 0; i < canteenEntry.length; i++) {
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
        // Transition from canteen to main level
        else if (level == "canteen") {
            for (let i = 0; i < canteenExit.length; i++) {
                const canteenExit1 = canteenExit[i]
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: canteenExit1
                })) {
                    gsap.to(overlay, {
                        opacity: 1,
                        onComplete: () => {
                            level = "main"
                            levels[level].init(offset = { x: -3225, y: -820 })
                        }
                    })
                    break
                }
            }
        }
    }

    // Check for collisions
    checkCollision()

    // Update location display
    updateLocationDisplay(locationDisplay, -background.position.x, -background.position.y)
}

animate();

window.addEventListener('keydown', (e) => {
       switch (e.key) {
        case 'w': case 'a': case 's': case 'd': case 'q':
            keys[e.key].pressed = true;
            lastKey = e.key;
            break;
        case 'l':
            locationDisplay.style.display = locationDisplay.style.display === 'none' ? 'block' : 'none'
            break;
        // case 'i':
        //     updateInfoPanel(infoPanel, activeBuilding);
        //     break;
    }
});

window.addEventListener('keyup', (e) => {
    if (keys[e.key]) keys[e.key].pressed = false;
    if (e.key === 'i') {
        infoPanel.style.display = 'none';
    }
});

window.addEventListener('resize', updateUIPositions);
updateUIPositions()
