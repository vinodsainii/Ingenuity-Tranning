class training{
    constructor(trainingHours,trainingCompany,trainingStatus){
        this.trainingHours = trainingHours;
        this.trainingCompany = trainingCompany;
        this.trainingStatus = trainingStatus;
    };
    displayDetails(){
        return `Training Hours: $(this.trainingHours)\nTraining Company:  $(this.trainingCompany)\n Training Status: $(this.trainingStatus)\n`;
    }
}
let IngenuityGaming=new training(120,"Ingenuity Gaming","Online");
console.log(IngenuityGaming.displayDetails());
class Incampus extends training{
    constructor(a,b,c,d){
        super(a,b,c);
        this.rollno=d;
    }
    displayDetails(){//function overriding
        console.log("Child class function");
    }
}
let stu1= new Incampus();