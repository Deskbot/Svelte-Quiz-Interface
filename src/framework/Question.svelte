<script>
    import { mark } from "../util/quiz";
    import { range } from "../util/arr";

    export let answer;
    export let outOf = 1;
    export let reveal;
    export let score;

    let guesses = [];

    $: score = guesses.reduce((tot, guess) => tot + mark($$props, guess), 0);
    $: correct = score === outOf;

    function displayAnswer(answer) {
        if (Array.isArray(answer)) {
            return answer.join(" / ");
        }
        return answer;
    }
</script>

<style>
    input {
        width: 100%;
    }

    .correct {
        border-color: #0C0;
        color: #0C0;
    }

    .half {
        border-color: #CC0;
        color: #CC0;
    }

    .wrong {
        border-color: #C00;
        text-decoration: line-through;
    }
</style>

<li>
    <slot/>
    {#each [...range(0, outOf)] as partNumber}
        <input
            class:correct={reveal && correct}
            class:half={reveal && score < outOf && score > 0}
            class:wrong={reveal && score === 0}
            bind:value={guesses[partNumber]}
            type="text"
        />
    {/each}
    {#if reveal && !correct}
        {displayAnswer(answer)}
    {/if}
</li>
