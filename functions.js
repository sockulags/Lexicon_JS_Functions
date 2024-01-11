function greeting(){
    return "Hello there my friend!"
}

function greetingWithName(name){
    return `${greeting()} You mest be ${name}`
}

function addition(a,b){
    return a+b
}
let addSum = addition(5, 10)
console.log(addSum)

function division(a,b){
    return a/b
}
let divSum = addition(5, 10)
console.log(divSum)

function area(length,width){
    return length*width
}
let boxArea = area(6,10)
console.log(boxArea)

function greetingWithNameAgain(firstName, lastName){
    return `Hello ${firstName} ${lastName}! How are you doing?`
}
greetingWithNameAgain("Bo", "Ken")

function kmToMiles(km){
    let miles = (km/1.609);    
return miles.toFixed(1);
}
let marathonDistance = 42.195;
let miles = kmToMiles(marathonDistance);
console.log(`Converted ${marathonDistance}km to ${miles} miles, rounded to one decimal.`)

function celsiusToFahrenheit(degreesCelsius){
 return (degreesCelsius * 1.8) + 32;
}
let degCelsius = 20;
let degFahrenheit = celsiusToFahrenheit(degCelsius);
console.log(`${degCelsius} degress celsius is the same ${degFahrenheit} degrees fahrenheit.`)

function sumArray(numbersArr){
    let sum = 0
    numbersArr.forEach(num=>
        sum += num)
    return sum;
}
const arr=[2, 15, 4, 3, 7, 34, 2 ,12, 35, 67,34, 34]
let sum = sumArray(arr);
console.log(sum);

function meanValue(numbersArr){
    let mean = sumArray(numbersArr) / numbersArr.length
      return mean
}
let mean = meanValue(arr);
console.log(mean)

function systembolaget(age){
    if(age < 15) return "Get out of here!"
    else if(age < 18) return "Sorry, you are not old enough."
    else if(age < 20) return "Sorry, you must be at least 20. Why don't you try a bar instead?"
    else if(age <= 80) return "Thank you! Welcome!"
    else return "Where is your caretaker?"
}
for (let x=0; x < 5; x++){
    let age = Math.ceil(Math.random()*100);
    console.log(`Me: Im ${age} years old. Systembolaget: ${systembolaget(age)}`)
}

const person = {
    name: "Lucas",
    age: 20,
    city: "Örebro",
    skills: ["Pokemon Master", "Kung Fu Legend", "Football Ninja", "Professional Pastry Eater", "Couch Potato"]
}

function listSkills(person){
    console.log(`${person.name}'s skills: `)
    person.skills.forEach(skill=>
        console.log(`- ${skill}`))
}