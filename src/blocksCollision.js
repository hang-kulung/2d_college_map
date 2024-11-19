function checkCollision() {
    for (let i = 0; i < canteenEntry.length; i++) {
        const canteenEntry1 = canteenEntry[i]
        if (rectangularCollision({
            rectangle1: player,
            rectangle2: canteenEntry1
        })) {
            updateInfoPanel(infoPanel, buildingInfo.canteen);
        } else {
            updateInfoPanel(infoPanel, null);
        }
    }

}


function checkBuildingProximity() {
    activeBuilding = null;
    let closestDistance = Infinity;

    // Iterate over each building's information
    for (const building of Object.values(buildingInfo)) {
        // Calculate the distance from the player to the building
        const dx = -background.position.x - building.position.x;
        const dy = -background.position.y - building.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Check if the building is within interaction distance and is the closest
        if (distance < interactionDistance && distance < closestDistance) {
            activeBuilding = building;
            closestDistance = distance;
        }
    }
}