import convert from "number-to-words";

const ignoreChars = /[\s,\.:'@~#\]\[\}\{\+=\-_\)\(\*&\^%\$£"!\\`¬<>\?/\|]/gi;

export function mark(question, guess) {
    if (typeof question.answer === "number") {
        return matchNumber(question.answer, guess);
    }

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

function matchNumber(answer, guess) {
    if (guess.toString() === answer) return true;
    if (convert.toWords(guess) === answer) return true;
    return false;
}

function normalise(str) {
    return str.replace(ignoreChars, "").toLowerCase();
}
