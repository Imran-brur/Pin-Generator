 // generateButton and randomNum
 const generateButton = document.getElementById("generateButton");
 generateButton.addEventListener('click', function(){ 
    const randomBox = document.getElementById('randomNum');
    const randomMath = Math.random() * 9000 + 1000;
    const randomNum = Math.round(randomMath);
    document.getElementById('randomNum').value = randomNum;
    document.getElementById('rightNum').style.display = "none";
    document.getElementById('wrongNum').style.display = "none";
 })
 // input Value in Display
 var typeNumber = document.getElementById("typeNum");
 function inputNumber(num) {
     typeNumber.value += num;                        
   }
   // check PinNum and Show result
   const submitButton = document.getElementById('submitButton');
   submitButton.addEventListener('click', function(){
     const randomDisplayNum = document.getElementById('randomNum').value;
     const inputDisplayNum = document.getElementById('typeNum').value;
     if(randomDisplayNum === inputDisplayNum){
         const showResult = document.getElementById('rightNum');
         showResult.style.display = "block";
     }
     else{
         const showResult = document.getElementById('wrongNum');
         showResult.style.display = "block";
         // decrease try
         const decrease = document.getElementById('decrease').innerHTML;
         const decreaseNum = parseInt(decrease);
         const newDecreaseNum = decreaseNum - 1; 
         document.getElementById('decrease').innerHTML = newDecreaseNum;
     }
      document.getElementById('typeNum').value = "";
      
     //disable decrease button when try 0; 
     const disableBtn = document.getElementById('decrease').innerHTML;
     if(disableBtn == 0){
         document.getElementById('submitButton').disabled = true;
     }
   })

   // clearNumber
   const clearNum = document.getElementById('clearNum');
   clearNum.addEventListener('click', function(){
     document.getElementById('typeNum').value = "";
   })

   // backSpace
   const backSpace = document.getElementById('backSpace');
   backSpace.addEventListener('click', function(){
     const typeNumber = document.getElementById('typeNum').value;
     document.getElementById('typeNum').value = typeNumber.substr(0, typeNumber.length - 1);
   })

// disable submitButton
const disableBtn = document.getElementById('decrease').innerHTML;
if(disableBtn == 0){
    document.getElementById('submitButton').disabled = true;
}