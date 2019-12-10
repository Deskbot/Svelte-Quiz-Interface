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
    <Round
        name="Games from Thomas's Childhood"
        questions={[
            {
                prompt: "In \"Cel Damage\" (and its re-releases under slightly different titles), there are several whacky playable characters including a devil called \"Sinder\", a T-Rex called \"T. Wrecks\", and an eastern European dominatrix. Name that dominatrix!",
                answer: "Dominique Trix".
                // TODO implement half for each half of the name
            },
            {
                prompt: "In \"Spiderman 3\" for the PS2, PSP, and Wii there are several super villains, however some of these villains did not appear in the movie the game was based on. Name two of those villains! For 2 points."
                answer: [
                    "Morbius",
                    "Shriek",
                    "The Lizard",
                    "Luke Carlyl / The Mad Bomber Group",
                ],
                // TODO implement questions out of 2
            },
            {
                prompt: "In \"Ben 10: Protector of the Earth\" how many of Ben's aliens are actually playable?",
                answer: 5,
            },
            {
                prompt: "In \"Tom and Jerry: War of the Whiskers\" if you knock out your opponent without taking any damage, what word appears on the screen?",
                answer: "Purrfect",
                // TODO implement half for the wrong spelling of perfect
            },
            {
                prompt: "In \"Oddworld: Abe's Oddysee\", Abe is a factory worker and employee of the year at \"Rupture Farms\". What does Abe learn during the opening cutscene that causes him to try to escape the factory?",
                answer: "He learns that his species is to be turned into food to save the company from falling profits."
            },
            {
                prompt; "In \"Sonic Heroes\", who is the mysterious client who \"Team Chaotix\" rescue from Eggman's Sky Base?",
                answer: "Dr. Eggman / Dr. Robotnik",
            },
            {
                prompt: "Introduced to the series in \"Tekken 3\", Eddy Gordo uses which style of martial arts?",
                answer: "Capoeira"
                matcher: /[ck]apo[aeiou]+ra/
            },
            {
                prompt: "In \"The Simpsons: Hit & Run\" there are many blue crates situated about the overworld that give you money when destroyed. What is written on each of the blue crates?",
                answer: "Buzz Cola"
            },
            {
                prompt: "In \"Mario Kart DS\", which track is made in the shape of a character from the series?",
                answer: "Yoshi Circuit",
                // TODO implement half for yoshi something
            },
            {
                prompt: "What is the name of the doctor featured in the \"Brain Training\" series for the Nintendo DS? Maximum of half a mark for bad spelling.",
                answer: "Dr. Kawashima",
                matcher: /kaw[ao]sh[ie]ma/
            }
        ]}
    />
</main>
