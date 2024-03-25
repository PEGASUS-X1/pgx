function preventTranslate() {
  if (typeof google === 'object' && google.translate && google.translate.getSupportedLanguages) {
    // Remove the Translate Bar container.
    var translateBarContainer = document.querySelector('#goog-gt-tt');
    if (translateBarContainer) {
      translateBarContainer.style.display = 'none';
    }

    // Disable translate functionality.
    google.translate.disableTranslate();
  }
}

window.onload = preventTranslate;