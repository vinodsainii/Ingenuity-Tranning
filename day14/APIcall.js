// XHR methods
//fetch() method
// third party packages using Axios 

// 1.XHR methods
const api_url="https://jsonplaceholder.typicode.com/users";
function getUserData(url){
    console.log("Hello");
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open("GET", api_url);
        request.send();
        request.onload =  ()=> {
            // console.log(request.responseText);
            if(request.status===200)
            {
                resolve(request.response);
            }
            else{
                reject("Not able to fetch data");
            }
        };
    });
}
getUserData(api_url).then((value)=>{console.log(JSON.parse(value)); displayData(JSON.parse(value));}).catch(err=>console.log(err));
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
