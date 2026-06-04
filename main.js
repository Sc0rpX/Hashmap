import HashMap from './Hashmap.js';

// Initialize the hash map
const testMap = new HashMap();

console.log("--- 1 & 2. Testing hash() and set() ---");
// Populating the hash map with initial data
testMap.set('apple', 'red');
testMap.set('banana', 'yellow');
testMap.set('carrot', 'orange');
testMap.set('dog', 'brown');
testMap.set('elephant', 'gray');
testMap.set('frog', 'green');
testMap.set('grape', 'purple');
testMap.set('hat', 'black');
testMap.set('ice cream', 'white');
testMap.set('jacket', 'blue');
testMap.set('kite', 'pink');
testMap.set('lion', 'golden');

// Test updating an existing key
console.log("Updating 'apple' from 'red' to 'green'...");
testMap.set('apple', 'green'); 

// Test the hash method explicitly (should return a number within capacity)
console.log(`hash('apple'): ${testMap.hash('apple')}`);


console.log("\n--- 3. Testing get() ---");
// Test an existing key and a non-existent key
console.log(`get('apple'): ${testMap.get('apple')}`); // Expected: green
console.log(`get('unicorn'): ${testMap.get('unicorn')}`); // Expected: null


console.log("\n--- 4. Testing has() ---");
// Test an existing key and a non-existent key
console.log(`has('banana'): ${testMap.has('banana')}`); // Expected: true
console.log(`has('zebra'): ${testMap.has('zebra')}`); // Expected: false


console.log("\n--- 5. Testing remove() ---");
// Test removing an existing key and a non-existent key
console.log(`remove('dog'): ${testMap.remove('dog')}`); // Expected: true
console.log(`remove('missingKey'): ${testMap.remove('missingKey')}`); // Expected: false
console.log(`has('dog') after removal: ${testMap.has('dog')}`); // Expected: false


console.log("\n--- 6. Testing length() ---");
// We added 12 items, updated 1 (size unchanged), and removed 1 (size - 1)
console.log(`Total length: ${testMap.length()}`); // Expected: 11


console.log("\n--- 8, 9 & 10. Testing Iterators (keys, values, entries) ---");
console.log("Keys array:", testMap.keys());
console.log("Values array:", testMap.values());
console.log("Entries array:", testMap.entries());


console.log("\n--- 7. Testing clear() ---");
testMap.clear();
console.log(`Length after clear(): ${testMap.length()}`); // Expected: 0
console.log(`Entries after clear():`, testMap.entries()); // Expected: []