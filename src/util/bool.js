export function anyTrue(arr, pred) {
    for (const elem of arr) {
        if (pred(elem)) return true;
    }

    return false;
}

export function countIf(arr, pred) {
    return arr.filter(elem => pred(elem)).length;
}
