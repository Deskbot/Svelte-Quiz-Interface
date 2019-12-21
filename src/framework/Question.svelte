<script>
    import { onMount } from "svelte";
    import { mark } from "../util/quiz";
    import { range } from "../util/arr";

    export let answer;
    export let outOf = 1;
    export let reveal;
    export let score;

    let guess;

    $: score = mark($$props, guess, outOf);
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
        singleLineInputAnswer = inputContainer.offsetWidth > 960;
    }

    onMount(() => {
        window.addEventListener("resize", repositionInput);
        repositionInput();
    });
</script>

<style>
    div {
        margin-top: 0.5rem;
    }

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

    .single-line span {
        height: 2rem;
        margin: 0 0 0 0.75rem;
        width: 40%;
    }

    span {
        display: flex;
        flex-direction: column;
        flex-grow: 0;
        height: 1rem;
        justify-content: center;
        margin: 1rem 0 0 0;
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
    <input
        class:correct={reveal && correct}
        class:half={reveal && score < outOf && score > 0}
        class:wrong={reveal && score === 0}
        bind:value={guess}
        type="text"
    />
    {#if reveal && !correct}
        <span>
            {displayAnswer(answer)}
        </span>
    {/if}
</div>
