<script>
    import Round from "./framework/Round.svelte";
</script>

<style>

</style>

<main>
    <Round
        name="The Knowledge Round"
        format="text"
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
                prompt: "Helix, Ribbon Girl, and Master Mummy are characters from which game(s)?",
	            answer: "Arms"
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
        name="Games from Thomas's Childhood Round"
        format="text"
        questions={[
            {
                prompt: "In \"Cel Damage\" (and its re-releases under slightly different titles), there are several whacky playable characters including a devil called \"Sinder\", a T-Rex called \"T. Wrecks\", and an eastern European dominatrix. Name that dominatrix!",
                answer: "Dominique Trix",
                half: /dominique|trix/
            },
            {
                prompt: "In \"Spiderman 3\" for the PS2, PSP, and Wii there are several super villains, however some of these villains did not appear in the movie the game was based on. Name two of those villains! For 2 points.",
                answer: [
                    "Morbius",
                    "Shriek",
                    "The Lizard",
                    "Luke Carlyl / The Mad Bomber Group",
                ],
                outOf: 2,
            },
            {
                prompt: "In \"Ben 10: Protector of the Earth\" how many of Ben's aliens are actually playable?",
                answer: 5,
            },
            {
                prompt: "In \"Tom and Jerry: War of the Whiskers\" if you knock out your opponent without taking any damage, what word appears on the screen?",
                answer: "Purrfect",
                half: "Perfect"
            },
            {
                prompt: "In \"Oddworld: Abe's Oddysee\", Abe is a factory worker and employee of the year at \"Rupture Farms\". What does Abe learn during the opening cutscene that causes him to try to escape the factory?",
                answer: "He learns that his species is to be turned into food to save the company from falling profits."
            },
            {
                prompt: "In \"Sonic Heroes\", who is the mysterious client who \"Team Chaotix\" rescue from Dr. Eggman's Sky Base?",
                answer: "Dr. Eggman / Dr. Robotnik",
            },
            {
                prompt: "Introduced to the series in \"Tekken 3\", Eddy Gordo uses which style of martial arts?",
                answer: "Capoeira",
                matcher: /[ck]apo[aeiou]+ra/
            },
            {
                prompt: "In \"The Simpsons: Hit & Run\" there are many blue crates situated about the overworld that give you money when destroyed. What is written on each of the blue crates?",
                answer: "Buzz Cola",
            },
            {
                prompt: "In \"Mario Kart DS\", which track is made in the shape of a character from the series?",
                answer: "Yoshi Circuit",
                half: "Yoshi"
            },
            {
                prompt: "What is the name of the doctor featured in the \"Brain Training\" series for the Nintendo DS? Maximum of half a mark for bad spelling.",
                answer: "Dr. Kawashima",
                matcher: /kaw[ao]sh[ie]ma/
            }
        ]}
    />
    <Round
        name={"Design and Development Round"}
        format="text"
        questions={[
            {
                prompt: "What game, announced at E3 2016, was Hideo Kojima directing?",
                answer: "Death Stranding",
            },
            {
                prompt: "How many different official \"Harry Potter and the Chamber of Secrets\" video games were developed?",
                answer: 5,
            },
            {
                prompt: "What is the name of the Diablo mobile game announced in 2018?",
                answer: "Diablo: Immortal"
            },
            {
                prompt: "With the release of Pokémon Sun & Moon in 2016, which Pokémon no longer has the ability to levitate?",
                answer: "Gengar"
            },
            {
                prompt: "What is the name of the first scrapped CD-ROM add-on for the SNES?",
                answer: ["Playstation", "SNES-CD"]
            },
            {
                prompt: "Who engineered the first prototype of Breakout?",
                answer: "Steve Wozniak"
            },
            {
                prompt: "Who designed the Game of Life?",
                answer: "John Horton Conway",
                matcher: /joh?n.*conway/,
                half: /.*joh?n|conway.*/,
            },
            {
                prompt: "What is the name of the mythical arcade game that according to urban legend was part of a covert psychology experiment by the US government?",
                answer: "Polybius"
            },
            {
                prompt: "What is the name of Fortnite's co-op zombie survival game mode?",
                answer: "Fortnite: Save the World"
            }
        ]}
    />
    <Round
        name="Picture Round"
        explanation="For each screenshots and logo, name the game the the image is from."
        format="picture"
        questions={[
            {
                picture: "/media/2018/picture/1.png",
                answer: "Grim Fandango",
                half: /.*(grim|fandango).*/,
            },
            {
                picture: "/media/2018/picture/2.png",
                answer: "Hollow Knight",
                half: /.*(hollow|knight).*/,
            },
            {
                picture: "/media/2018/picture/3.png",
                answer: "Overwatch",
            },
            {
                picture: "/media/2018/picture/4.png",
                answer: "Limbo",
            },
            {
                picture: "/media/2018/picture/5.png",
                answer: "Team Fortress 2",
                matcher: /team\s*fortress\s*(2|two)/
            },
            {
                picture: "/media/2018/picture/6.png",
                answer: "Zuma",
            },
            {
                picture: "/media/2018/picture/7.png",
                answer: "Pacman",
            },
            {
                picture: "/media/2018/picture/8.png",
                answer: "Space Impact",
                half: /.*(space).*/,
            },
            {
                picture: "/media/2018/picture/9.png",
                answer: "Hyper Light Drifter",
                matcher: /Hyper\s*Light\s*Drifter/
            },
            {
                picture: "/media/2018/picture/10.png",
                answer: "Portal 2",
                matcher: /portal\s*(2|two)/,
                half: /.*(portal).*/,
            },
            {
                picture: "/media/2018/picture/Bonus 1.png",
                answer: "Super Smash Brothers Ultimate",
                matcher: /.*smash.*ultimate/,
            },
            {
                picture: "/media/2018/picture/Bonus 2.png",
                answer: "Player Unknown's: Battlegrounds",
                half: /.*(PUBG|battlegrounds?)/,
            },
            {
                picture: "/media/2018/picture/Bonus 3.png",
                answer: "Cuphead",
            },
            {
                picture: "/media/2018/picture/Bonus 4.png",
                answer: "Tetris",
            },
            {
                picture: "/media/2018/picture/Bonus 5.png",
                answer: "Mario Kart 8 Deluxe",
                matcher: /mario\s*[ck]art\s*(8|eight)\s*deluxe/,
                half: /mario\s*[ck]art\s*(8|eight)\s*/,
            }
        ]}
    />
    <Round
        name="Music Round"
        format="audio"
        explanation="For each music clip, name the game that music comes from."
        questions={[
            {
                audio: "/media/2018/audio/1.wav",
                answer: "Papers Please",
            },
            {
                audio: "/media/2018/audio/2.wav",
                answer: "Super Metroid",
                matcher: /.*metroid.*/
            },
            {
                audio: "/media/2018/audio/3.wav",
                answer: "Toki Tori 2",
                matcher: /toki\s*tori\s*(2|two)/,
            },
            {
                audio: "/media/2018/audio/4.wav",
                answer: "Bayonetta",
            },
        ]}
    />
</main>
