const array = [1, 2, 3, 4, "rohit", 2, 3, 1, "rohit", 5, 6];

const uniqueElement = array.filter((element, index) => {
  return array.indexOf(element) === index;
});

console.log(uniqueElement);

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates(array));

const array1 = (array) => {
  return [...new Set(array)];
};
console.log(array1(array));
