// exersice number1

let square = {
    side:0,
    get area(){
      return   this.side*this.side
    }
}


square.side = 10  
console.log(square.area);

// exersice number 2

function stringconcat(seperator,...strings){
     let returnval = ''

     strings.forEach((string,index) => {
        if (index == strings.length-1){
            returnval += string ;
        }
        else {
            returnval+=string +seperator;
        }
     })

     return returnval;
}

console.log(stringconcat('+','this','is','maaz'));

// de structure
let [first,second,third,...other] = [1,2,3,4,5,6,7,8,9,10];
console.log(first);
console.log(second);
console.log(third);
console.log(other);

function matchhouse(house){
    let stick = house *6;
    let x = house -1;
    let total =stick-x;
    return total;

}

console.log(matchhouse(4));
