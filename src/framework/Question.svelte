<script>
    import { onMount } from "svelte";
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

    let inputContainer;
    let singleLineInputAnswer;

    function repositionInput() {
        singleLineInputAnswer = inputContainer.offsetWidth > 500;
    }

    onMount(() => {
        window.addEventListener("resize", repositionInput);
        repositionInput();
    });
</script>

<style>
    div.single-line {
        align-items: flex-start;
        display: flex;
    }

    input {
        display: block;
        flex-grow: 1;
        margin: 0;
        width: 100%;
    }

    input:not(:first-of-type) {
        margin-left: 0.75rem;
    }

    span {
        display: block;
    }

    .single-line span {
        margin-left: 0.75rem;
        width: 40%;
    }

    span {
        display: flex;
        height: 2rem;
        flex-direction: column;
        flex-grow: 0;
        justify-content: center;
        vertical-align: middle;
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

<slot/>
<div
    bind:this={inputContainer}
    class:single-line={singleLineInputAnswer}
>
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
        <span>
            {displayAnswer(answer)}
        </span>
    {/if}
</div>
