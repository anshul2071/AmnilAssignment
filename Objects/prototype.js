function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
  }
  
  // Adding method to prototype
  Person.prototype.introduction = function () {
    return `Hello, my name is ${this.name} I am ${this.age} years old and my hobby is ${this.hobby}`;
  };
  
  const person1 = new Person("Ram", 25, "Football");
  const person2 = new Person("Monika", 30, "Dancing");
  
  console.log(person1.introduction()); 
  console.log(person2.introduction()); 
  
