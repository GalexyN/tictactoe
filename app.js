const buttons = [...window.document.getElementsByTagName('button')];

buttons.forEach(button => button.addEventListener('click', () => console.log('click')))

