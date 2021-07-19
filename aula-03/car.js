class Vehicle {
  constructor(name) {
    this.name = name;
    this.wheels = 4;
    this.doors = 4;
  }
}

class Car extends Vehicle {
  constructor(model) {
    super();
    this.model = model;
  }
}

const car = new Car();

console.log(car);
