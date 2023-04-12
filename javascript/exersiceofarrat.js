const character =[
    {name:'maaz' , height:'6',mass:'60',
     eye_color:'black',gender:'male'},

     {name:'hamza' , height:'4.5',mass:'45',
     eye_color:'brown',gender:'male'},

     {name:'amna' , height:'5',mass:'50',
     eye_color:'golden',gender:'female'},

     {name:'marij' , height:'5.5',mass:'40',
     eye_color:'black',gender:'female'},
];
 
// seperate all names
const names = character.map((ch)=>ch.name);
console.log(names);
console.log('__________**********__________')

// get array with name and height

const properties = character.map((person)=> {
    return {
        height :person.height,
          names:person.name
    }
});
console.log(properties);

console.log('__________**********__________')


// get the total height of all character
// previousval set at 0 and character object is passed by parameter and return result

const totalheight = character.reduce((previousval,character) => previousval +Number( character.height),0);
console.log(totalheight);
console.log('__________**********__________')

// get the cahracter with mass greater then 40

const greatermass = character.filter((character)=> character.mass >45)
 console.log(greatermass);
 console.log('__________**********__________')

//  get all male character

const malechar = character.filter((character)=> character.gender == 'male')
 console.log(malechar);
 console.log('__________**********__________ sort')
  
//  sort by name

const sortbyname = character.sort((character1 , character2)=>{
    if(character1.name > character2.name)
    return -1;
    if(character1.name < character2.name)
    return 1;

    return 0;
} )

console.log(sortbyname);

// does evey character has mass more then 40
console.log('__________**********__________ ')

console.log(character.every((character)=>{
    return character.mass >=40;
}))

// is there is atleast one charachter teller than 6
console.log('__________**********__________ ')

console.log(character.some(character => character.height > 5))






