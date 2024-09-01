// Base class
class Animal {
    constructor(species, age) {
        this.species = species;
        this.age = age;
    }

    makeSound() {
        console.log(`${this.species} makes a sound`);
    }
}

// Derived class
class Dog extends Animal {
    constructor(name, breed, age) {
        super("Dog", age);
        this.name = name;
        this.breed = breed;
    }

    makeSound() {
        console.log(`${this.name} the ${this.breed} barks`);
    }
}

// Example usage
const myDog = new Dog("Buddy", "Golden Retriever", 3);
myDog.makeSound();
