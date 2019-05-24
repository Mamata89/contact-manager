const person = {
    name: 'rakesh',
    skills : ['js', 'java', 'python'],
    //inside a method the value of this still refere to current method

    detailsWithOutBind : function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`)
        })
    },


    detailsWithBind : function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`)
        }.bind(this))
    },


    //inside a method, if there is a function, inside that function, value of this is the global object not the current object

    profile : function(){
        function someFunction() {
            console.log(this.name)
        }
        someFunction()
        return this
    }

}

console.log('without using bind')
 person.detailsWithOutBind()


 console.log('with using bind')
 person.detailsWithBind()

console.log("used inside a function")
console.log(person.profile())

