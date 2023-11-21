function invert_key_value(obj){
    const inverted_Obj = Object.fromEntries(
        Object.entries(obj).map(([key, value])=>[value, key])
    );
    return inverted_Obj;
    }
console.log(invert_key_value({name: 'Moumita', age: 27, city: 'kolkata'}));

/*
So, the 3 steps process are:

1st : Convert the Object into an Array with the help of Object.entries() method.
2nd : Swap the key-value into value-key of the array, with the help of map(([key, value])=>[value, key]).
3rd : Convert the array into an Object again, with the help of Object.fromEntries() method.
*/ 

/*
1. Object.entries() method is a built-in method in JavaScript.
It is used to retrieve an array of key-value pairs from an object.
=> The method takes an object as its parameter.
=> Return Array of key-value pairs ([key, value])

Example:
const person = { name: 'John', age: 30, city: 'New York' };
const entries = Object.entries(person);
console.log(entries);
Output: [ ['name', 'John'], ['age', 30], ['city', 'New York'] ]

*/ 
/*
2. map() method is used in the context of swapping keys and values using destructuring:
Object.entries(obj).map(([key, value]) => [value, key]);
output: [ [ 'John', 'name' ], [ 30, 'age' ], [ 'New York', 'city' ] ]
*/ 

/*
3. Object.fromEntries(entries) takes an array of key-value pairs and transforms it into an object.

Example:
const entries = [ [ 'John', 'name' ], [ 30, 'age' ], [ 'New York', 'city' ] ];
const obj = Object.fromEntries(entries);
console.log(obj);
Output: { name: 'John', age: 30, city: 'New York' }

*/ 

