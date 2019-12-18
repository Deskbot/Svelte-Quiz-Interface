<script>
    import ImagePrompt from "./ImagePrompt.svelte";
    import Question from "./Question.svelte";

    export let questions;
    export let reveal;
    export let roundName;
    export let score;

    const questionScores = new Array(questions.length).fill(0);

    $: score = questionScores.reduce((tot, score) => tot + score);
</script>

<style>
    ol {
        align-content: flex-start;
        align-items: flex-start;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0;
    }
</style>

<ol>
    <slot/>
</ol>
