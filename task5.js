class Appliance {
  constructor(brand, power) {
    this.active = false;
    this.brand = brand;
    this.power = power;
  }
  turnOn() {
    this.active = true;
  }
  turnOff() {
    this.active = false;
  }
  getPowerСonsumption() {
    return this.active ? this.power : 0;
  }
}

class Monitor extends Appliance {
  constructor(diagonal, brand, power) {
    super(brand, power)
    this.diagonal = diagonal;
  }
  getSize() {
    console.info(`The size of this monitor is ${this.diagonal} inches.`);
  }
}

class Keyboard extends Appliance {
  constructor(type, keys, brand, power) {
    super(brand, power)
    this.type = type;
    this.keys = keys;
  }
  getType() {
    console.info(`This is a ${this.type} keyboard`);
  }
}

const myMonitor = new Monitor(24, 'Asus', 300);
const myKeyboard = new Keyboard('mechanical', 139, 'Logitech', 50);

console.info(myKeyboard.getPowerСonsumption());
console.info(myMonitor.getPowerСonsumption());
myKeyboard.turnOn();
myMonitor.turnOn();
console.info(myKeyboard.getPowerСonsumption());
console.info(myMonitor.getPowerСonsumption());
myKeyboard.turnOff();
myMonitor.turnOff();
console.info(myKeyboard.getPowerСonsumption());
console.info(myMonitor.getPowerСonsumption());
myKeyboard.getType();
myMonitor.getSize();
