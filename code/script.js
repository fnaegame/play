const freddy = document.getElementById('freddy');
const characters = document.querySelectorAll('.character');

function moveFreddyWithKeys(e) {
  const speed = 10;
  let newX = parseInt(freddy.style.left) || 0;
  let newY = parseInt(freddy.style.top) || 0;

  switch (e.key) {
    case 'ArrowUp':
      newY -= speed;
      break;
    case 'ArrowDown':
      newY += speed;
      break;
    case 'ArrowLeft':
      newX -= speed;
      break;
    case 'ArrowRight':
      newX += speed;
      break;
  }

  freddy.style.left = newX + 'px';
  freddy.style.top = newY + 'px';

  characters.forEach((character) => {
    if (isColliding(freddy, character)) {
      // Handle collision (e.g., game over logic)
      console.log('Game Over!');
    }
  });
}

function isColliding(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  return (
    rect1.left < rect2.right &&
    rect1.right > rect2.left &&
    rect1.top < rect2.bottom &&
    rect1.bottom > rect2.top
  );
}

document.addEventListener('keydown', moveFreddyWithKeys);
