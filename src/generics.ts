type Filter = {
  <A>(array: A[], f: (item: A) => boolean): A[],
}

const filter: Filter = (array, f) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (f(item)) {
      result.push(item);
    }
  }
  return result;
};

console.log(filter([1, 2, 3], (_) => _ > 2));
console.log(filter(['a', 'b'], (_) => _ !== 'b'));

const names = [
  { firstName: 'beth' },
  { firstName: 'caitlyn' },
  { firstName: 'xin' },
];
console.log(filter(names, (_) => _.firstName.startsWith('b')));

type Mapp<B, C> = {
  (array: B[], f: (item: B) => C): C[]
};

const numToStrMapper: Mapp<number, string> = (array, f) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    result.push(f(item));
  }
  return result;
};

console.log(numToStrMapper([1, 2, 3], (_) => _.toString() + '回目'));
