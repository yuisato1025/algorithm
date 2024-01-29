const Burgers = Object.freeze({
  CHEESE: 'CHEESE',
  DELUXECHEESE: 'DELUXECHEESE',
  VEGAN: 'VEGAN',
  DELUXEVEGAN: 'DELUXEVEGAN',
});

class Burger {
  name: string;
  bread: string;
  sauce: string;
  toppings: string[];
  constructor() {
    if (new.target === Burger) {
      throw new Error('Cannot instantiate an abstract class.');
    }
    this.name = '';
    this.bread = '';
    this.sauce = '';
    this.toppings = [];
  }

  prepare() {
    throw new Error('prepare() must be implemented.');
  }

  cook() {
    throw new Error('cook() must be implemented.');
  }

  serve() {
    throw new Error('serve() must be implemented.');
  }

  getName() {
    return this.name;
  }
}

class CheeseBurger extends Burger {
  constructor() {
    super();
    this.name = 'Cheese Burger';
  }

  prepare() {}

  cook() {}

  serve() {}
}

class DeluxeCheeseBurger extends Burger {
  constructor() {
    super();
    this.name = 'Deluxe Cheese Burger';
  }

  prepare() {}

  cook() {}

  serve() {}
}
class VeganBurger extends Burger {
  constructor() {
    super();
    this.name = 'Vegan Burger';
  }

  prepare() {}

  cook() {}

  serve() {}
}

class DeluxeVeganBurger extends Burger {
  constructor() {
    super();
    this.name = 'Deluxe Vegan Burger';
  }

  prepare() {}

  cook() {}

  serve() {}
}

class BurgerStore {
  constructor() {
    if (new.target === BurgerStore) {
      throw new Error('Cannot instantiate an abstract class.');
    }
  }

  createBurger(item): Burger {
    throw new Error('createBurger() must be implemented.');
  }

  orderBurger(type) {
    let burger = this.createBurger(type);
    console.log(`--- Making a ${burger.getName()} ---`);
    burger.prepare();
    burger.cook();
    burger.serve();
    return burger;
  }
}

class CheeseBurgerStore extends BurgerStore {
  createBurger(item): Burger {
    if (item === Burgers.CHEESE) {
      return new CheeseBurger();
    } else if (item === Burgers.DELUXECHEESE) {
      return new DeluxeCheeseBurger();
    } else {
      return null;
    }
  }
}

class VeganBurgerStore extends BurgerStore {
  createBurger(item): Burger {
    if (item === Burgers.VEGAN) {
      return new CheeseBurger();
    } else if (item === Burgers.DELUXEVEGAN) {
      return new DeluxeCheeseBurger();
    } else {
      return null;
    }
  }
}

const cheeseStore = new CheeseBurgerStore();
const veganStore = new VeganBurgerStore();
let burger = cheeseStore.orderBurger(Burgers.CHEESE);
burger = veganStore.orderBurger(Burgers.DELUXEVEGAN);
// More code to order other burgers...
