//loops
//while
var num = 1;
while(num <= 10){
  console.log(num);
  num++;
}


//do while
var num = 1;
do{
  console.log(num);
  num++;
}while(num <= 10);


//for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    
}

// program to print table of five
for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(5*element);
    
}

//5 variables holding marks of 5 subs calculate the percentage
var sub1 = 80;
var sub2 = 90;  
var sub3 = 70;
var sub4 = 85;
var sub5 = 95;
var total = sub1 + sub2 + sub3 + sub4 + sub5;
var per = total/5;
console.log(per);