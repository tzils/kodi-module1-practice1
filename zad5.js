//Zadanie nr 5

const names = [1, 4, 'Iwona', false, 'Nowak'];
const [, ,firstname,, lastname] = names;

function fun1(...theArgs) {
  const number = theArgs.length;
  const total = theArgs.reduce(function(a, b){ return a + b; }); 

  return total /number
}


document.getElementById("ajdi").innerHTML = (firstname + ' ' +lastname);