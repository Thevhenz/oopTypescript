abstract class getAnimals4 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  eating(): void {
    console.log(`The ${this.name} is eating.`);
  }

  abstract move(): void;
}

class Cat extends getAnimals4 {
  constructor() {
    super("Cat");
  }

  move(): void {
    console.log(`The ${this.name} is walking.`);
  }
}

const cat = new Cat();
cat.move();

class Birds extends getAnimals4 {
  constructor() {
    super("Bird");
  }

  move(): void {
    console.log(`The ${this.name} flies.`);
  }
}

const bird = new Birds();
bird.move();
