<script>
    export let prompt;
    export let answer;
    export let reveal;
    export let mark;

    let givenAnswer;

    $: wrong = reveal && givenAnswer.trim() !== answer;
</script>

<style>
    input {
        width: 100%;
    }

    .wrong {
        color: red;
        text-decoration: line-through;
    }
</style>

<li>
    <p>{prompt}</p>
    <input
        class:wrong={wrong}
        bind:value={givenAnswer}
        type="text"
    >
    {#if reveal}
        {answer}
    {/if}
</li>
