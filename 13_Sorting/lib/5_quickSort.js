const quickSort = (arr) => {
    if (arr.length <= 1) return arr

    let rotatorIndex = arr.length - 1;
    let currentIndex = 0;

    while (currentIndex < rotatorIndex) {
        if (arr[currentIndex] > arr[rotatorIndex]) {
            let tmp = arr[rotatorIndex - 1];
            arr[rotatorIndex - 1] = arr[rotatorIndex];
            if (currentIndex == rotatorIndex - 1) {
                arr[rotatorIndex] = tmp;
            }
            else {
                arr[rotatorIndex] = arr[currentIndex];
                arr[currentIndex] = tmp;
            }

            rotatorIndex--;
        }
        else {
            currentIndex++;
        }

    }
    return quickSort(arr.slice(0, rotatorIndex)).concat(arr[rotatorIndex]).concat(...quickSort(arr.slice(rotatorIndex + 1)));

}
module.exports = {
    quickSort,
}