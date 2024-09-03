const sMark = [10, 20, 40, 50] //structuring  //with multiple data type
var [a,...b] = sMark //Destructuring
console.log(a,b)

//destructuring of the object
const book =
{
    title : "3 mistake of my life",
    auther : "Chetan"
};
let {title, author} = book
console.log(book, author)