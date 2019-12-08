<script>
    import { mark } from "../util/quiz";

    export let answer;
    export let correct;
    export let prompt;
    export let reveal;

    let guess = "";

    $: correct = mark($$props, guess);
</script>

<style>
    input {
        width: 100%;
    }

    .right {
        border-color: #0C0;
        color: #0C0;
    }

    .wrong {
        border-color: #C00;
        text-decoration: line-through;
    }
</style>

<li>
    <p>{prompt}</p>
    <input
        class:right={reveal && correct}
        class:wrong={reveal && !correct}
        bind:value={guess}
        type="text"
    />
    {#if reveal && !correct }
        {answer}
    {/if}
</li>
