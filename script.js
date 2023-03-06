/* 
a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const checkNumber = (number) =>{
  if(number >= 0)
  return true;
  else
  return false;
}

checkNumber(0); */



/* const countTheDays = (day) =>{

    switch (day) {
        case 'Sunday':
        case 'Saturday':
            return console.log('You are already in the weekend');
            
        case 'Monday':
            console.log('You have 4 more days for the weekend!!');
            break;
        case 'Tuesday':    
             console.log('You have 3 more days for the weekend!!');
             break;
        case 'Wednesday':
            console.log('You have 2 more days for the weekend!!');
            break;
        case 'Thurday':
            console.log('You have 1 more days for the weekend!!');
            break;
        case 'Friday':
            console.log('Your weekend is almost here');
            break;
        default:
            console.log('Sorry we didn\'t recognise that day');
            break;
    }
}

countTheDays('Saturday'); */


//Function that takes number of days and converst it into an age

/* const returnAge = (days) =>{
let temp = days/365;
return temp.toFixed(1);
}

console.log(returnAge(6534)); */

//Function that takes 3 numbers and returns the largest.
/* const greatest = (a,b,c) =>{
    if(a===b && b===c && c===a)  return console.log('All three numbers are the same. Cant compare')
    if(a > b){
        if(a>c)
        console.log('a is the greatest number');
        else console.log('c is the greatest number');
    } else if(b>c)
        console.log('b is the greatest number');
        else console.log('c is the greatest number');
}

greatest(1,2,3); */

//Function that returns an array of names and returns the last name from that array


/* const getLastName = (nameArr) =>{
  let length = nameArr.length;
  return nameArr[length-1];
}

console.log(getLastName(["Charlie","Rob","Andy",'John'])); */

// function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.


const allNumber = (arr)=>{
    let i=0;
    while(i<=arr.length-1)
    {
    if(arr[i] >= 0)
         i=i+1;
    else return false;
}
return true;
}

console.log(allNumber([2,4,-5]));