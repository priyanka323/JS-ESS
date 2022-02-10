//Arrays
//colection of elements of same type

var arr=[];
var arr1=[1,2,3,4,5];
//console.log(arr1[0]);

for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log(element);
}


//objects
//collection of elements of different types
var student1={
    name:"sai",
    age:20,
    city:"delhi"

}
var student2={
    name:"asai", 
    age:22,
    city:"kalhi"
};

console.log(student1.name);

//
var avengers=[
    {name:"ironman",age:40},
    {name:"thor",age:30},
    {name:"hulk",age:25},
]

console.log(avengers[0].name);

for (let index = 0; index < avengers.length; index++) {
    const element = avengers[index];
    console.log(element.name);
}



//functions
//function declaration
function add(a,b){
    console.log(a+b);
}

add();
add(3,4);
//function expression
//a function can be assigned to a variable
//arrow function
dosomething=(name,age)=>{
    console.log(name);
    console.log(age);
}   //arrow function

dosomething("sai",20);  
dosomething("asai",22);
//
dosomething=()=>console.log("hello",20);

//forEach loop
var avengers=[
    {name:"ironman",age:40},
    {name:"thor",age:30},
    {name:"hulk",age:25},
]

avengers.forEach(function(element){
    console.log(element.name);
});

//

var arr=["thor","ironman","captain","hawkeye"];

arr.forEach(
    function(a, i){
        console.log(a,i);
    }
)

//assignment 4th day
//create a array of five objects 4 properties
//print 2 property  using for loop
//also by foreach loop

var avengers=[
    {name:"ironman",age:40,city:"delhi",salary:50000},
    {name:"thor",age:30,city:"kalhi",salary:40000},
    {name:"hulk",age:25,city:"delhi",salary:30000},
    {name:"captain",age:35,city:"kalhi",salary:60000},
    {name:"hawkeye",age:30,city:"delhi",salary:70000},

]
for (let index = 0; index < avengers.length; index++) {
    const element = avengers[index];
    console.log(element.name);
    console.log(element);
}
avengers.forEach(
    function(a, i){
        console.log(a,i);
    }
)



