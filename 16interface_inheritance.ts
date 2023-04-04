interface Vehicle {
  wheels: number;
  name: string;
}

interface Car extends Vehicle {
  doors: number;
}

interface Motorcycle extends Vehicle {
  mSeat(): void;
}

// Car
class Civic implements Car {
  constructor(
    public wheels: number,
    public name: string,
    public doors: number
  ) {}
}

// Motorcycle
class Supra implements Motorcycle {
  constructor(public wheels: number, public name: string) {}

  mSeat(): void {
    console.log("Opening the motorcycle seat");
  }
}

// call car
let civic = new Civic(4, "Honda Civic", 4);
console.log(civic);

// call motorcycle
let supra = new Supra(2, "Honda Supra 125");
console.log(supra);
supra.mSeat();
