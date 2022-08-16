// ................remove extra white space in between string.............
function myFunction_1(){
        let text = prompt("Enter String");
        let result = text.trim();
        document.getElementById("string").innerHTML=result;
       
}
document.getElementById("string").style.color = "red";

// .................copy an array into another using forEach().............


function exam() {
      const items = [1,2,3,4,5,6,7,8,9,10];
      const copy = [];
      items.forEach(function (item) {
            copy.push(item);
        });
        document.getElementById("arr").innerHTML=copy;
        
 }
document.getElementById("arr").style.color = "red";
    
      
// ............................Check all sy=tudent passed.............................    
var line=document.createElement('hr');
function information(){
    function check(){
            var marks=[100,95,90,45,40,35,30,25,20,15,10,5];
            document.write('<h1 style="text-align: center; color: green; font-size: 50px; font-weight: bold;">Marks are:' + marks+' </h1>');
            document.write("<br>");
            marks.forEach(function(element){
            if(element>=60)
            {
                document.write('<h3 style="text-align:center"> Student Passed with marks: ' + element+'</h3>');
                document.write("<br>");
                
            }
            else{
                document.write('<h3 style="text-align:center">Student Failed with a gap of marks: ' + (60-element)+'</h3>');
                document.write("<br>");
            }
        });
    }
    

    document.getElementById("info").innerHTML=check();
        
}



// add an element at a perticular list .................
function element() {
    let arr=[1,2,3,4,5];
    var index=prompt("Enter position to enter element ");
    var element=prompt("Enter element to enter");

    for(let i=arr.length;i>index;i--){
        arr[i]=arr[i-1];
    }
    arr[index]=element;
    
    
document.getElementById("posi").innerHTML=arr;
        
}
document.getElementById("posi").style.color = "red";





// // ......................
function apple() {
const frutis=["Apple","Banana","Mango","orange"];
frutis.sort();
frutis.reverse();
document.getElementById("desending").innerHTML=frutis;
        
}
document.getElementById("desending").style.color = "red";