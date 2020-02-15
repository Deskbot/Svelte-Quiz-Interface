import convert from "number-to-words";
import { countIf } from "./bool";

const ignoreChars = /[\s,\.:'@~#\]\[\}\{\+=\-_\)\(\*&\^%\$£"!\\`¬<>\?/\|]/gi;

// handle the different answer formats
export function mark(question, guess, outOf) {
    if (guess === undefined) {
        return 0;
    }

    if (Array.isArray(question.answer)) {
        return Math.min(outOf, countCorrect(question, guess));
    }

    if (isFullyCorrect(question, guess)) {
        return outOf;
    }

    if (half(question, guess)) {
        return outOf / 2;
    }

    return 0;
}

function countCorrect(question, guess) {
    if (question.matcher) {
        if (Array.isArray(question.matcher)) {
            return countIf(question.matcher, possibleMatch => matcherMatches(possibleMatch, guess));
        } else {
            return matcherMatches(question.matcher, guess) ? 1 : -1;
        }
    } else {
        return countIf(question.answer, possibleAns => isAnswer(possibleAns, guess));
    }
}

function isFullyCorrect(question, guess) {
    if (question.matcher) return matcherMatches(question.matcher, guess);

    return isAnswer(question.answer, guess);
}

function half(question, guess) {
    if (question.half === undefined) {
        return false;
    }

    if (question.half instanceof RegExp) {
        return matcherMatches(question.half, guess);
    }

    return isAnswer(question.half, guess);
}

function isAnswer(answer, guess) {
    if (typeof answer === "number") {
        return matchNumber(answer, guess);
    }

    return normalise(guess).includes(normalise(answer));
}

function matcherMatches(matcher, guess) {
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
