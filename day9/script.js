// ...........................add number given by user.................

function myFunction_1(){
    function adder(base) {
    for (let i = 1; i < arguments.length; i++) {
      base += Number(arguments[i]);
    }
    return base;
  }

  
       
        document.getElementById("sum").innerHTML = "Sum of (3,5)= "+adder(3,5)+"<br>Sum of (1,2,5,8)= " + adder(1,2,5,8);
}
document.getElementById("sum").style.color = "red";

// ......................program to return more then one value ............
function more_Value(a,b){

    function fun(){
        var first=prompt("Enter First Name :");
        var last=prompt("Enter Last Name :");
        var name=[];
        name[0]=first;
        name[1]=last;
              return name;
    }
    var data=fun();
    
    document.getElementById("sum2").innerHTML="First Name: "+data[0]+"<br>Last Name: "+data[1];
}
document.getElementById("sum2").style.color = "red";
document.getElementById("sub").style.color = "red";



// ............program to return entire function defination and display it...............
function rendom(){
function myFunction3(a,b){
    
    return a+b;
}

var str=myFunction3;

document.getElementById("info").innerHTML=str;
document.getElementById("info").style.color = "red";
}   



//.................. Create a new string adding NEW!...................
function apf(){
    function fun(str) {
        var s=str.substring(0,4);
        if(s==="New!"){
            return str.substring(4,str.length);
        }
        else{
            return ("New!"+str);
        }
    
  }
var str=prompt("Enter String");




    document.getElementById("2").innerHTML=fun(str);
document.getElementById("2").style.color = "red";
}



// ..................create a new string to a given string takinf first 3 and last 3 characters................
function adf(){
function fun(str) {
    if(str.length<3)return str;
    var s=str.substring(0,3);
    var e=str.substring(str.length-3,str.length);
    
    return (s+e);

}
var str=prompt("Enter String");


    document.getElementById("3").innerHTML=fun(str);
document.getElementById("3").style.color = "red";
}