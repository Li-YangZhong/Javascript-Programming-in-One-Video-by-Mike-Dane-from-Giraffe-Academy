/***************
 * exercise files for the video tutorial "Javascript Programming In One Video by from Giraffe Academy"
 * 
 ***************/
// writing text to the webpage

// document.write("<h1>Hellow World</h1>");
// document.write("<hr>");
// document.write("<p>This is a javascript tutorial</p>");
// alert("This is an alert");
// console.log('Logging to the console');
//===============

// var name = 'Eric';
// document.write('Your name is ' + name);

//================

//casting & converting

// document.write( 100 + Number('25') + "<br>");
// document.write( 100 + parseInt(25) + "<br>");
// document.write( 100 + parseFloat('50.99') + '<br>');
//=====================
//strings

// var greeting = "Hello";
// //indexes: 0123

// document.write( greeting.length + "<br>");
// document.write( greeting.charAt(0) + "<br>");
// document.write( greeting.indexOf("llo") + "<br>");
// document.write( greeting.indexOf("z") + "<br>");
// document.write( greeting.substring(2) + "<br>");
// document.write( greeting.substring(1,3) + "<br>");

//=====================
//numbers

// document.write( 10/3 + "<br>");
// document.write(10/3.0 + "<br>");
//==================

//Math class has useful math methods

// document.write( Math.pow(2,3) + "<br>");
// document.write( Math.sqrt(144) + "<br>");
// document.write( Math.round(2.7) + "<br>");
//=============

//user input

// var name = window.prompt('Enter your name: ');
// alert("Your name is " + name);
//===================

//getting HTML

// var header = document.getElementById('myHeader');
// header.style="color: blue; background-color: red;";
// document.write( header.getAttribute("giraffe"));
// header.innerHTML = "Elephant Academy";

//====================
//arrays

// var luckyNumbers = [];
// luckyNumbers = [4,8,15,16,"twenty",false];

// luckyNumbers[0] = 90;
// document.write(luckyNumbers[0] + "<br>");
// document.write(luckyNumbers[1] + "<br>");
// document.write(luckyNumbers.length);

//===================
//N Dimensional Arrays

// var numberGrid = [ [1,2], [3,4]];
// numberGrid[0][1] = 99;

// document.write(numberGrid[0][0] + "<br>");
// document.write(numberGrid[0][1] + "<br>");
//==============
//array functions

// var friends = new Array();
// friends.push("Oscar");
// friends.push("Angela");
// friends.push("Kevin");

// document.write( friends + "<br>");
// document.write( friends.indexOf("Angela") + "<br>");
// document.write( friends.indexOf("Z") + "<br>");
// document.write( friends.reverse() + "<br>");
// document.write( friends.sort() + "<br>");
//=============

// var student = {
//     name: "Jim",
//     major: "Business",
//     age: 19,
//     gpa: 2.5
// }

// student.name = "Andy";
// document.write( student.name + "<br>");
// document.write( student.major + "<br>");
// document.write(student.gpa + "<br>");
//============

//functions

// var sum = addNumbers(4,60);
// document.write(sum);

// function addNumbers(num1,num2) {
//     return num1 + num2;
// }
//=================

//Inline Event Listeners

// function handleClick(element) {
//     alert("Clicked " + element.id);
// }

//=================
// switch statements
// var myGrade = "A";
// switch(myGrade) {
//     case "A":
//         document.write('You Pass');
//         break;
//     case "F":
//         document.write("You fail");
//         break;
//     default:
//         document.write('Invalid grade');
// }
//==============
//while loops
// var index = 1;
// while(index <= 5){
//     document.write(index);
//     index++;
// }
//============
// var index = 6;
// do {
// 	document.write(index);
// 	index++;
// } while(idex <= 5);
//=============
// for loops

// for(var i = 0; i < 5; i++){
// 	document.write(i);
// }

//=================
//looping through all elements inside an array
// var luckyNums = [4,8,15,16,23,42];
// luckyNums.forEach(function(luckyNum){
// 	document.write(luckyNum + "<br>");
// })
//===============

//exception catching
// try{
// 	var x = y + 9;
// }catch(err){
// 	document.write(err)
// }finally{
// 	//this code always gets executed
// }
//==================

//classes & objects
// class Book{
// 	constructor(title, author){
// 		this.title = title;
// 		this.author = author;
// 	}

// 	readBook(){
// 		document.write("Reading " + this.title + " by " + this.author)
// 	}
// }

// var book1 = new Book("Harry Potter", "JK Rowling");

// document.write(book1.title + "<br>");
// book1.readBook();

//======================
//getters & setters

// class Book{
// 	constructor(title,author){
// 		this.title = title;
// 		this.author = author;
// 	}

// 	get title(){
// 		document.write("<p>getting</p>");
// 		return this._title;
// 	}

// 	set title(title){
// 		document.write("<p>setting </p>");
// 		this._title = title;
// 	}

// 	readBook(){
// 		document.write("Reading " + this.title + " by " + this.author)
// 	}
// }

// var book1 = new Book("Harry Potter", "JK Rowling");

// document.write(book1.title + "<br>");
// book1.readBook();

//==============
//inheritance

class Chef{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	makeChicken(){
		document.write("The chef makes chicken <br>");
	}

	makeSalad(){
		document.write("The chef makes salad<br>")
	}

	makeSpecialDish(){
		document.write("The chef makes a special dish <br>");
	}
}

class ItalianChef extends Chef{
	constructor(name, age, countryOfOrigin){
		super(name,age);
		this.countryOfOrigin = countryOfOrigin;
	}

	makePasta(){
		document.write("The chef makes pasta <br>");
	}

	//overridden
	makeSpecialDish(){
		document.write("The chef makes chicken parm <br>");
	}
}

var myChef = new Chef("Gordon Ramsay", 50);
myChef.makeChicken();

var myItalianChef = new ItalianChef("Massimo Bottura", 55, "Italy");
myItalianChef.makeChicken();
myItalianChef.makeSpecialDish();
document.write(myItalianChef.age);
