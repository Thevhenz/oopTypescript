// Public : can be accessed in all classes.
// Protected : can be accessed in its own class and its derived classes.
// Private : can only be accessed in its own class.
// Readonly : can only be read.

class getAnimals5 {
  public name: string;
  protected color: string;
  private feet: number;

  constructor(name: string, color: string, feet: number) {
    this.name = name;
    this.color = color;
    this.feet = feet;
  }
}

class Frog extends getAnimals5 {
  private eggAge: number = 4;
  private tadpoleAge: number = 7;
  private frogAge: number = 90;

  getAge(): void {
    console.log(this.eggAge + this.tadpoleAge + this.frogAge);
  }
}

const frog = new Frog("frog", "green", 4);
console.log(frog);
frog.getAge();
