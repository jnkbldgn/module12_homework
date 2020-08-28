function hasProperty(key, target) {
  return target[key] !== undefined;
}

const proto = {
  b: '1'
};

const desc = {
  c: null,
}

const obj = Object.create(proto, Object.getOwnPropertyDescriptors(desc));

console.info(hasProperty('b', obj));
console.info(hasProperty('c', obj));
console.info(hasProperty('d', obj));