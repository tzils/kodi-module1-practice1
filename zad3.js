//Zadanie nr 3 

function averageNum(...theArgs) {
  const number = theArgs.length;
  const total = theArgs.reduce(function(a, b){ return a + b; }); 
  return total /number;
};

document.getElementById("ajdi").innerHTML = (averageNum(1, 5, 7));