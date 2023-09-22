//Javaria Masooma
//023-20-0031

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
    else{
        const penalty=(speed-speedLimit)/5;
        if(penalty>10){
            console.log('Lisence Suspended');
        }else{
            console.log('Speed Limit Crossed by Penalty Point  ' + penalty);
        }
       
    }
}
const speed =1000;
checkSpeedLimit(speed);



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


let input = "Sukkur IBA";

let reverseString = (input) => {
    let reverse="";
   for (let i = input.length - 1; i >= 0; i--) {
       reverse = reverse + input[i];
   }
   return reverse;
};
console.log("The original string is : ", input);
console.log('The reverse string is : ', reverseString(input));

//=============================  Task-8  ===================================//

function checkDigits(input){
    let result=[];
    for(var i=0; i<input.length; i++){
    let element = input[i];
    let digit=false;
    for(var j=0; j<element.length; j++){
        if(!isNaN(parseInt(element[j]))){
            digit=true;
            break;
            }
    }
    if(digit){
        result.push(element);
        }
    }
    return result;

}

const inputList=['Saima', 'Samar', 'Orange778', 'Salman711'];
console.log(`The Strings that has digits are : ${checkDigits(inputList)}`);


//=============================  Task-9  ===================================//

function display(obj, indent = '') {
    // Check if the object is empty
    if (Object.keys(obj).length === 0) {
        console.log(indent + "The given Object is Empty.");
        return;
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(indent + `Key: ${key}, Value: ${obj[key]}`);

            if (typeof obj[key] === "object") {
                console.log(indent + "Nested Object:");
                display(obj[key], indent + '  ');
            }
        }
    }
}

const emptyObject = {};
const object = {
    name: "Javaria",
    age: 27,
    address: {
        country:"Pakistan",
        city: "Skardu",
        postalCode: 12345
    }
};

console.log("For empty object:");
display(emptyObject);

console.log("\nFor non-empty object:");
display(object);


//=============================  Task-10  ===================================//

function replaceMinOccurance(num){
    if(num.length===0){
        console.log(`The given list is Empty.`);
        return;
    }

    const min=Math.min(...num);
    let count=0;
    for(let i=0; i<num.length; i++){
        if(num[i]===min){
            count++;
            num[i]=-1;
        }
    }
    console.log(`The number of occurance of the minimum number is : ${count}`);
    console.log(`The modified numer is : ${num}`);
}

const num=[2,3,4,5,6,2,7,8,9,2,7,5,3,9,10];

replaceMinOccurance(num);