<script>
    import Question from "./Question.svelte";
    import Result from "./Result.svelte";

    export let name;
    export let questions;

    let submitted = false;

    let questionsCorrect = new Array(questions.length).fill(false);

    function mark() {
        submitted = true;
    }
</script>

<style>

</style>

<section>
    <h2>{name}</h2>
    <ol>
        {#each questions as question, qNum }
            <Question
                {...question}
                bind:correct={questionsCorrect[qNum]}
                reveal={submitted}
            />
        {/each}
    </ol>
    <button
        on:click={mark}
    >
        Mark
    </button>

    {#if submitted}
        <Result
            points={questionsCorrect.filter(val => val).length}
            outOf={questions.length}
        />
    {/if}
</section>
