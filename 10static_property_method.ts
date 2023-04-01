class Chicken {
  static legs: number = 2;

  static walking() {
    console.log(`That chicken walks on ${this.legs} legs`);
  }

  getLegs() {
    console.log(Chicken.legs);
  }
}

console.log(Chicken.walking());

let chicken = new Chicken();

chicken.getLegs();
