export function* range(start, end) {
    while (start < end) {
        yield start++;
    }
}
