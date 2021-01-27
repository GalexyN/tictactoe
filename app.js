// adds event listener to each button to register moves
setTimeout(() => {
  const buttons = [...document.getElementsByTagName('button')];
  
  buttons.forEach(button => button.addEventListener('click', () => {
    button.textContent = 'clicked'
    console.log(`Move registered in ${button.parentElement.id}`)
  }));

}, 0);

// create the 2 players 

// implement win conditions checks