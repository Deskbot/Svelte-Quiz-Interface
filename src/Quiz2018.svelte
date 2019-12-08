<script>
    import Round from "./framework/Round.svelte";
</script>

<style>

</style>

<main>
    <Round
        name="The Knowledge Round"
        questions={[
            {
                prompt: "\"Card Wars\" is a digital card game originating from which children's TV programme?",
                answer: "Adventure Time",
            },
            {
                prompt: "Forza Horizon 4, released in 2018, is set in which country?",
                answer: "Great Britain",
                matcher: /greatbritain|gb|(the)?unitedkingdom|uk/
            }
        ]}
    />
</main>
