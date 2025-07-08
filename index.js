  // Create the canvas and load images
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const backgroundImage = new Image();
  backgroundImage.src = configData.DesignImagePath; // Use the data from configData
  const overlayImage = new Image();
  overlayImage.src = configData.BackgroundImagePath; // Use the data from configData;
  const opacity = 1; // Full opacity
  console.log(backgroundImage.src+'  '+overlayImage.src);
  // Function to update the canvas with the overlay
  function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background image
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Draw the overlay image with full opacity
    ctx.globalAlpha = opacity;
    ctx.drawImage(overlayImage, 0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1; // Reset the alpha to 1 (full opacity)
    const panoramaDataURL = canvasToDataURL(canvas);
console.log(panoramaDataURL);
    // Update the Pannellum viewer configuration to use the canvas image as panorama
    pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": panoramaDataURL,
        "autoLoad": true,
        "autoRotate": -2,
        "preview": panoramaDataURL // Using the same image for preview as well
    });

  }
  
function canvasToDataURL(canvas) {
    return canvas.toDataURL();
}

  // Call the updateCanvas function to initially render the images
  backgroundImage.onload = function() {
    overlayImage.onload = function() {
      updateCanvas();
    };
  };


