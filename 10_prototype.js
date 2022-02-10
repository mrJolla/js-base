/*
* Каждый объект имеет свой прототип, который берется от родительского элемента от которого был создан данный объект.
* Для получения род. прототипа используется:
* __proto__ (ES6)
* Object.getPrototypeOf() (ES5)
* */

// function Cat(name, color) {
//   this.name = name
//   this.color = color
// }
//
// Cat.prototype.voice = function () {
//   console.log(`Cat ${this.name} says meow`)
// }
//
// const cat = new Cat('Kot', 'black')
//
// console.log(Cat.prototype)
// console.log(cat)
// console.log(cat.__proto__ === Cat.prototype)
// console.log(cat.constructor)

// ==============================

// function Person() {}
//
// Person.prototype.legs = 2
// Person.prototype.skin = 'white'
//
// const person = new Person()
// person.name = 'Timur'

// console.log('skin' in person)
// console.log(person.legs)
// console.log(person.name)
//
// console.log(person.hasOwnProperty('name'))
// console.log(person.hasOwnProperty('skin'))

// Object.create()
const proto = {
  year: 2019
}
const myYear = Object.create(proto)

console.log(myYear.year)

proto.year = 2200

console.log(myYear.year)

// console.log(myYear.hasOwnProperty('year'))
// console.log(myYear.__proto__ === proto)
