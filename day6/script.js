

function myFunction(){
    let person= prompt("Enter your name");
    if(person !=null){
        document.getElementById("demo_3").innerHTML="Hello "+ person ;
    }
}
document.getElementById("demo_3").style.backgroundColor="red"
document.getElementById("demo_3").style.color="black"


function myFunction_1(){
    var a=Number(prompt("enter first number"));
    var b=Number(prompt("enter second number"));
    var c=a+b;
    if(c !=null){
        document.getElementById("sum").innerHTML="Sum= "+ c ;
    }
}
document.getElementById("sum").style.backgroundColor="red"
document.getElementById("sum").style.color="black"





function myFunction_2(){
    var a=Number(prompt("enter first number"));
    var b=Number(prompt("enter second number"));
    var c=a-b;
    if(c !=null){
        document.getElementById("sub").innerHTML="Subtraction= "+ c ;
    }
}
document.getElementById("sub").style.backgroundColor="red"
document.getElementById("sub").style.color="black"




function myFunction_3(){
    var a=Number(prompt("enter first number"));
    var b=Number(prompt("enter second number"));
    var c=a*b;
    if(c !=null){
        document.getElementById("multi").innerHTML="Multiplication= "+ c ;
    }
}
document.getElementById("multi").style.backgroundColor="red"
document.getElementById("multi").style.color="black"





function myFunction_4(){
    var a=Number(prompt("enter first number"));
    var b=Number(prompt("enter second number"));
    var c=a/b;
    if(c !=null){
        document.getElementById("division").innerHTML="Division= "+ c ;
    }
}
document.getElementById("division").style.backgroundColor="red"
document.getElementById("division").style.color="black"
