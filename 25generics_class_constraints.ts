interface IProducts {
  sell(): void;
}

class VehicleProduct implements IProducts {
  sell(): void {
    console.log("The vehicles have been sold.");
  }
}

class FoodProduct2 implements IProducts {
  sell(): void {
    console.log("The Food have been sold.");
  }
}

function sellProducts<T extends IProducts>(products: T[]): void {
  products.forEach((product) => product.sell());
}

const vehicles = new VehicleProduct();
const foods = new FoodProduct2();

sellProducts([vehicles, foods]);
