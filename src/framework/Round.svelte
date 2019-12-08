<script>
    import Question from "./Question.svelte";
    import Result from "./Result.svelte";

    export let name;
    export let questions;

    let submitted = true;
</script>

<style>

</style>

<section>
    <h2>{name}</h2>
    <ol>
        {#each questions as question}
            <Question {...question} />
        {/each}
    </ol>
    <button on:click={() => submitted = !submitted}>
        Mark
    </button>

    {#if submitted}
        <Result
            points={5}
            outOf={questions.length}
        />
    {/if}
</section>
