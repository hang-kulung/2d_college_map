function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y
    );
}

function updateUIPositions() {
    const canvasRect = canvas.getBoundingClientRect();
    
    infoPanel.style.top = `${canvasRect.top + 10}px`;
    infoPanel.style.right = `${window.innerWidth - canvasRect.right + 10}px`;
    
    locationDisplay.style.top = `${canvasRect.top + 10}px`;
    locationDisplay.style.left = `${canvasRect.left + 10}px`;
}
