var c=10;
console.log(c);
// let and const both have block scope
const sayHi=()=>{
    console.log("hi");
}
sayHi();
const add=(x,y)=>{
    return x+y;
}
console.log(add(5,10)*100);
setInterval(()=>{
    var i=1;j=1;
    var res=add(i,j);
    var result=res*res;
    i++;
    j++;
    return result;
},1000)
// clearInterval(interval);
var arr=[1,2,3,4,5,6,7,8,9,10];
let x=arr[0];
let y=arr[1];
let z=arr[9];
let [a,b,,,,,,,f]=arr;
console.log(a);
console.log(f);
console.log(b);
let person={
    name:"Yukti",
    age:21,
    mobile: 9876543210,
    email:"yukti@gmail.com",
    city: "Jaipur"
};
let {mobile,email,city}=person;
console.log(mobile,email,city); 
let name="Vinod";
let designation="Fresher";
let cty="Jaipur";
let distance=115;
let disp=()=>{
    console.log(distance);
}
function display(...data){
    console.log(data);
}
console.log(display([1,2,3,4,5,6,7,8,9]));
let obj=[name,designation,city,distance,disp];
console.log(obj);
console.log(obj.disp)
