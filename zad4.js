//Zadanie nr 4

const grades = [1,5,5,5,4,3,3,2,1];

function averageNum(...theArgs) {
  const number = theArgs.length;
  const total = theArgs.reduce(function(a, b){ return a + b; }); 
  return total /number;
};

document.getElementById("ajdi").innerHTML = (averageNum(...grades));