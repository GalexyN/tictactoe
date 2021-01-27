// create the 2 players 

class Player {
  constructor() {

  }
}

// implement win conditions checks

let storedMovesPlayerX = [];
let storedMovesPlayerO = [];



// adds event listener to each button to register moves
setTimeout(() => {
  const tiles = [...document.getElementsByClassName('tile')];

  tiles.forEach(tile => {
    let button = tile.children[0].children[0];
    button.addEventListener('click', () => {
      if (storedMovesPlayerX.length === storedMovesPlayerO.length) {
        button.textContent = 'X';
        storedMovesPlayerX.push(button.parentElement.id)
      } else {
        button.textContent = 'O';
        storedMovesPlayerO.push(button.parentElement.id)
      }
      console.log(`Move received at ${button.parentElement.id}`)
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
    console.log(`Stored Moves for Player O: ${storedMovesPlayerO}`)


  })
})
