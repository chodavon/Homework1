let currentInput = '';

// Display the clicked button
function display(value) {
  currentInput += value;
  document.getElementById("output-screen").value = currentInput;
}

// Clear the input
function clr() {
  currentInput = '';
  document.getElementById("output-screen").value = '0';
}

// Delete the last entered character
function del() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById("output-screen").value = currentInput || '0';
}

// Calculate the result
function calculate() {
  try {
    currentInput = eval(currentInput).toString();  // Evaluate the expression
    document.getElementById("output-screen").value = currentInput;
  } catch (error) {
    document.getElementById("output-screen").value = 'Error';
    currentInput = '';
  }
}
