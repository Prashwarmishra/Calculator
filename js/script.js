let display=document.getElementById("display-value");
let button=document.getElementsByClassName("child");

let operand1=null;
let operand2=null;
let operator=null;
let display2="";

for(let i=0;i<button.length;i++){
    button[i].addEventListener("click", function(){
        let value=this.getAttribute("data-value");
        if(value == "+/-"){
            if(operator == null){
                operand1 = (-1)*display.innerText;
                display.innerText=operand1;
            }
        }else if(value == "%"){
            if(operator == null){
                operand1=parseFloat(display.innerText)/100;
                display.innerText=operand1;
            }
        }else if(value == "AC"){
            operand1=null;
            operand2=null;
            operator=null;
            display.innerText="";
        }else if(value == "+" || value == "-" || value == "*" || value == "/"){
            if(display.innerText == ""){
                return;
            }
            operand1=parseFloat(display.innerText);
            operator=value;
            display.innerText+=value;
        }else if(value == "="){
            operand2=parseFloat(display2);
            let ans=eval(operand1+" "+operator+" "+operand2);
            if(ans == Infinity){
                display.innerText="Error";
            }else{
                display.innerText=ans;
                display2="";
                operand1=ans;
                operator=null;
                operand2=null;
            }   
        }else{
            if(operator!=null){
                display2+=value;
            }
            display.innerText+=value;
        }
    })
}