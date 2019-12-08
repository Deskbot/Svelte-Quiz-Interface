const ignoreChars = /[\s,\.:'@~#\]\[\}\{\+=\-_\)\(\*&\^%\$£"!\\`¬<>\?/\|]/gi;

export function mark(question, guess) {
    guess = normalise(guess);

    if (question.matcher) return match(question.matcher, guess);

    return guess.includes(normalise(question.answer));
}

function match(matcher, str) {
    // returns null or a list of matching substrings
    const result = str.match(matcher);

    if (result) {
        return result[0] === str;
    }

    return false;
}

function normalise(str) {
    return str.replace(ignoreChars, "").toLowerCase();
}