interface androidPhone {
  name: string;

  menu(): void;
  home(): void;
  back(): void;
}

interface applePhone {
  name: string;

  menu(): void;
}

class Samsung implements androidPhone {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  menu(): void {
    console.log("Menu tapped");
  }
  home(): void {
    console.log("Home tapped");
  }
  back(): void {
    console.log("Back tapped");
  }
}

class Iphone implements applePhone {
  constructor(public name: string) {}

  menu(): void {
    console.log("Main menu iphone");
  }
}

class GameA {
  private phone: androidPhone;

  constructor(phone: androidPhone) {
    this.phone = phone;
  }

  back() {
    console.log("Back to main menu in game");
  }

  menu() {
    this.phone.menu();
  }

  home() {
    this.phone.home();
  }
}

const samsung = new Samsung("Samsung S7");
console.log(samsung.name);
const gameA = new GameA(samsung);
gameA.back();
gameA.menu();

const iphone = new Iphone("Iphone XR");
// const gameB = new GameA(iphone); // Error
