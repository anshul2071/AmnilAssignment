

//getcarinfor method is defined as key with value return statement
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getCarInfo: function () {
      return ` CarBrad is ${this.brand} and its model is ${this.model} and it is model of (${this.year})`;
    }
  };
  
  console.log(car.getCarInfo());  // Output: Toyota Corolla (2020)
  


  
