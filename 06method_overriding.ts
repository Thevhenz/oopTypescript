class getAnimals4 {
  name: string;

  hasPosion(): void {
    console.log(`That snake has not poison.`);
  }
}

class Snake extends getAnimals4 {
  hasPosion(): void {
    console.log(`That snake has poison.`);
  }
}

let snake = new Snake();
snake.hasPosion();
