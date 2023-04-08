// Interface hanya bisa memakai objek type.
interface IUser {
  name: string;
}
// interface name = string // akan error jika di interface karena berbentuk variable

// Type bisa berbentuk sebagai objek dan variable
type Tuser = {
  name: string;
};

type age = string;

// Interface bisa di merge sedangkan type tidak bisa
interface IDinosaurus {
  name: string;
}

interface IDinosaurus {
  weight: number;
}

class Dino implements IDinosaurus {
  constructor(public name: string, public weight: number) {}
}

const dino = new Dino("T-rex", 1000);

// Interface bisa mengextends sebuah kelas sedangkan type tidak.

// type bisa melakukan intersection seperti merge pada  interface.
type Name = {
  name: string;
};
type Age = {
  age: number;
};

type employee1 = Name & Age;
type employee2 = Name | Age;

// Pakai interface jika ingin membuat objek baru atau method dari sebuah objek.

// Pakai type jika ingin membuat variable atau function
