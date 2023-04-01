class getAnimals2 {
  name: string;
  feet: number;
  color: string;
}

class Bird extends getAnimals2 {
  isFlying(): void {
    console.log(`The ${this.name} is flying.`);
  }
}

let cendrawasihBird = new Bird();
cendrawasihBird.name = "Cendrawasih bird";
cendrawasihBird.feet = 2;
cendrawasihBird.color = "Colorfull";
console.log(cendrawasihBird);
cendrawasihBird.isFlying();
