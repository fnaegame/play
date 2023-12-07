const characters = document.querySelectorAll('.character');

function moveCharacterWithKeys(e, character) {
  const speed = 10;
  let newX = parseInt(character.style.left) || 0;
  let newY = parseInt(character.style.top) || 0;

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

  character.style.left = newX + 'px';
  character.style.top = newY + 'px';

  characters.forEach((otherCharacter) => {
    if (character !== otherCharacter && isColliding(character, otherCharacter)) {
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

characters.forEach((character) => {
  document.addEventListener('keydown', (e) => moveCharacterWithKeys(e, character));
});
