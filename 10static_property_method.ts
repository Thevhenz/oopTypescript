class Chicken {
  static legs: number = 2;

  static walking() {
    console.log(`That chicken walks on ${this.legs} legs`);
  }

  getLegs() {
    console.log(Chicken.legs);
  }
}

let chicken = new Chicken();
console.log(Chicken.walking());
chicken.getLegs();

Chicken.legs = 4;

let chicken2 = new Chicken();
console.log(Chicken.walking());
chicken.getLegs();
