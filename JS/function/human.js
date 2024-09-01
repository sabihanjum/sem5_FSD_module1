class Human
{
    age = 25;
    printAge= () => console.log(this.age);
}
class Person extends Human
{
    sName = "Tanya"
    age = 21;
    printName = () => console.log(this.sName)
}
const Person1 = new Person()
Person1.printAge()
Person1.printName()