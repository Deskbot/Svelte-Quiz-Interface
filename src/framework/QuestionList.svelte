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
        align-items: flex-start;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 0 1rem 0;
    }

    ol.picture {
        margin: 0;
    }
</style>


{#if format === "picture"}
    <ol class="picture">
        {#each questions as question, qNum}
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
        {/each}
    </ol>
{:else if format === "audio"}
    <ol>
        {#each questions as question, qNum}
            <PictureQuestionListItem>
                <Question
                    {...question}
                    {reveal}
                    bind:score={questionScores[qNum]}
                >
                    <AudioPrompt
                        caveat={question.caveat}
                        path={question.audio}
                    />
                </Question>
            </PictureQuestionListItem>
        {/each}
    </ol>
{:else if format === "text"}
    <ol>
        {#each questions as question, qNum}
            <TextQuestionListItem>
                <Question
                    {...question}
                    {reveal}
                    bind:score={questionScores[qNum]}
                >
                    <p>{question.prompt}</p>
                </Question>
            </TextQuestionListItem>
    {/each}
    </ol>
{/if}
