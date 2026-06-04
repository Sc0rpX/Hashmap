# Custom HashMap Implementation

A from-scratch implementation of a Hash Map data structure in JavaScript. This project demonstrates how hash tables work under the hood, including hashing algorithms, memory management, and collision resolution using separate chaining (Linked Lists).

## Features

This class includes all the core functionalities of a standard hash map:
* **`set(key, value)`**: Adds or updates a key-value pair.
* **`get(key)`**: Retrieves the value associated with a specific key.
* **`has(key)`**: Returns a boolean indicating if a key exists.
* **`remove(key)`**: Deletes a specific key-value pair from the map.
* **`length()`**: Returns the total number of stored keys.
* **`clear()`**: Wipes all data from the hash map.
* **`keys()`, `values()`, `entries()`**: Iterators that extract stored data into arrays.
* **Dynamic Resizing**: Automatically doubles bucket capacity and rehashes all entries when the 0.75 load factor is exceeded.

## File Structure

* `HashMap.js`: The main HashMap class logic.
* `LinkedList.js` & `Node.js`: The custom linked list implementation used inside the buckets to handle data collisions.
* `main.js`: The primary testing script.

