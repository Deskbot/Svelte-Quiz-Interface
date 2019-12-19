<script>
    import QuestionList from "./QuestionList.svelte";
    import Result from "./Result.svelte";

    export let explanation = undefined;
    export let format;
    export let name;
    export let questions;

    let score; //can bind:score this be trimmed down?
    let submitted = false;

    function mark() {
        submitted = true;
    }
</script>

<style>
    #question-container {
        padding: 0 40px;
    }
</style>

<section>
    <h2>{name}</h2>
    {#if explanation !== undefined}
        <p>{explanation}</p>
    {/if}
    <div id="question-container">
        <QuestionList
            {questions}
            reveal={submitted}
            roundName={name}
            bind:score={score}
            {format}
        />
    </div>
    <button on:click={mark}>
        Mark
    </button>

    {#if submitted}
        <Result
            points={score}
            outOf={questions.length}
        />
    {/if}
</section>
