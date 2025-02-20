const student = {
    firstName: "Anshul",
    lastName: "Rawal",
    age: 22,
    marks: {
        Science : 72,
        Maths: 85,
        English: 90

    },

     fullName: function (){
        return this.firstName + this.lastName;
        
    }


}

//adding new property keyvalye pair

student.hobby = "Gaming";


//modify existing keyvalue
student.age = 23;


console.log(student);

console.log(`FullName: ${student.fullName()}, Age: ${student.age}`)

