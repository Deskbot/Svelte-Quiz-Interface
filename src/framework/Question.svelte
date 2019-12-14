<script>
    import { mark } from "../util/quiz";

    export let answer;
    export let prompt;
    export let reveal;
    export let score;

    let guess = "";

    $: score = mark($$props, guess);
    $: correct = score === 1;

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
    <p>{prompt}</p>
    <input
        class:correct={reveal && correct}
        class:half={reveal && score === 0.5}
        class:wrong={reveal && score === 0}
        bind:value={guess}
        type="text"
    />
    {#if reveal && !correct}
        {displayAnswer(answer)}
    {/if}
</li>
