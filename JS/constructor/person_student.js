// Base class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// Derived class
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Student ID: ${this.studentId}`);
    }
}

// Example usage
const student = new Student("Alice", 21, "S12345");
student.displayInfo();
