class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

class Man extends Human {
  constructor(name) {
    super(name, 'male');
  }
}

class Woman extends Human {
  constructor(name) {
    super(name, 'female');
  }
}

class God {
  static create() {
    const adam = new Man('Adam');
    const eve = new Woman('Eve');
    return [adam, eve];
  }
}

export { God, Human, Man, Woman };
