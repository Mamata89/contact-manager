const person = {
    name:'Rahul',
    greet : function(){
        return 'Hello my name is' + this.name
    }
}

console.log(person.greet())  //'Hello My name is Rahul'

const sayName = person.greet

console.log(sayName())  // 'Hello my name is undefined'
//bind methods help to set teh context of this keyword inside of a function

//what goes passed to the bind method ,will now become the value of this keyword

console.log(sayName.bind(person)())

function sayHello(){
    return 'HEllo my name is ' + this.name
}

console.log(sayHello.bind({ name : 'me'})())