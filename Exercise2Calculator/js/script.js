let input = document.querySelector('#input')
let actionkeys = document.querySelectorAll('.action-key')

function logged(e) {
  input.value += e.target.innerHTML;
  let str = input.value;
  if(
    str.endsWith('+') || 
    str.endsWith('-') || 
    str.endsWith('*') || 
    str.endsWith('/') 
  ) {
    for(let i = 0; i < actionkeys.length; i++) {
      actionkeys[i].setAttribute('disabled', 'disabled');
    }
  } else {
    for(let i = 0; i < actionkeys.length; i++) {
      actionkeys[i].removeAttribute('disabled');
    }
  }
}

function equalButton() {
  let calc = document.querySelector('#operation');
  let res = document.querySelector('#result-number');
  let str = input.value;

  function isStartsWithOperator() {
    if(
      str.startsWith('+', 0) || 
      str.startsWith('-', 0) || 
      str.startsWith('*', 0) || 
      str.startsWith('/', 0) 
    ) {
      result = eval('0' + input.value);
      calc.innerHTML = '0' + input.value;
    } else {
      result = eval(input.value);
      calc.innerHTML = input.value;
    }

    res.innerHTML = result;
  } isStartsWithOperator()

  function dividedByZero() {
    if(str.includes('/0')) {
      res.innerHTML = 'HARAM';
      res.style.color = 'crimson';
      return;
    }
    res.style.color = '#000';
  } dividedByZero()

  function reset() {
    input.value = '';
  
    for(let i = 0; i < actionkeys.length; i++) {
      actionkeys[i].removeAttribute('disabled');
    }
  } reset()
}