// intentionally inefficient, using setTimeout to introduce delays and unnecessary calculations:

function printTableOfFiveInefficiently(n) {
  for (let i = 1; i <= n; i++) {
    setTimeout(() => {}, 2000);
    let result = 0;
    for (let j = 0; j < 5; j++) {
      result += 1;
      setTimeout(() => {}, 10000); // Add a 1ms delay
    }
    console.log(i * result);
    console.log(i * result);
    console.log(i * result);
    console.log(i * result);


  }
}

printTableOfFiveInefficiently(10);


function addNumber (a,b){
  console.log(a+b) ;
}

function addThreeNumber(){
console.log(1+3+2)
}

console.log("hello word")
console.log("Hello world")
console.log("jejsjaj")

addThreeNumber();



addNumber(5,6);