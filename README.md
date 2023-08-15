**If array of objects are to be sorted by any key then just provide the name of the key along with the objects it will sort the whole object collection**

**_This is the example:_**

```
const sortByKey = require('object_key_sort');

const arrayOfObjects = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
  // Add more objects here
];

const sortedArray = sortByKey({ data: arrayOfObjects, key: "age", order:'asc' });
console.log(sortedArray);

[
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Charlie', age: 35 }
]

Another Example

const arrayOfObjects = [
  { name: {first:{last:"Xavier"}}, age: 30 },
  { name: {first:{last:"Bob"}}, age: 25 },
  { name: {first:{last:"Charlie"}}, age: 35 },
  // Add more objects here
];

const sortedArray = sortByKey({data: arrayOfObjects, key: "name.first.last", order: 'desc'});
console.log(JSON.stringify(sortedArray));

Output : [
    {"name":{"first":{"last":"Xavier"}},"age":30},
    {"name":{"first":{"last":"Charlie"}},"age":35},
    {"name":{"first":{"last":"Bob"}},"age":25}
  ]

```