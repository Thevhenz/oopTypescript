// Option 1
class getAnimals {
  name: string;
  color: string;
  hasFeet: number;

  constructor(name: string, color: string, feet: number) {
    this.name = name;
    this.color = color;
    this.hasFeet = feet;
  }
}

// Option 2
class getAnimaals {
  constructor(public name: string, public color: string, public feet: number) {}
}

let animal01 = new getAnimals("Puma", "Black", 4); // Option 1
let animal02 = new getAnimaals("Tiger", "Black-white", 4); // Option 2
console.log(animal01);
console.log(animal02);
