// implement win conditions checks

let storedMovesPlayerX = [];
let storedMovesPlayerO = [];

// adds event listener to each button to register moves
setTimeout(() => {
  const tiles = [...document.getElementsByClassName('tile')];

  tiles.forEach(tile => {
    let button = tile.children[0].children[0];
    button.addEventListener('click', () => {
      if (button.textContent === 'X' || button.textContent === 'O') {
        alert('That space is already filled please choose another');
      } else {

        if (storedMovesPlayerX.length === storedMovesPlayerO.length) {
          button.textContent = 'X';
          storedMovesPlayerX.push(button.parentElement.id)
          storedMovesPlayerX.sort((a, b) => a - b);
        } else {
          button.textContent = 'O';
          storedMovesPlayerO.push(button.parentElement.id);
          storedMovesPlayerO.sort((a, b) => a - b);

        }
        console.log(`Move received at ${button.parentElement.id}`);
        console.log(`stored moves player x: ${storedMovesPlayerX}`);
        console.log(`stored moves player o: ${storedMovesPlayerO}`);
        console.log(typeof storedMovesPlayerX[0])
      }
      // check for winner
      findWinner(storedMovesPlayerX);
      findWinner(storedMovesPlayerO);
    })
  })
}, 0);

setTimeout(() => {
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', () => {
    console.log('Reseting board please hold...')
    const tiles = [...document.getElementsByClassName('tile')];
    tiles.forEach(tile => {
      let button = tile.children[0].children[0];
      button.textContent = 'Click to insert your move';
      storedMovesPlayerX = [];
      storedMovesPlayerO = [];
    });
    console.log('Tiles have been reset...');
    console.log('Stored moves have been reset...');
    console.log(`Stored Moves for Player X: ${storedMovesPlayerX}`);
    console.log(`Stored Moves for Player O: ${storedMovesPlayerO}`);

  })
});

const findWinner = (arr) => {
  if (arr.includes('1')) {
    if (arr.includes('2') && arr.includes('3')) {
      announceWinner();
    } else if (arr.includes('4') && arr.includes('7')) {
      announceWinner();
    } else if (arr.includes('5') && arr.includes('9')) {
      announceWinner();
    }
  } else if (arr.includes('2') && arr.includes('5') && arr.includes('8')) {
    announceWinner();
  } else if (arr.includes('3')) {
    if (arr.includes('5') && arr.includes('7')) {
      announceWinner();
    } else if (arr.includes('6') && arr.includes('9')) {
      announceWinner();
    }
  } else if (arr.includes('4') && arr.includes('5') && arr.includes('6')) {
    announceWinner();
  } else if (arr.includes('7') && arr.includes('8') && arr.includes('9')) {
    announceWinner();
  } else if (storedMovesPlayerX.length === 5 && storedMovesPlayerO.length === 4) {
    alert('GAME DECISION: TIE - RESETTING BOARD TO PLAY AGAIN');
    document.getElementById('reset').click();
  }
}

const announceWinner = () => {
  alert('winner - resetting board');
  document.getElementById('reset').click();
  return;
}
