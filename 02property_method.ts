class Animals<T> {
  // Property
  name: string;
  hasFoot: T;
  isMammals: boolean;

  // Method
  isEating() {
    console.log(`The ${this.name} is eating.`);
  }
}

const animal1 = new Animals();
animal1.name = "Cat";
animal1.hasFoot = true && 4;
animal1.isMammals = true;

console.log(animal1);
animal1.isEating();
