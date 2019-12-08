const ignoreChars = /[\s,\.:'@~#\]\[\}\{\+=\-_\)\(\*&\^%\$£"!\\`¬<>\?/\|]/gi;

export function mark(question, guess) {
    guess = normalise(guess);

    if (question.matcher) return question.matcher.test(guess);

    return equivalent(normalise(question.answer), guess);
}

function equivalent(left, right) {
    return normalise(left) === normalise(right);
}

function normalise(str) {
    return str.replace(ignoreChars, "").toLowerCase();
}