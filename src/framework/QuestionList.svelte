<script>
    import ImagePrompt from "./ImagePrompt.svelte";
    import Question from "./Question.svelte";
    import QuestionListItem from "./QuestionListItem.svelte";

    export let questions;
    export let reveal;
    export let roundName;
    export let score;

    const questionScores = new Array(questions.length).fill(0);

    $: score = questionScores.reduce((tot, score) => tot + score);
</script>

<style>
    ol {
        padding: 0;
    }
</style>

<ol>
    {#each questions as question, qNum}
        <QuestionListItem>
            <Question
                {...question}
                {reveal}
                bind:score={questionScores[qNum]}
            >
                {#if question.picture !== undefined}
                    <ImagePrompt
                        picturePath={question.picture}
                        qNum={qNum + 1}
                        {roundName}
                    />
                {:else}
                    <p>{question.prompt}</p>
                {/if}
            </Question>
        </QuestionListItem>
    {/each}
</ol>
