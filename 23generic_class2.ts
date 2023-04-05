class ClassPropA {
  name: string = "Class A";
}

class ClassPropB<T> {
  propB: T;

  constructor(prop: T) {
    this.propB = prop;
  }
}

const classPropA = new ClassPropA();
const classPropB = new ClassPropB(classPropA);

console.log(classPropB);
