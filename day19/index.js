export default functions(){
    console.log("this is default message");
}

let message="ths is module concepts";

let display=()=>{
    return"$(name),welcome to ingunity!";
}

class Employee{
    constructor(name, id,designation){
        this.name = name;
        this.id = id;
        this.designation = designation;
    }
    disDetails(){
        console.log("Employee Name: " + ${this.name}\n,"Employee Id:" +$(this.id)\n,"Employee Designation:" +${this.designation})
    }
}

export{message, display, employee} 
