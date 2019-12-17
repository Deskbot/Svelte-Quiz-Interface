<script>
    import ImagePrompt from "./ImagePrompt.svelte";
    import Question from "./Question.svelte";
    import Result from "./Result.svelte";

    export let name;
    export let questions;

    let submitted = false;
    let questionScores = new Array(questions.length).fill(0);

    $: questionScores.reduce((tot, score) => tot + score);

    function mark() {
        submitted = true;
    }
</script>

<style>
    ol {
        padding: 0 40px;
    }
</style>

<section>
    <h2>{name}</h2>
    <ol>
        {#each questions as question, qNum}
            <Question
                {...question}
                bind:score={questionScores[qNum]}
                reveal={submitted}
            >
                {#if question.picture !== undefined}
                    <ImagePrompt
                        roundName={name}
                        picturePath={question.picture}
                        qNum={qNum + 1}
                    />
                {:else}
                    <p>{question.prompt}</p>
                {/if}
            </Question>
        {/each}
    </ol>
    <button
        on:click={mark}
    >
        Mark
    </button>

    {#if submitted}
        <Result
            points={questionScores.reduce((tot, score) => tot + score)}
            outOf={questions.length}
        />
    {/if}
</section>
