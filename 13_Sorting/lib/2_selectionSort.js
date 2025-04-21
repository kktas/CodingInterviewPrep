const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            let tmp = arr[i]
            arr[i] = arr[minIndex];
            arr[minIndex] = tmp;
        };
    }

    return arr;
}

module.exports = {
    selectionSort,
}