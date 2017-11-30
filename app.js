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
		return  name +" is our lovable hero , who " + warriorage + " with hes trusty " +weapon
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

var hero = "Iron Man"
function avengerAssemble(hero){
	if(hero == "Iron Man"){
		return "Your suit is needed"
	}else if(hero == "Captain America"){
		return "We need you shield"
	}else if (hero == "Black Widow"){
		return "We have a target for you"
	}else{
		return "Sorry, you are not needed fir this mission"
	}
}
console.log(avengerAssemble(hero))
