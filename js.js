let num1 = Number(document.getElementById("1number").value);
let num2 = Number(document.getElementById("2number").value);

function summa(num1,num2) {
    result = num1 + num2;
    document.getElementById("result").innerHTML = result;      
}

function division(num1,num2){
    if (num2 == 0) {
       alert("На 0 делить нельзя!")}
else{ result = num1 / num2;
    document.getElementById("result").innerHTML = result;}
    } 
   
 
function subtract(num1,num2) {
         result = num1 - num2;
         document.getElementById("result").innerHTML = result;
}
    
function multiply(num1,num2) {
        result = num1 * num2;
        document.getElementById("result").innerHTML = result;
    }


    