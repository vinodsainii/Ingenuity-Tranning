// // // dom manuplitaion
// // console.log(document.documentElement);
// // console.log(document.body);
// // console.log(document.title);




// // // change in  html
// //     document.title="new tittle";



// // // var x=document.getElementsById("#1");
// // // console.log(x); 

// // var y=document.getElementsByClassName("para");
// // console.log(y)

// // var h2=document.querySelector(".para")
// // console.log(h2);


// // var h2 =document.getElementById("2");
// // h2.style.visibility="hidden";
// // allPara[1].style.fontFamily="arieal"
// // y.style.backgroundColor="yellow";
// // y.innerText="new heading";



// // var newi=document.createElement("li");
// // newi.text`="new item"



// var y=document.getElementsByClassName("para");
// console.log(y);

// for(var i=0;i<y.length;i++)


// // 1 inline event hendling
// // 2 event using its reference
// // 3 using add eventlistner
    


function performTask(){
    alert("button is clivked");
    console.log("hyyyy");
}

var btn=document.querySelector('button');
console.log(btn);

// way to sing reference
btn.onmouseover=function(){
    document.querySelector("p").style.backgroundColor="green";
};

btn.onmouseleave=()=>(document.querySelector("p").style.backgroundColor="yellow");

// way 3 using add listner 
// add listner
btn.addEventListener('click')

function task1(){
    
}
