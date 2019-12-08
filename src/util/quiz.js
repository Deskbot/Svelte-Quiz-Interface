const ignoreChars = /[\s,.:'@~#][}{+=-_)(*&^%$£"!\\|`¬<>\?/']/gi;

export function equivalent(left, right) {
    return normalise(left) === normalise(right);
}

function normalise(str) {
    return str.replace(ignoreChars, "").toLowerCase();
}