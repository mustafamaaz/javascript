const num= [1,2,3,4,5,6,7,8,9];
console.log("push----------")
// push
// num.push(10) add number at the end of array
console.log(num.push(20));
console.log(num);

console.log("Unshift----------")
// unshift 
// num.unshift(0)  add num at the start of array
console.log(num.unshift(0));
console.log(num);

console.log("Pop----------")
// pop
// num.pop() array ka last number remove krta hy or return krta hy
console.log(num.pop());
console.log(num);

console.log("shift----------")

// shift
// num.shift() remive num at the start of array

console.log(num.shift());
console.log(num);

console.log("index function----------")
 
console.log("index function")
const names = ['maaz','ahmed','usman','maaz','usman']

// indexof function occurance btata hy index  from start of array sirf 1 occurance 

console.log(names.indexOf('usman'))
console.log(names.lastIndexOf('maaz'))
// include funct btaya hy ky  ye cheez exist krti hy ky nai
console.log(names.includes('maaz'));

// concatenate of String
// name1.concat(name2)
// learn find() function
// slice function
// join func it join character into string
console.log("join function----------")
let student = ['n','a','t','i','o','n']
console.log(student.join(''));
// console.log(student.split('-'))

// filter function ye jitny bh limit sy above hown gy show kr ga
console.log("filter map function----------")
let cities = [
    {name:'rawalpindi' , population: 4560030},
    {name:'islamabad' , population: 256340},
    {name:'pehshawer' , population: 9759032},
    {name:'multan' , population: 569030}
];

console.log(cities.filter(city => city.population>300000))

console.log(cities.map(city => city.population *2))


// split function take string split('') due to this '' all element of string seperated through '' 

// substring take index and crop string a/c to index (index from start, to end)
console.log("split function----------")
const s = 'technology, computer, coding, maaz';
console.log(s.split(', '));
// this function use in database for searching keywords like coding computer

//  we can add data member of class outside of class
// class name is maaz  so out side of class maaz.email like this we add it

// object of arrays

console.log("Array----------")
const todos =[
    {
        id: 1,
        text1: 'Take out trash',
        iscomplete: true
    },
    {
        id: 2,
        text1: 'Meeting With Boss',
        iscomplete: true
    },
    {
        id: 3,
        text1: 'Dential appoitment',
        iscomplete: false
    }
];

console.log(todos[1].text1);
// JSON is format in which we send data to server and receive data from server in json formet 
// json formet double qutation in keywords and string 
// JSON.stringify() is function we convert our simple code in JSON format
console.log("data in JSON format----------")
const todosjson = JSON.stringify(todos);
console.log(todosjson);
//  print all text in object

console.log("loop----------")
for(let todo of todos){
    console.log(todo.text1);
}

// map method
console.log("map function----------")
const todotext = todos.map(function(toddo){
    return toddo.text1;
});
console.log(todotext);
// filter method

console.log("functional programming----------")
// is ka text print kro jis ka iscomplete true hy

const todoComplete = todos.filter(function(ttodo){
    return ttodo.iscomplete === true;
}).map(function(ttodo){
    return ttodo.text1;
})
console.log(todoComplete);
// ternonary operator x > 10 ? 'red' : 'blue' (? means then and : means else)









