const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currentIndex = i;
        while (currentIndex > 0) {
            if (arr[i] > arr[currentIndex - 1]) {
                break;
            }
            currentIndex--;
        }

        let numberToBeReplaced = arr[i];
        for (let j = i; j > currentIndex; j--) {
            arr[j] = arr[j - 1];
        }

        arr[currentIndex] = numberToBeReplaced;
    }

    return arr;
}


module.exports = {
    insertionSort,
}