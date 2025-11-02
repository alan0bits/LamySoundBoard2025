  // Define your audio file sources here
  const audioSources = {
    audio1: 'audio/adios.mp3',
    audio2: 'audio/Ahoy.mp3',
    audio3: 'audio/banana.mp3'
  };

  // Keep track of the current audio being played
  let currentAudio = null;

  // Add event listeners to all buttons with data-audio attributes
  document.querySelectorAll('button[data-audio]').forEach(button => {
    button.addEventListener('click', () => {
      const key = button.dataset.audio;
      const src = audioSources[key];

      if (!src) {
        console.warn(`No audio source found for "${key}"`);
        return;
      }

      // Stop any currently playing audio
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // reset playback
      }

      // Create and play the new audio
      currentAudio = new Audio(src);
      currentAudio.play();
    });
  });