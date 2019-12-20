<script>
    import AudioPrompt from "./format/AudioPrompt.svelte";
    import PicturePrompt from "./format/PicturePrompt.svelte";
    import PictureQuestionListItem from "./format/PictureQuestionListItem.svelte";
    import Question from "./Question.svelte";
    import TextQuestionListItem from "./format/TextQuestionListItem.svelte";

    export let format;
    export let questions;
    export let reveal;
    export let roundName;
    export let score;

    const questionScores = new Array(questions.length).fill(0);
    $: score = questionScores.reduce((tot, score) => tot + score);
</script>

<style>
    ol {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0;
    }
</style>

<ol>
    {#each questions as question, qNum}
        {#if format === "picture"}
            <PictureQuestionListItem>
                <Question
                    {...question}
                    {reveal}
                    bind:score={questionScores[qNum]}
                >
                    <PicturePrompt
                        picturePath={question.picture}
                        qNum={qNum + 1}
                        {roundName}
                    />
                </Question>
            </PictureQuestionListItem>
        {:else if format === "audio"}
            <PictureQuestionListItem>
                <Question
                    {...question}
                    {reveal}
                    bind:score={questionScores[qNum]}
                >
                    <AudioPrompt
                        path={question.audio}
                    />
                </Question>
            </PictureQuestionListItem>
        {:else if format === "text"}
            <TextQuestionListItem>
                <Question
                    {...question}
                    {reveal}
                    bind:score={questionScores[qNum]}
                >
                    <p>{question.prompt}</p>
                </Question>
            </TextQuestionListItem>
        {/if}
    {/each}
</ol>
