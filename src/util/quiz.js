import convert from "number-to-words";
import { anyTrue } from "./bool";

const ignoreChars = /[\s,\.:'@~#\]\[\}\{\+=\-_\)\(\*&\^%\$£"!\\`¬<>\?/\|]/gi;

// handle the different answer formats
export function mark(question, guess) {
    if (Array.isArray(question.answer)) {
        return anyTrue(question.answer, possibleAns => markAnswer(possibleAns, guess));
    }

    if (question.matcher) return markMatcher(question.matcher, guess);

    return markAnswer(question.answer, guess);
}

function markAnswer(answer, guess) {
    if (typeof answer === "number") {
        return matchNumber(answer, guess);
    }

    return normalise(guess).includes(normalise(answer));
}

function markMatcher(matcher, guess) {
    return match(matcher, normalise(guess));
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
    if (answer.toString() === guess) return true;
    if (convert.toWords(answer) === guess) return true;
    return false;
}

function normalise(str) {
    return str.replace(ignoreChars, "").toLowerCase();
}
