// Function to stop other videos
    function pauseOtherDriveVideos(currentIframe) {
      const iframes = document.querySelectorAll('.drive-video');
      iframes.forEach(iframe => {
        if (iframe !== currentIframe) {
          // Reload the iframe to stop playback
          iframe.src = iframe.src;
        }
      });
    }

    // Add event listeners for interaction
    const driveVideos = document.querySelectorAll('.drive-video');
    driveVideos.forEach(iframe => {
      iframe.addEventListener('click', () => {
        pauseOtherDriveVideos(iframe);
      });
    });