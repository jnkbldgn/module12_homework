function Appliance(brand, power) {
  this.active = false;
  this.brand = brand;
  this.power = power;
}

Appliance.prototype.turnOn = function() {
  this.active = true;
}
Appliance.prototype.turnOff = function() {
  this.active = false;
}
Appliance.prototype.getPowerСonsumption = function() {
  return this.active ? this.power : 0;
}

function Monitor(diagonal, brand, power) {
  this.diagonal = diagonal;
  this.brand = brand;
  this.power = power;
}

Monitor.prototype = new Appliance();

Monitor.prototype.getSize = function() {
  console.info(`The size of this monitor is ${this.diagonal} inches.`);
}


function Keyboard(type, keys, brand, power) {
  this.type = type;
  this.keys = keys;
  this.brand = brand;
  this.power = power;
}

Keyboard.prototype = new Appliance();

Keyboard.prototype.getType = function() {
  console.info(`This is a ${this.type} keyboard`);
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
