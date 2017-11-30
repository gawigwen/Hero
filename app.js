var age;
var name = "Jake"

function warrior(age){
	if(age < 18){
		return "is just beginning"
	}else if(age >= (20 >= 40)){
		return "has seen a few battles"
	}else if(age > 40){
		return "has lived through many epic battles"
	}
}
var warriorage = warrior(45)
console.log(warriorage)

function newwarriror(name){
	if(name == "Jake"){
		return "Jake is our lovable hero , who has seen a few battles with his trusty whip"
	}else{
		return "You are not worthy"
	}
}
var character = newwarriror(name)
console.log(character)
