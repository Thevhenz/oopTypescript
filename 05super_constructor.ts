class getAnimals3<T> {
  name: string;
  hasFeet: T;

  constructor(name: string, feet: T) {
    this.name = name;
    this.hasFeet = feet;
  }
}

class Snack<T> extends getAnimals3<T> {
  hasPoison: boolean;

  constructor(name: string, feet: T, hasPosion: boolean) {
    super(name, feet);
    this.hasPoison = hasPosion;
  }
}

let snack1 = new Snack("King Cobra", false, true);
console.log(snack1);

let snack2 = new Snack("Python", false, false);
console.log(snack2);
