function Person() {
    this.name = "harshal";
    this.age = 10;
}

function Student() {
  this.dept = "IT";
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

var p1 = new Person();
var s1= new Student();

console.log('-All Properties of Object ----------');
for ( var i in p1) {
  console.log(i);
}

console.log('-All Properties of Object ----------');

for ( var i in p1) {
  console.log(i);
}

console.log('- Showing own property----------');

for ( var i in s1) {
  if(s1.hasOwnProperty(i)) {
      console.log(i);
  }
}
