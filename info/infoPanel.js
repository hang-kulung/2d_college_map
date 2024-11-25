function createInfoPanel() {
    const infoPanel = document.createElement('div');
    infoPanel.id = 'infoPanel';
    infoPanel.style.position = 'absolute';
    infoPanel.style.top = '10px';
    infoPanel.style.right = '10px';
    infoPanel.style.width = '250px';
    infoPanel.style.padding = '10px';
    infoPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    infoPanel.style.border = '2px solid #4a4a4a';
    infoPanel.style.borderRadius = '5px';
    infoPanel.style.color = 'white';
    infoPanel.style.fontFamily = 'Arial, sans-serif';
    infoPanel.style.fontSize = '14px';
    infoPanel.style.display = 'none';
    document.body.appendChild(infoPanel);
    return infoPanel;
}

function updateInfoPanel(infoPanel, building) {
    if (building) {
        infoPanel.innerHTML = `
            <h3 style="margin: 0 0 10px 0; font-size: 18px;">${building.name}</h3>
            <p style="margin: 0;">${building.description}</p>
        `;
        infoPanel.style.display = 'block';
    } else {
        // Hide the panel if the building is null
        infoPanel.style.display = 'none';
    }
}


