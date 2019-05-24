const person = {
    name: 'rakesh',
    skills : ['js', 'java', 'python'],
    //inside a method the value of this still refere to current method

    //inside a method, if there is an arrow function, inside that function, value of this will still be the current object
    details : function(){
        this.skills.forEach((skill) => {
            console.log(`${this.name} knows ${skill}`)
        })
    },


   


    //inside a method, if there is an arrow function, inside that function, value of this will still be the  current object

    profile : function(){
        const  someFunction = () => {
            console.log(this.name)
        }
        someFunction()
        return this
    }

}


 person.details()


console.log(person.profile())

