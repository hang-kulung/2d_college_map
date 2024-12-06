function checkEntry(){
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
        for (let i = 0; i < e_block_entry.length; i++) {
            const e_block_entry1 = e_block_entry[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: e_block_entry1
            })) {
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level = "eblock1"
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
    else if (level == "eblock1") {
        for (let i = 0; i < e1LvlUpEntry.length; i++) {
            const e1LvlUpEntry1= e1LvlUpEntry[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: e1LvlUpEntry1
            })) {
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level = "eblock2"
                        levels[level].init(offset = { x: -1350, y: -1150 })
                    }
                })
                break
            }
        }
        for (let i = 0; i < e1LvlDownEntry.length; i++) {
            const e1LvlDownEntry1= e1LvlDownEntry[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: e1LvlDownEntry1
            })) {
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level = "eblock0"
                        levels[level].init(offset = { x: -1450, y: -1200 })
                    }
                })
                break
            }
        }
        for (let i = 0; i < e1Exit.length; i++) {
            const e1Exit1 = e1Exit[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: e1Exit1
            })) {
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level = "main"
                        levels[level].init(offset = { x: -1869, y: -1088 })
                    }
                })
                break
            }
        }
        
    }
    else if (level == "eblock2") {
        for (let i = 0; i < e2LvlDownEntry.length; i++) {
            const e2LvlDownEntry1 = e2LvlDownEntry[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: e2LvlDownEntry1
            })) {
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level = "eblock1"
                        levels[level].init(offset = { x: -1450, y: -1170 })
                    }
                })
                break
            }
        }
        for (let i = 0; i < e2LvlUpEntry.length; i++) {
            const e2LvlUpEntry1 = e2LvlUpEntry[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: e2LvlUpEntry1
            })) {
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level = "eblock3"
                        levels[level].init(offset = { x: -1350, y: -1150 })
                    }
                })
                break
            }
        }
    }
    else if (level == "eblock3") {
        for (let i = 0; i < e3LvlDownEntry.length; i++) {
            const e3LvlDownEntry1 = e3LvlDownEntry[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: e3LvlDownEntry1
            })) {
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level = "eblock2"
                        levels[level].init(offset = { x: -1450, y: -1170 })
                    }
                })
                break
            }
        }
        for (let i = 0; i < e3LvlUpEntry.length; i++) {
            const e3LvlUpEntry1 = e3LvlUpEntry[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: e3LvlUpEntry1
            })) {
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level = "eblock4"
                        levels[level].init(offset = { x: -1350, y: -1150 })
                    }
                })
                break
            }
        }
    }
    else if (level == "eblock4") {
        for (let i = 0; i < e4LvlDownEntry.length; i++) {
            const e4LvlDownEntry1 = e4LvlDownEntry[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: e4LvlDownEntry1
            })) {
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level = "eblock3"
                        levels[level].init(offset = { x: -1450, y: -1170 })
                    }
                })
                break
            }
        }
    }
    else if (level == "eblock0") {
        for (let i = 0; i < e0LvlUpEntry.length; i++) {
            const e0LvlUpEntry1 = e0LvlUpEntry[i]
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: e0LvlUpEntry1
            })) {
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level = "eblock1"
                        levels[level].init(offset = { x: -1350, y: -1250 })
                    }
                })
                break
            }
        }
    }
    
}