const phrases = [
    "FRONT-END DEVELOPER",
    "WEB DESIGNER",
    "SOFTWARE ENGINEER"
  ];

  let index = 0;
  let isDeleting = false;

  function animateText() {
    const phraseElement = document.getElementById("phrase");
    const cursorElement = document.getElementById("cursor");
    let currentPhrase = phrases[index];

    if (!currentPhrase) {
      index = 0;
      currentPhrase = phrases[index];
    }

    let i = isDeleting ? currentPhrase.length : 0;
    const delta = isDeleting ? -1 : 1;

    const interval = setInterval(() => {
      phraseElement.textContent = currentPhrase.substring(0, i);

      if (isDeleting) {
        cursorElement.style.visibility = "hidden";
      } else {
        cursorElement.style.visibility = "visible";
      }

      if (isDeleting && i === 0) {
        clearInterval(interval);
        isDeleting = false;
        setTimeout(() => {
          index++;
          animateText();
        }, 500);
      } else if (!isDeleting && i === currentPhrase.length) {
        clearInterval(interval);
        isDeleting = true;
        setTimeout(() => {
          animateText();
        }, 1000);
      }

      i += delta;
    }, 150);
  }

  animateText();