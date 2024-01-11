//## Greeting
//#### Create a function that greets you with "Hello there my friend!".
// \`\`\`js
function greeting(){
    return "Hello there my friend!"
}
// \`\`\`
//##Greeting with name
//####Create a function that takes a string as an argument and writes out: "Hello there my friend! You must be [name]!"
function greetingWithName(name){
    return `${greeting()} You mest be ${name}`
}
//Addition
//Create a function that takes two numbers as arguments and returns the sum of those two numbers. Save that sum in a variable and log it to the console.
function addition(a,b){
    return a+b
}
//Division
//Create a function that takes two numbers as arguments and returns the quotient of those numbers. Save that to variable and log it to the console. Remember that you can't divide with zero. So a check must be than in order to prevent the calculation if you are trying to divide by zero. Log an error message to the console if that happens.
function division(a,b){
    return a/b
}
//Area
//Create a function that takes a length and a width of an imaginary box as arguments and return the area of that box. Log a message to the console that describes the area of the box.
function area(length,width){
    return length*width
}
//Greeting with name again
//Create a function that takes a first name and a last name as arguments. Return a template literals that says: "Hello [firstName] [lastName]! How are you doing?"
function greetingWithNameAgain(firstName, lastName){
    return `Hello ${firstName} ${lastName}! How are you doing?`
}
//Distance converter
//Create a function that takes a distance in kilometres as an arguments and returns the distanse in miles. (The American kind of miles). Save to a variable and log a description of the conversion to the console.
function kmToMiles(distanceInKm){
    let miles = distanceInKm*1.609;
    console.log(`Convertet ${distanceInKm}km to ${miles} miles.`)
return miles
}
//Temperature converter
//Create a function that takes a celsius temperature as an argument and returns the temperature in farenheit. Log the result message to the console.
function celsiusToFahrenheit(degreesCelsius){
let degreesFahrenheit = (degreesCelsius * 1.8) + 32;
console.log(`${degreesCelsius} degress celsius is the same ${degreesFahrenheit} degrees fahrenheit.`)
}
//Mean value (Needs knowledge of Arrays)
//Create a function that takes an array of numbers as an argument. Return the mean value of all those numbers, save it and log it to the console.
function meanValue(numbersArr){
    let mean = sum(numbersArr) / numbersArr.length
    console.log(`Mean value of the array [${numbersArr}] is ${mean}`)
      return mean
}
//Systembolaget
//Create a function that takes an age as an argument. Check the age and return one of the following messages.

function systembolaget(age){
    if(age < 15) return "Get out of here!"
    else if(age < 18) return "Sorry, you are not old enough."
    else if(age < 20) return "Sorry, you must be at least 20. Why don't you try a bar instead?"
    else if(age <= 80) return "Thank you! Welcome!"
    else return "Where is your caretaker?"
}
//0 - 14 "Get out of here!"
//15 - 17: "Sorry, you are not old enough"
//18-19: "Sorry, you must be atleast 20. Why don't you try a bar instead?"
//20-80: "Thank you! Welcome!"
//80+ I'm sorry, where is your caretaker?
//Sum (Needs knowledge of Arrays)
//Create a function that takes an array of 10 different numbers as an argument. Calculate the total sum of all the numbers in the array and return that value. Log it to the console.
function sum(numbersArr){
    let sum = 0
    numbersArr.forEach(num=>
        sum += num)
    return sum;
}
//List a persons' skills (Needs knowledge of Objects)
//Create an person object that has the following attributes: - name - age - city - skills
const person = {
    name: "Lucas",
    age: 20,
    city: "Örebro",
    skills: ["Pokemon Master", "Kung Fu Legend", "Football Ninja", "Professional Pastry Eater", "Couch Potato"]
}
//The skills attribute should be an array that contains strings of different skills, like: "Pokemon Master", "Kung Fu Legend", "Football Ninja" or any other skill. At least five of them.
function listSkills(person){
    console.log(`${person.name}'s skills: `)
    person.skills.forEach(skill=>
        console.log(`- ${skill}`))
}
//Then create a function that takes the person as argument and lists all the skills of the person to the console. 