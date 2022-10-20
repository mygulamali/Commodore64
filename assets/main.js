const ready = fn => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

const resize = () => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const body = document.querySelector('body');

  if (windowHeight < windowWidth) {
    // landscape

    body.style.height = (windowHeight * 0.8) + 'px';
    body.style.width = (windowHeight * 1.28) + 'px';
    body.style.fontSize = (windowHeight * 0.032) + 'px';
  } else {
    // portrait

    body.style.width = (windowWidth * 0.8) + 'px';
    body.style.height = (windowWidth * 0.5) + 'px';
    body.style.fontSize = (windowWidth * 0.02) + 'px';
  }
};

ready(resize);
