interface IStore {
  name: string;
  profit: number;
  getName(): string;
  getProfit(): number;
}

class StoreA implements IStore {
  name: string;
  profit: number = 2500;
  getName(): string {
    return this.name;
  }
  getProfit(): number {
    return this.profit;
  }
}

class StoreB implements IStore {
  name: string;
  profit: number = 5000;
  getName(): string {
    return this.name;
  }
  getProfit(): number {
    return this.profit;
  }
}

class FoodProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(
      `This ${this.name} was sold for ${this.store.getProfit() + this.price}.`
    );
  }
}

class FashionProduct {
  private store: IStore;
  private name: string;
  private price: number;

  constructor(store: IStore, name: string, price: number) {
    this.name = name;
    this.price = price;
    this.store = store;
  }

  sell(): void {
    console.log(
      `This ${this.name} was sold for ${this.store.getProfit() + this.price}.`
    );
  }
}

const storeA = new StoreA();
const storeB = new StoreB();

const hotdog = new FoodProduct(storeA, "Hotdog", 20000);

const kebaya = new FashionProduct(storeB, "Kebaya", 280000);

hotdog.sell();
kebaya.sell();
