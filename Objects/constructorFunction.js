function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.greet = function () {
      return `Hello, my name is ${this.name} and I am a ${this.profession}`;
    };
  }
  
  const person1 = new Person("Alice", 25, "Software Developer");
  const person2 = new Person("Bob", 30, "Civil Engineer");
  
  console.log(person1.greet());  // Output: Hello, my name is Alice
  console.log(person2.greet());  // Output: Hello, my name is Bob
  