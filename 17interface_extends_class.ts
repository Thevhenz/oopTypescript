class Animals {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface IShark extends Animals {
  Swim(): void;
}

class Shark implements IShark {
  constructor(public name: string) {}
  Swim(): void {
    console.log("The shark swims");
  }
}

let shark = new Shark("Baby Shark");
console.log(shark);
shark.Swim();
