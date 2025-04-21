const { bubbleSort } = require('./lib/1_bubbleSort')
const { selectionSort } = require('./lib/2_selectionSort')
const { insertionSort } = require('./lib/3_insertionSort')
const { mergeSort } = require('./lib/4_mergeSort')
const { quickSort } = require('./lib/5_quickSort')

let unsorted = [3, 7, 8, 5, 2, 1, 9, 5, 4];

console.log(quickSort([...unsorted]))


let a = 1;