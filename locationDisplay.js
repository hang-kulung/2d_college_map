function createLocationDisplay() {
    const locationDisplay = document.createElement('div');
    locationDisplay.id = 'locationDisplay';
    locationDisplay.style.position = 'absolute';
    locationDisplay.style.top = '10px';
    locationDisplay.style.left = '10px';
    locationDisplay.style.padding = '5px 10px';
    locationDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    locationDisplay.style.color = 'white';
    locationDisplay.style.fontFamily = 'Arial, sans-serif';
    locationDisplay.style.fontSize = '14px';
    locationDisplay.style.borderRadius = '5px';
    document.body.appendChild(locationDisplay);
    return locationDisplay;
}

function updateLocationDisplay(locationDisplay, x, y) {
    locationDisplay.textContent = `Location: (${Math.round(x)}, ${Math.round(y)})`;
}

export { createLocationDisplay, updateLocationDisplay };