<script>
    export let prompt;
    export let answer;
    export let reveal;
    export let mark;

    let givenAnswer = "";

    $: wrong = givenAnswer.trim() !== answer;
</script>

<style>
    input {
        width: 100%;
    }

    .right {
        color: green;
    }

    .wrong {
        color: red;
        text-decoration: line-through;
    }
</style>

<li>
    <p>{prompt}</p>
    <input
        class:right={reveal && !wrong}
        class:wrong={reveal && wrong}
        bind:value={givenAnswer}
        type="text"
    >
    {#if reveal && wrong }
        {answer}
    {/if}
</li>
