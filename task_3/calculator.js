let string = '';

function TypeText(value) {
    string += value;
  document.getElementById('screen').value = string;
}

function clearScreen() {
    string = '';
  document.getElementById('screen').value = string;
}

function calculate() {
  const result = eval(string);
  document.getElementById('screen').value = result;
  string = '';
}
