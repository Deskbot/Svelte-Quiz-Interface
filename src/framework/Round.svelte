<script>
    import QuestionList from "./QuestionList.svelte";

    export let explanation = undefined;
    export let format;
    export let name;
    export let questions;

    let score; //can bind:score this be trimmed down?
    let submitted = false;

    $: maxScore = questions.reduce(
        (tot, question) => tot + (question.outOf ? question.outOf : 1),
        0
    );

    function mark() {
        submitted = true;
    }
</script>

<style>
    h2 {
        background-color: var(--background);
        margin: 0;
        padding: 1rem 0 0.5rem 0;
        position: sticky;
        position: -webkit-sticky;
        top: 0;
        z-index: 1;
    }
</style>

<section>
    <h2>
        {name}
        {#if submitted}
            ({score} / {maxScore})
        {/if}
    </h2>
    {#if explanation !== undefined}
        <p>{explanation}</p>
    {/if}
    <QuestionList
        {questions}
        reveal={submitted}
        roundName={name}
        bind:score={score}
        {format}
    />
    <button on:click={mark}>
        Mark
    </button>

    {#if submitted}
        You Scored: {score} / {maxScore}
    {/if}
</section>
