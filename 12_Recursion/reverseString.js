function reverseString(str) {
    let res = "";
    for (let i = str.length - 1; i > -1; i--) {
        res += str[i];
    }
    return res;
}

console.log(reverseString("yoyo master"));

function reverseStringRecursive(str) {
    if (str.length == 1) return str;
    return str[str.length - 1] + reverseStringRecursive(str.substring(0, str.length - 1));
}


console.log(reverseStringRecursive("yoyo master"));