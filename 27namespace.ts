namespace NamespaceExample {
  export class Animals {}
  export const frog = new Animals();
}

const fish = new NamespaceExample.Animals();
let frog2 = NamespaceExample.frog;
