// Base class
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Vehicle Info: ${this.year} ${this.make} ${this.model}`);
    }
}

// Derived class
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    displayInfo() {
        super.displayInfo();
        console.log(`Doors: ${this.doors}`);
    }
}

// Example usage
const myCar = new Car("Toyota", "Camry", 2020, 4);
myCar.displayInfo();
