/** Typical API */

class SimpleMap {
  constructor() {
    this._items = [];
  }

  // O(1)
  // Sets key to val
  set(k, v) {
    this._items.push([k, v]);
    //              ['name', 'jordan']
  }

  // O(n)
  // Retrieve values for key
  get(k) {
    let kv = this._items.find((kv) => k === kv[0]);
    return kv ? kv[1] : undefined;
  }

  // O(n)
  // Figure out if that key is in there
  has(k) {
    return this._items.find((kv) => k === kv[0]) !== undefined;
  }

  // O(n)
  // Delete entry for key
  delete(k) {
    let i = this._items.findIndex((kv) => k === kv[0]);
    if (i !== -1) this._items.splice(i, 1);
  }

  // O(n)
  // Iterable of keys
  keys() {
    return this._items.map((kv) => kv[0]);
  }

  // O(n)
  values() {
    return this._items.map((kv) => kv[1]);
  }

  // O(n)
  // Iterable of key/value pairs
  entries() {
    return this._items;
  }
}

// [['color', 'orange'], ['age', 29]]

/** Summing each character code for each character in a string and
 returning a single number using reduce */

// function hash(key) {
//   return Array.from(key).reduce(
//     (accum, char) => accum + char.charCodeAt(),
//     0
//   );
// }
// function hash(key, arrayLen) {
//   const hash = Array.from(key).reduce(
//     (accum, char) => accum + char.charCodeAt(),
//     0
//   );

//   return hash % arrayLen;
// };

/** Hashing
- We might get huge index #s, though
- For “supercalifragiliciousexpialadocious”, we’d get #3,747
- If we only needed to map 10 different words, we’d waste space
- Solution: Use modulo (%) to truncate: hash % array.length

- What is we get the same number?
  - We’ll use “Horner’s Method” to make order meaningful:
    - For each letter, we add H * currHash + currLetter
 */

/** Runtime of Hash
- Amount of work to hash key isn’t related to # items in map
- In our implementation: it is related to length of input string
    - So we can call it O(k), where k is #-chars-in-string
- Real-world versions often use part of string (eg first 100 chars)
    - These then could be O(1), as length-of-key doesn’t affect worst case
- We’ll assume hash is O(1) in discussion of runtime for hash tables */

function hash(key, array_length) {
  // Prime number to use with Horner's method
  const H_PRIME = 37;

  let numKey = Array.from(key).reduce(
    (accum, char) => accum * H_PRIME + char.charCodeAt(),
    0
  );

  return numKey % array_length;
}

class HashMap {
  constructor() {
    this._items = [];
  }

  // Ex. ('apple', 'red')
  set(k, v) {
    // Creates sum of hashed key.
    // We want the number we get back to be modded by 10, this takes up less space
    const hashedKey = hash(k, 10);

    // Store the key's value at that hashedKey index in the array
    this._items[hashedKey] = v;
  }
  get(k) {
    // Creates sum of hashed key.
    // We want the number we get back to be modded by 10, this takes up less space
    const hashedKey = hash(k, 10);

    // return the value that is in the hashedKey index
    return this._items[hashedKey];
  }
}
