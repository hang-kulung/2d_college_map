function checkCollision() {
    let building = null; 

    if (!building) {
        for (let i = 0; i < canteenEntry.length; i++) {
            const canteenEntry1 = canteenEntry[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: canteenEntry1
            })) {
                building = buildingInfo.canteen; // Update info if a collision is detected
                break; // Stop checking once a collision is found
            }
        }
    } 

    // Check for collision with A block entries only if no collision with canteen or F block
    if (!building) {
        for (let i = 0; i < a_block_entry.length; i++) {
            const a_block_entry1 = a_block_entry[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: a_block_entry1
            })) {
                building = buildingInfo.a_block; // Update info if a collision is detected
                break; // Stop checking once a collision is found
            }
        }
    }

      // Check for collision with ECAST Block entries only if no collision with canteen, F block, A block, or Bhatta Park
    if (!building) {
        for (let i = 0; i < b_block_entry.length; i++) {
            const b_block_entry1 = b_block_entry[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: b_block_entry1
            })) {
                building = buildingInfo.b_block; // Update info if a collision is detected
                break; // Stop checking once a collision is found
            }
        }
    }

        // check for collision with c block entries only if no collision with canteen, F block, A block, Bhatta Park, ECAST Block, RAC, or Library
    if (!building) {
        for (let i = 0; i < c_block_entry.length; i++) {
            const c_block_entry1 = c_block_entry[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: c_block_entry1
            })) {
                building = buildingInfo.c_block; // Update info if a collision is detected
                break; // Stop checking once a collision is found
            }
        }
    }

        if (!building) {
        for (let i = 0; i < d_block_entry.length; i++) {
            const d_block_entry1 = d_block_entry[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: d_block_entry1
            })) {
                building = buildingInfo.d_block; // Update info if a collision is detected
                break; // Stop checking once a collision is found
            }
        }
    }

        if (!building) {
        for (let i = 0; i < e_block_entry.length; i++) {
            const e_block_entry1 = e_block_entry[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: e_block_entry1
            })) {
                building = buildingInfo.e_block; // Update info if a collision is detected
                break; // Stop checking once a collision is found
            }
        }
    }
    

       // Check for collision with F block entries only if no collision with canteen
    if (!building) {
        for (let i = 0; i < f_block_entry.length; i++) {
            const f_block_entry1 = f_block_entry[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: f_block_entry1
            })) {
                building = buildingInfo.f_block; // Update info if a collision is detected
                break; // Stop checking once a collision is found
            }
        }
    }

    // Check for collision with Bhatta Park entries only if no collision with canteen, F block, or A block
    if (!building) {
        for (let i = 0; i < bhatta_park_entry.length; i++) {
            const bhatta_park_entry1 = bhatta_park_entry[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: bhatta_park_entry1
            })) {
                building = buildingInfo.bhatta_park; // Update info if a collision is detected
                break; // Stop checking once a collision is found
            }
        }
    }

    // Check for collision with RAC entries only if no collision with canteen, F block, A block, Bhatta Park, or ECAST Block
    if (!building) {
        for (let i = 0; i < rac_entry.length; i++) {
            const rac_entry1 = rac_entry[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: rac_entry1
            })) {
                building = buildingInfo.rac; // Update info if a collision is detected
                break; // Stop checking once a collision is found
            }
        }
    }

    // Check for collision with Library entries only if no collision with canteen, F block, A block, Bhatta Park, ECAST Block, or RAC
    if (!building) {
        for (let i = 0; i < library_entry.length; i++) {
            const library_entry1 = library_entry[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: library_entry1
            })) {
                building = buildingInfo.library; // Update info if a collision is detected
                break; // Stop checking once a collision is found
            }
        }
    }

    // check for collision with basketball court entries only if no collision with canteen, F block, A block, Bhatta Park, ECAST Block, RAC, Library, or C Block
    if (!building) {
        for (let i = 0; i < basketball_entry.length; i++) {
            const basketball_entry1 = basketball_entry[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: basketball_entry1
            })) {
                building = buildingInfo.basketball; // Update info if a collision is detected
                break; // Stop checking once a collision is found
            }
        }
    }

    // Update the info panel based on the final collision result
    updateInfoPanel(infoPanel, building);
}
