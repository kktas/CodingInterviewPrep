const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

const merge = (left, right) => {
    let res = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        }
        else {
            res.push(right[j]);
            j++;
        }
    }

    return res.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = {
    mergeSort,
}