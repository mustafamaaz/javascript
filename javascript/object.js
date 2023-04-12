// object
let animal = {
    name : "zebra",
    leg: 4
}
  

// methof 1 for access
console.log(animal.name);
// method 2
console.log(animal["name"]);

console.log('-------------------');

// for in loop
for (let key in animal) {
   console.log(key,animal[key]);
}

// array
let name = ["maaz","marij","summaiya"];

for(let index in name ){
console.log(index,name[index]);
}

console.log('-------------------');

// for of loop
for(let names of name){
    console.log(names);
}
console.log('------------constructor function ----------')
// constructor function
function person (FirstName, LastName, DOB){
    this.FirstName = FirstName;
    this.LastName =LastName;
    this.DOB =new Date(DOB);
    this.getBorthYear = function(){
        return this.DOB.getFullYear;
    }
    this.getFullName = function(){
        return `${this.FirstName} ${this.LastName}`;
    }
}
// instantiate object
const person1 = new person('maaz','mustafa','4-3-1998');
const person2 = new person('marij','mustafa','14-03-2005');
console.log(person1.getBorthYear());
console.log(person1.getFullName());