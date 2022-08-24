// XHR methods
//fetch() method
// third party packages using Axios 

// 1.XHR methods
const aurl="https://api.covid19api.com/summary";
async function getAPIData(url){
    console.log("Hello");
    var data=await fetch(url);
    var result=await(data.json());
    console.log(result);
    displayData(result);
    // .then((value)=>{return JSON.parse(val);}).then((data)=>console.log(data)).catch((err)=>console.log(err));
   // console.log(a);
}
getAPIData(aurl)
// .then((value)=>{console.log(JSON.parse(value)); displayData(JSON.parse(value));}).catch(err=>console.log(err));
function displayData(serverData){
   for(var user of serverData){
    let newTr=document.createElement('tr');
    let newTd1=document.createElement('td');
    let newTd2=document.createElement('td');
    let newTd3=document.createElement('td');
    let newTd4=document.createElement('td');
    newTd1.innerHTML=""+user.id;
    newTd2.innerHTML=""+user.name;
    newTd3.innerHTML=""+user.email;
    newTd4.innerHTML=""+user.phone;

    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    newTr.appendChild(newTd4);

    document.getElementById('mytable').appendChild(newTr);
   }
}