// ......................Sum of n number.......................
var sum = 0;
var n = 0;
function myFunction_1() {
  while (n >= 0) {
    n = prompt("enter  number");
    if (n < 0) {
      document.getElementById("error").innerHTML = "enter positive number ";
      document.getElementById("error").style.color = "black";
      break;
    } 
    else {
      sum = sum + Number(n);
    }
  }
  document.getElementById("sum").innerHTML = "Sum= " + sum;
}
document.getElementById("sum").style.backgroundColor = "red";
document.getElementById("sum").style.color = "black";

//  ..........................Game Code.....................................
function myGame() {
  let randon_number = Math.floor(Math.random() * 10 + 1);
  n = prompt("Guess the Number");
  if (n == randon_number) {
    document.getElementById("random").innerHTML =
      "Random Number " + randon_number;
    document.getElementById("won").innerHTML =
      "You Won, Restart page and play Again ";
  } else {
    document.getElementById("random").innerHTML =
      "Random Number " + randon_number;
    document.getElementById("lose").innerHTML =
      "You lose,Better Luck Next Time ,Restart page and play Again ";
  }
}
document.getElementById("won").style.backgroundColor = "red";
document.getElementById("won").style.color = "black";
document.getElementById("lose").style.backgroundColor = "red";
document.getElementById("lose").style.color = "black";
document.getElementById("random").style.Color = "red";

// ..................Information data code..................
function information() {

  const person = {
    name:" ",age:" ",address:{city:" ",state:" ",pin:" "},hobbies:" ",
    display:function(){
        return this.name+" "+this.age+" "+this.address.city+" "+this.address.state+" "+this.address.pin+" "+this.hobbies;
    }
};
    person.name=prompt("Enter Name: ");
    person.age=prompt("Enter age: ");
    person.address.city=prompt("Enter City: ");
    person.address.state=prompt("Enter State: ");
    person.address.pin=prompt("Enter Pin: ");
    person.hobbies=prompt("Enter Hobbies: ");

  document.getElementById("info").innerHTML=person.display() ;
  
}
document.getElementById("info").style.backgroundColor = "red";
document.getElementById("info").style.color = "black";
