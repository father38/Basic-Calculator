const buttons = document.querySelectorAll('.btn-number, .btn-operator')
const display = document.querySelector('.display')

let displayData = "";

buttons.forEach(button => {
    button.addEventListener('click', () => { 
        const buttonValue = button.getAttribute('data-num');
        displayData += buttonValue;
        display.textContent = displayData;
    })
})

const equalsButton = document.querySelector('.btn-equals')
equalsButton.addEventListener('click', () => { 
    displayData=eval(displayData)
    display.textContent = displayData
})
const clearButton = document.querySelector('.btn-clear')
clearButton.addEventListener('click', () => { 
    displayData = "";
    display.textContent = displayData;
})
