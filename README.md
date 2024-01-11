
## Greeting
#### Create a function that greets you with "Hello there my friend!".
```js
function greeting(){
    return "Hello there my friend!"
}
```
##Greeting with name
####Create a function that takes a string as an argument and writes out: "Hello there my friend! You must be [name]!"
```js
function greetingWithName(userName){
    return `${greeting()} You mest be ${userName}`
}
```
## Addition
#### Create a function that takes two numbers as arguments and returns the sum of those two numbers. Save that sum in a variable and log it to the console.
```js
function addition(a,b){
    return a+b
}
let addSum = addition(5, 10)
console.log(addSum)
```
Output:
```
15
```

## Division
#### Create a function that takes two numbers as arguments and returns the quotient of those numbers. Save that to variable and log it to the console. Remember that you can't divide with zero. So a check must be than in order to prevent the calculation if you are trying to divide by zero. Log an error message to the console if that happens.
```js
function division(a,b){
    return a/b
}
let divSum = addition(5, 10)
console.log(divSum)
```
Output:
```
0.5
```

## Area
#### Create a function that takes a length and a width of an imaginary box as arguments and return the area of that box. Log a message to the console that describes the area of the box.
```js
function area(length,width){
    return length*width
}
let boxArea = area(6,10)
console.log(boxArea)
```
Output:
```
60
```
## Greeting with name again
#### Create a function that takes a first name and a last name as arguments. Return a template literals that says: "Hello [firstName] [lastName]! How are you doing?"
```js
function greetingWithNameAgain(firstName, lastName){
    return `Hello ${firstName} ${lastName}! How are you doing?`
}
greetingWithNameAgain("Bo", "Ken")
```
Output:
```
Hello Bo Ken! How are you doing?
```
## Distance converter
#### Create a function that takes a distance in kilometres as an arguments and returns the distanse in miles. (The American kind of miles). Save to a variable and log a description of the conversion to the console.
```js
function kmToMiles(km){
    let miles = (km/1.609);    
return miles.toFixed(1);
}
let marathonDistance = 42.195;
let miles = kmToMiles(marathonDistance);
console.log(`Converted ${marathonDistance}km to ${miles} miles, rounded to one decimal.`)
```
Output:
```
Converted 42.195km to 26.2 miles, rounded to one decimal.
```
## Temperature converter
#### Create a function that takes a celsius temperature as an argument and returns the temperature in farenheit. Log the result message to the console.
```js
function celsiusToFahrenheit(degreesCelsius){
 return (degreesCelsius * 1.8) + 32;
}
let degCelsius = 20;
let degFahrenheit = celsiusToFahrenheit(degCelsius);
console.log(`${degCelsius} degress celsius is the same ${degFahrenheit} degrees fahrenheit.`)
```
Output:
```
20 degress celsius is the same 68 degrees fahrenheit.
```
## Sum (Needs knowledge of Arrays)
#### Create a function that takes an array of 10 different numbers as an argument. Calculate the total sum of all the numbers in the array and return that value. Log it to the console.
```js
function sumArray(numbersArr){
    let sum = 0
    numbersArr.forEach(num=>
        sum += num)
    return sum;
}
const arr=[2, 15, 4, 3, 7, 34, 2 ,12, 35, 67,34, 34]
let sum = sumArray(arr);
console.log(sum);
```
Output:
```
249
```
## Mean value (Needs knowledge of Arrays)
#### Create a function that takes an array of numbers as an argument. Return the mean value of all those numbers, save it and log it to the console.
```js
function meanValue(numbersArr){
    let mean = sumArray(numbersArr) / numbersArr.length
      return mean
}
let mean = meanValue(arr);
console.log(mean)
```
Output:
```
20.75
```
## Systembolaget
#### Create a function that takes an age as an argument. Check the age and return one of the following messages.
```js
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
```
Output:
```
Me: Im 16 years old. Systembolaget: Sorry, you are not old enough.
Me: Im 85 years old. Systembolaget: Where is your caretaker?
Me: Im 69 years old. Systembolaget: Thank you! Welcome!
Me: Im 3 years old. Systembolaget: Get out of here!
Me: Im 77 years old. Systembolaget: Thank you! Welcome!
```
## List a persons' skills (Needs knowledge of Objects)
#### Create an person object that has the following attributes: - name - age - city - skills
```js
const person = {
    name: "Lucas",
    age: 20,
    city: "Örebro",
    skills: ["Pokemon Master", "Kung Fu Legend", "Football Ninja", "Professional Pastry Eater", "Couch Potato"]
}
```
#### Then create a function that takes the person as argument and lists all the skills of the person to the console. 
 ```js
function listSkills(person){
    console.log(`${person.name}'s skills: `)
    person.skills.forEach(skill=>
        console.log(`- ${skill}`))
}
listSkills(person);
```
Output:
```
Lucas's skills:
- Pokemon Master
- Kung Fu Legend
- Football Ninja
- Professional Pastry Eater
- Couch Potato
```
