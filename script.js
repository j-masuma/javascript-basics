console.log("Hi, My name is javaria");
function myname(){
    console.log("I am a girl");
}
myname();

//=============================Variable Declaration===================================//
const a = 8;
const b = true;
const c = "Javaria Masooma";
const date = new Date();
const d=undefined;
const e = [1,2,3,4,5,6,7,8,9,10];
const f = ["Saima", "Anam", "Fatima"];
const g = [2, 4,"Ahmad", 6, true];
const h = {
    ID : 1,
    Name : "Javaria"
};

console.log(date);

//for of loop=>on arrays
//for in loop=>on objects


//=============================  Task-2  ===================================//

var abc = Number("1212a");
console.log(abc);

var abc = parseFloat("1212ab");
console.log(abc);

var abc = parseInt("1212a");
console.log(abc);


//=============================  Task-3  ===================================//
const obj={
    name : "Javaria",
    age : 23,
    address : "Sukkur",
}
function checkString(obj){
    for(data in obj){
        if(typeof obj[data]==="string"){
            console.log(obj[data]);
        }
        }
}
checkString(obj);

//=============================  Task-4  ===================================//

function evenOdd(num){
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(`The given number is ${evenOdd(11)}`);

//=============================  Task-5  ===================================//

function checkSpeedLimit(speed){
    const speedLimit=70;
    if(speed<speedLimit){
        console.log('Good Safe Driving');
    }
    else if(speed>=speedLimit){
        console.log('Speed Limit Crossed by Penalty Point' + Point);
    }
}

//=============================  Task-6  ===================================//
const marks=[84,64,63,89,88,90];
const grades=(marks)=>{
    let sum=0;
    for(let i=0; i<marks.length; i++){
        sum=sum+marks[i];
    }
    console.log(`Total Obtained Marks is : ${sum}`);
    //Average of marks
    const average=sum/marks.length;
    console.log(`Average Marks is : ${average}`);

    //Grades
    let grade;
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    console.log("Your grade is : "+grade);

};
console.log(`Marks : `,marks);
grades(marks);


//=============================  Task-7  ===================================//
let input="Sukkur IBA";
let reverseString=(input)={
   
};