// Objects are variables too. But objects can contain many values.
const car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};

console.log(car.type)
console.log(car)
console.log(car["type"])


// methods can have properties and method too
// example 

const student = {

    name: "Himanshu",
    rollno: 71,
    marks: 94,

    printMarks:function () {
        console.log(this.marks);
    },

};

console.log(student)
student.printMarks()

// this ->  refers to an object that is executing the current piece of code

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }


//   new ->  to create a object from a constructor function
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myFather)

//prototypes

// Define a constructor function
function Employee(salary) {
    this.salary = salary;
}

// Add a method to the prototype of the constructor function
Employee.prototype.calculate = function() {
    console.log("Salary is 10000");
};

// Create an instance of Employee
const satish = new Employee(4556);

// Now you can call the method on the instance
satish.calculate();

// Output: Salary is 10000
