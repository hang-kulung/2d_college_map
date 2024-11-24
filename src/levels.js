let collisionsMap
let canteenEntryMap
let boundaries
let f_block_entry_map
let a_block_entry_map
let rac_entry_map
let b_block_entry_map
let c_block_entry_map
let d_block_entry_map
let e_block_entry_map
let bhatta_park_entry_map
let library_entry_map
let basketball_entry_map

let canteenEntry
let f_block_entry
let a_block_entry
let bhatta_park_entry
let rac_entry
let b_block_entry
let c_block_entry
let d_block_entry
let e_block_entry
let library_entry
let basketball_entry

let canteenExitMap
let canteenExit

let image
let foregroundimage
let background
let foreground
let movable

let offset

let levels = {
    "main": {
   init: (offset = { x: -1950, y: -2250 }) => {
        // Create a 2D array of collisions from the 1D array of collisions
        collisionsMap = []
        for (let i = 0; i < collisions.length; i += 70) {
            collisionsMap.push(collisions.slice(i, i + 70))
        }
        // Create a 2D array of canteen entry points from the 1D array of canteen entry points
        canteenEntryMap = []
        for (let i = 0; i < canteen_entry.length; i += 70) {
            canteenEntryMap.push(canteen_entry.slice(i, i + 70))
            }

            f_block_entry_map = []
            for (let i = 0; i < f_block.length; i += 70) {
                f_block_entry_map.push(f_block.slice(i, i + 70))
            }

            a_block_entry_map = []
            for (let i = 0; i < a_block.length; i += 70) {
                a_block_entry_map.push(a_block.slice(i, i + 70))
            }

            bhatta_park_entry_map = []
            for (let i = 0; i < bhatta_park.length; i += 70) {
                bhatta_park_entry_map.push(bhatta_park.slice(i, i + 70))
            }

            rac_entry_map = []
            for (let i = 0; i < rac.length; i += 70) {
                rac_entry_map.push(rac.slice(i, i + 70))
            }

            b_block_entry_map = []
            for (let i = 0; i < b_block.length; i += 70) {
                b_block_entry_map.push(b_block.slice(i, i + 70))
            }

            c_block_entry_map = []
            for (let i = 0; i < c_block.length; i += 70) {
                c_block_entry_map.push(c_block.slice(i, i + 70))
            }

            d_block_entry_map = []
            for (let i = 0; i < d_block.length; i += 70) {
                d_block_entry_map.push(d_block.slice(i, i + 70))
            }

            e_block_entry_map = []
            for (let i = 0; i < e_block.length; i += 70) {
                e_block_entry_map.push(e_block.slice(i, i + 70))
            }

            library_entry_map = []
            for (let i = 0; i < library.length; i += 70) {
                library_entry_map.push(library.slice(i, i + 70))
            }

            basketball_entry_map = []
            for (let i = 0; i < basketball.length; i += 70) {
                basketball_entry_map.push(basketball.slice(i, i + 70))
            }


        // Create an array of boundaries
        boundaries = []

        // Set the offset
        offset = {
            x: offset.x,
            y: offset.y
        }
 
        // Iterate over the collisions map and create a boundary for each collision
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

        // Iterate over the canteen entry map and create a boundary for each canteen entry point
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
            
        f_block_entry = []
        f_block_entry_map.forEach((row, i) => {
            row.forEach((symbol, j) => {
                if (symbol > 0)
                    f_block_entry.push(
                        new Boundary({
                            position: {
                                x: j * Boundary.width + offset.x,
                                y: i * Boundary.height + offset.y
                            }
                        })
                    )
            })
        })
            
        a_block_entry = []
        a_block_entry_map.forEach((row, i) => {
            row.forEach((symbol, j) => {
                if (symbol > 0)
                    a_block_entry.push(
                        new Boundary({
                            position: {
                                x: j * Boundary.width + offset.x,
                                y: i * Boundary.height + offset.y
                            }
                        })
                    )
            })
        })
            
            bhatta_park_entry = []
            bhatta_park_entry_map.forEach((row, i) => {
                row.forEach((symbol, j) => {
                    if (symbol > 0)
                        bhatta_park_entry.push(
                            new Boundary({
                                position: {
                                    x: j * Boundary.width + offset.x,
                                    y: i * Boundary.height + offset.y
                                }
                            })
                        )
                })
            })

            rac_entry = []
            rac_entry_map.forEach((row, i) => {
                row.forEach((symbol, j) => {
                    if (symbol > 0)
                        rac_entry.push(
                            new Boundary({
                                position: {
                                    x: j * Boundary.width + offset.x,
                                    y: i * Boundary.height + offset.y
                                }
                            })
                        )
                })
            })
            
            b_block_entry = []
            b_block_entry_map.forEach((row, i) => {
                row.forEach((symbol, j) => {
                    if (symbol > 0)
                        b_block_entry.push(
                            new Boundary({
                                position: {
                                    x: j * Boundary.width + offset.x,
                                    y: i * Boundary.height + offset.y
                                }
                            })
                        )
                })
            })
            
            c_block_entry = []
            c_block_entry_map.forEach((row, i) => {
                row.forEach((symbol, j) => {
                    if (symbol > 0)
                        c_block_entry.push(
                            new Boundary({
                                position: {
                                    x: j * Boundary.width + offset.x,
                                    y: i * Boundary.height + offset.y
                                }
                            })
                        )
                })
            })
            
            d_block_entry = []
            d_block_entry_map.forEach((row, i) => {
                row.forEach((symbol, j) => {
                    if (symbol > 0)
                        d_block_entry.push(
                            new Boundary({
                                position: {
                                    x: j * Boundary.width + offset.x,
                                    y: i * Boundary.height + offset.y
                                }
                            })
                        )
                })
            })
            
            e_block_entry = []
            e_block_entry_map.forEach((row, i) => {
                row.forEach((symbol, j) => {
                    if (symbol > 0)
                        e_block_entry.push(
                            new Boundary({
                                position: {
                                    x: j * Boundary.width + offset.x,
                                    y: i * Boundary.height + offset.y
                                }
                            })
                        )
                })
            })    
            
            library_entry = []
            library_entry_map.forEach((row, i) => {
                row.forEach((symbol, j) => {
                    if (symbol > 0)
                        library_entry.push(
                            new Boundary({
                                position: {
                                    x: j * Boundary.width + offset.x,
                                    y: i * Boundary.height + offset.y
                                }
                            })
                        )
                })
            })

            basketball_entry = []
            basketball_entry_map.forEach((row, i) => {
                row.forEach((symbol, j) => {
                    if (symbol > 0)
                        basketball_entry.push(
                            new Boundary({
                                position: {
                                    x: j * Boundary.width + offset.x,
                                    y: i * Boundary.height + offset.y
                                }
                            })
                        )
                })
            })
            
        // Load the map image
        image = new Image()  //map image
        image.src = './img/col_map.png'

        // Load the foreground image
        foregroundimage = new Image()  //foregorund image
        foregroundimage.src = './img/foreground.png'

            
        // Set up the background object
        background = new Sprite({
            position: {
                x: offset.x,
                y: offset.y
            },
            image: image
        })

        // Set up the foreground object
        foreground = new Sprite({
            position: {
                x: offset.x,
                y: offset.y
            },
            image: foregroundimage
        })
            

        // Set up the movable objects
        movables = [background, ...boundaries, foreground, ...canteenEntry, ...f_block_entry, ...a_block_entry, ...bhatta_park_entry, ...rac_entry, ...b_block_entry, ...c_block_entry, ...d_block_entry, ...e_block_entry, ...library_entry, ...basketball_entry]
    },
},

"canteen": {
    init: (offset = { x: -150, y: -1050 }) => {
        // Initialize the collision map
        collisionsMap = []
        for (let i = 0; i < canteenCollisions.length; i += 26) {
            collisionsMap.push(canteenCollisions.slice(i, i + 26))
        }

        // Initialize the exit map
        canteenExitMap = []
        for (let i = 0; i < canteen_exit.length; i += 26) {
            canteenExitMap.push(canteen_exit.slice(i, i + 26))
        }

        // Set the offset
        offset = {
            x: offset.x,
            y: offset.y
        }

        // Create the exit boundaries
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

        // Create the boundaries
        boundaries = []

        // Iterate over the collision map and create boundaries
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
        });

        // Load the map image
        image = new Image()
        image.src = './img/canteen.png'

        // Load the foreground image
        foregroundimage = new Image()
        foregroundimage.src = './img/Empty.png'

        // Set up the background object
        background = new Sprite({
            position: {
                x: offset.x,
                y: offset.y
            },
            image: image
        })

        // Set up the foreground object
        foreground = new Sprite({
            position: {
                x: offset.x,
                y: offset.y
            },
            image: foregroundimage
        })

        // Set up the movable objects
        movables = [background, ...boundaries, foreground, ...canteenExit]
    }
}
};
