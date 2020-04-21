// Your code here
let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

console.log(dodger.style.left); // "180px"
console.log(dodger.style.bottom); 

dodger.style.bottom = '0px'

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight(){
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0 && left < 359) {
    dodger.style.left = `${left + 1}px`;
  }
}
document.addEventListener('keydown', function(e){
  console.log(e.key)
  if(e.key === 'ArrowLeft'){
    moveDodgerLeft()
  } else if (e.key === 'ArrowRight'){
    console.log(dodger.style.left);
    moveDodgerRight()
  }
})