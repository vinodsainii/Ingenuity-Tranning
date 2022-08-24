// Promise
// it is a way of comunating a AudioParam
// it is an obejct that return a value that hopw to recive in future but not right Node
// Promise is well suited for handeling asynchronous operation
// Promise t=has three states pending,funfilled,rejected.






function sayHi(){
    return new Promise(function(resolve, reject)=> {
        setTimeout(()=>{
        const err =false;


        if(!err){
            resolve("ok adity ");
        }
        else{
            reject("cl nikl")
        }
    },3000);
       
    });

}



sayHi().then((val)=> console.log(val))
.catch(err)=> console.log(err));
