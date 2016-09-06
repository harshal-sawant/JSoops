function Person(name){
  this.name = name;
}

Person.prototype.showName = function(){
  console.log('Name is '+ this.name);
}

function Student(name, faculty) {
  Person.apply(this,arguments);
  this.faculty = faculty;
}

// Inheritance
Student.prototype = new Person();
Student.prototype.constructor = Student;

Student.prototype.showFacutly = function(){
  console.log('Faculty is '+ this.faculty);
}

Student.prototype.showAllDetails = function(){
  console.log('Name is '+ this.name + ' and Facutly is '+ this.faculty);
}

//Instance
var p1 = new Person("Harshal");

var s1 = new Student("Harshal", 20 ,"IT");

console.log(p1.showName());
console.log(s1.showFacutly());

console.log(s1.showAllDetails());
