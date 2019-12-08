export function arrayOf(length, val) {
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr[i] = val;
    }

    return arr;
}
