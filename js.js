

function summa() {
    let num1 = Number(document.getElementById("1number").value);
num2 = Number(document.getElementById("2number").value);
result = num1 + num2;
document.getElementById("result").innerHTML = result;
     
          
}
function division(){
    let num1 = document.getElementById("1number").value;
    num2 = document.getElementById("2number").value;
    if (num2 == 0) {
       alert("На 0 делить нельзя!")}
else{ result = num1 / num2;
    document.getElementById("result").innerHTML = result;}
      
    } 
   
 
function subtract() {
    let num1 = document.getElementById("1number").value;
         num2 = document.getElementById("2number").value;
         result = num1 - num2;
         document.getElementById("result").innerHTML = result;
   
}

    


    
    
    
function multiply() {
    let num1 = document.getElementById("1number").value;
        num2 = document.getElementById("2number").value;
        result = num1 * num2;
        document.getElementById("result").innerHTML = result;
    }


    