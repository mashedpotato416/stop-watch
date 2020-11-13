function updateDisplay(currentCentiSeconds) {
  // Compute seconds
  let currentSeconds = Math.floor(currentCentiSeconds / 100)

  // Display outputs
  let stopWatch = document.querySelector('#time')
  if (!(Math.floor(currentCentiSeconds) === 0)) {
    stopWatch.textContent = `${currentSeconds}s ${(currentCentiSeconds - currentSeconds * 100)}`
  } else {
    stopWatch.textContent = `${currentSeconds}s 00`
  }
}

function updateTimer() {
  // Increment time
  currentCentiSeconds++
  // Update display
  updateDisplay(currentCentiSeconds)
}

function DisableButton(button) {
  buttonSelector = '#' + button.toLowerCase() 
  chosenButton = document.querySelector(buttonSelector)
  chosenButton.disabled = true
}

function EnableButton(button) {
  buttonSelector = '#' + button.toLowerCase() 
  chosenButton = document.querySelector(buttonSelector)
  chosenButton.disabled = false
}

function Timer(e) {
  // Get which button is pressed
  buttonPressed = e.target.textContent

  // Timer scripts
  if (buttonPressed === 'Start' && !(stopWatch)) {
    // Start 
    stopWatch = setInterval(updateTimer, 10)
    DisableButton('Start')
    DisableButton('Reset')
    EnableButton('Stop')
  } else if (buttonPressed === 'Stop'  && stopWatch) {
    // Stop 
    clearInterval(stopWatch) 
    stopWatch = null
    DisableButton('Stop')
    EnableButton('Start')
    EnableButton('Reset')
  } else if (buttonPressed === 'Reset' && !(stopWatch) ) { 
    // Reset
    currentCentiSeconds = 0
    updateDisplay(currentCentiSeconds)
    DisableButton('Reset') 
  } else {
    // Ignore user command
    console.log('Invalid button')
  }
}

let currentCentiSeconds = 0
let stopWatch

const startButton = document.querySelector('#start')
startButton.addEventListener('click', Timer)

const stopButton = document.querySelector('#stop')
stopButton.addEventListener('click', Timer)

const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', Timer)
