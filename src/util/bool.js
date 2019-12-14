export function anyTrue(arr, pred) {
    for (const elem of arr) {
        if (pred(elem)) return true;
    }

    return false;
}