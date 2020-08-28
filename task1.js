function showKeys(item) {
  console.info(...Object.keys(item));
}

const proto = {
  a: 2,
  b: 3,
};

const desc = {
  c: 4,
  d: 5
}

const obj = Object.create(proto, Object.getOwnPropertyDescriptors(desc));
 

showKeys(obj);