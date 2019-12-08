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
            },
            {
                prompt: "In which game(s) might you find an \"Aku Aku\" mask?",
                answer: "Crash Bandicoot",
                matcher: /crash.*/
            },
            {
                prompt: "What is the real full name of \"Tails the Fox\", from the Sonic franchise.",
                answer: "Miles Prower",
                matcher: /miles.*prower/
            },
            {
                prompt: "Which is the only Dark Souls character to have an Amiibo?",
                answer: "Solaire of Astora",
                matcher: /solaire.*/
            },
            {
                prompt: "What is the name of the international pharmaceutical corporation in the Resident Evil series?",
                answer: "Umbrella Corporation",
                matcher: /umbrella.*/
            },
            {
                prompt: "What is the title of the game AM2R short for?",
                answer: "Another Metroid 2 Remake",
                matcher: /anothermetroid(2|two)remake/,
            },
            {
                prompt: "What is the name of Master Chief's AI Companion?",
                answer: "Cortana",
            },
            {
                prompt: "In The Legend of Zelda: Twilight Princess, what is the name of the Twilight Princess?",
                answer: "Midna",
            },
        ]}
    />
</main>
