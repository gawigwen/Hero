var age = 25
var name = "Makoto"
var gender = "female"
var weapon = "revolver"

function warrior(age){
	if(age < 18){
		return "is just beginning"
	}else if(age >= (21 >= 40)){
		return "has seen a few battles"
	}else if(age > 40){
		return "has lived through many epic battles"
	}
}
var warriorage = warrior(age)


function newwarriror(name){
	if(name == "Makoto"){
		return  name +" is our lovable hero , who " + warriorage + " with her trusty " +weapon
	}else{
		return "You are not worthy"
	}
}
var character = newwarriror(name)
console.log(character)

var count;
var animal = "snake"
function animalHouse(x, y){
	return x + y
}
count = animalHouse(1,1)

function animalClub(animalHouse){
	if(count >= 2){
		return "We have too many "+animal+"s"
	}
}
console.log(animalClub(animalHouse))

var avenger = "Iron Man"
function avengerAssemble(hero){
	if(hero == "Iron Man"){
		return avenger + " suit up!"
	}else if(hero == "Captain America"){
		return avenger + " raise your shield!"
	}else if (hero == "Black Widow"){
		return avenger + " we have a target for you"
	}else{
		return "Sorry, you are not needed fir this mission"
	}
}
console.log(avengerAssemble(avenger))

function lights(age, count){
	if(age > count){
		return "And then there was light"
	}else{
		return "Lights out"
	}
}
console.log(lights(age, count))

var carType = "Tesla"
var color = "red"
var num = -5

function car(carType){
	if(car == "Tasla"){
		return "We have "+ color + carType
	}else{
		return "We don't haev any blue Toyotas in stock"
	}
}
console.log(car(carType))