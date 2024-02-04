function displayvalue(val) {
  document.getElementById('display').value = document.getElementById('display').value + val
}

function clearbtn() {
  document.getElementById('display').value = '';
}

function calculation() {
  let inputvalue = document.getElementById('display').value;
  let result = eval(inputvalue);

  document.getElementById('display').value = result;
}