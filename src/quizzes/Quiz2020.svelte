<script>
    import Round from "../framework/Round.svelte";
    import Quiz from "../framework/Quiz.svelte";
</script>

<Quiz>
    <Round
        name="Video Games Round"
        format="text"
        questions={[
            {
                prompt: "How many columns are there in the well in \"Tetris\"?",
                answer: 10,
            },
            {
                prompt: "In which series would you find the following characters: Burst Man, Clown Man, Flash Man, Origami Man?",
                answer: "Mega Man",
                matcher: /mega.?man/
            },
            {
                prompt: "What is the tagline of the rhythm game \"Osu!\"?",
                answer: "Rhythm is just a click away!",
                matcher: /rh?ythm(is)?(just)?(a)?clickaway/
            },
            {
                prompt: "What is the name of the FIFA game released in 2017?",
	            answer: "FIFA 18",
                matcher: /fifa(20|twenty-?)?(18|eighteen)/,
            },
            {
                prompt: "How many buttons is the fighting game \"Dive Kick\" played with?",
                answer: 2,
            },
            {
                prompt: "What is the name of the race of cat people in The Elder Scrolls series?",
                answer: "Khajiit",
                matcher: /(kh?|c)a+ji+t/
            },
            {
                prompt: "The game \"A Dark Room\" was removed from the Nintendo Switch eShop after it was revealed to have a hidden feature that was only accessible with a keyboard. What was that hidden feature?",
                answer: "Pressing the tilde key opened a Ruby code editor and runner.",
                matcher: /.*(code|coding|program).*(editor|environment|\bide\b).*/,
            },
            {
                prompt: "Which real world car manufacturer has sponsored vehicles in Mario Kart 8?",
                answer: "Mercedes",
            },
            {
                prompt: "What is the name of the 2011 pigeon dating simulator game?",
                answer: "Hatoful Boyfriend",
            },
            {
                prompt: "What is the name of the 1994 fighting game featuring basketball player Shaquille O'Neal?",
                answer: "Shaq Fu",
                trivia: "Plot summary: Shaquille O'Neal walks into a dojo while heading to a charity basketball game in Tokyo, Japan. After speaking with Leotsu, a martial arts master, Shaq goes to another dimension, the Second World, where he must rescue a young boy named Nezu from the evil mummy Sett Ra."
            },
            {
                prompt: "P.T. is the demo for cancelled horror game. Which series was that game to be a part of?",
                answer: "Silent Hill",
            },
            {
                prompt: "What is the name of Valve's virtual reality headset?",
                answer: "Index",
            },
        ]}
    />
    <Round
        name="Games from Thomas's Childhood Round"
        format="text"
        questions={[
            {
                prompt: "In the classic edition of \"Cluedo\", what is the name of the murder victim?",
                answer: ["Dr. Black", "Mr. Body"],
                matcher: [
                    /drblack/,
                    /mrbodd?y/,
                ],
            },
            {
                prompt: "In Scrabble, how many points total are the letters in the word \"Scrabble\" worth?",
                answer: "14",
                half: /13|15/,
            },
            {
                prompt: "In Chess, on the first player's first turn, how many different choices of move are there?",
                answer: 20,
            },
            {
                prompt: "What are the wooden player pieces in Carcassone called?",
                answer: "Meeple",
                matcher: /meeples?/,
            },
            {
                prompt: "In the playing card game Hearts, how is it determined which player goes first?",
                answer: "The player who has the 2 of clubs goes first.",
                matcher: /.*(two|2).*clubs?.*/
            },
            {
                prompt: "In \"Operation\", which ailment does the pail of water represent?",
                answer: ["Water on the Knee", "Knee Effusion"],
            },
            {
                prompt: "Who designed \"Settlers of Catan\"?",
                answer: "Klaus Teuber",
                matcher: /kla[aeuo]st[eou]{2}ber/,
            },
            {
                prompt: "Which country does \"Go\" originate from?",
                answer: "China",
            }
        ]}
    />
    <Round
        name="Picture Round"
        explanation="For each screenshot and logo, name the game the the image is from."
        format="picture"
        questions={[
            {
                picture: "media/2020/picture/1.png",
                answer: "Astral Chain",
                half: /.*(astral|chain).*/,
            },
            {
                picture: "media/2020/picture/2.png",
                answer: "QBert",
                matcher: /q.*bert/,
            },
            {
                picture: "media/2020/picture/3.png",
                answer: "Minimetro",
            },
            {
                picture: "media/2020/picture/4.png",
                answer: "Little Town Hero",
                half: /town/,
            },
            {
                picture: "media/2020/picture/5.png",
                answer: "Gorogoa",
            },
            {
                picture: "media/2020/picture/6.png",
                answer: ["Pokémon Shield", "Pokémon Sword"],
                matcher: /pok(e|é)mon(sword|shield).*/,
            },
            {
                picture: "media/2020/picture/7.png",
                answer: "Half-life",
            },
            {
                picture: "media/2020/picture/8.png",
                answer: "Return of the Obra Dinn",
                matcher: /obra.*dinn/,
                half: /.*(return|obra|dinn).*/,
            },
            {
                picture: "media/2020/picture/9.png",
                answer: "No Man's Sky",
            },
            {
                picture: "media/2020/picture/10.png",
                answer: "Outer Worlds",
            },
            {
                picture: "media/2020/picture/B1.png",
                answer: "Ori and the Blind Forest",
                half: /.*(ori|blindforest).*/,
            },
            {
                picture: "media/2020/picture/B2.png",
                answer: "Roblox",
            },
            {
                picture: "media/2020/picture/B3.png",
                answer: "Ōkami",
                matcher: /(o|ō)kami/,
            },
            {
                picture: "media/2020/picture/B4.png",
                answer: "Sunset Overdrive",
            },
            {
                picture: "media/2020/picture/B5.png",
                answer: "Doom",
            }
        ]}
    />
    <Round
        name="Music Round"
        format="audio"
        explanation="For each music clip, name the game that music comes from."
        questions={[
            {
                audio: "media/2020/music/1.mp3",
                answer: "Downwell",
            },
            {
                audio: "media/2020/music/2.mp3",
                answer: "Dark Souls",
            },
            {
                audio: "media/2020/music/3.mp3",
                answer: "Wii Sports",
            },
            {
                audio: "media/2020/music/4.mp3",
                answer: "Axiom Verge",
            },
            {
                audio: "media/2020/music/5.mp3",
                answer: "Portal",
            },
            {
                audio: "media/2020/music/6.mp3",
                answer: "Cadence of Hyrule",
            },
            {
                audio: "media/2020/music/7.mp3",
                answer: "Fortnite",
            },
            {
                audio: "media/2020/music/8.mp3",
                answer: ["Shadow the Hedgehog", "Sonic the Hedgehog (2006)", "Sonic and the Black Knight", "Sonic Generations"],
                matcher: [
                    /shadowthehedgehog/,
                    /sonicthehedgehog/,
                    /sonic(20)?06/,
                    /sonic(and|&)(the)?blackknight/,
                    /sonicgenerations/,
                ],
            },
            {
                audio: "media/2020/music/9.mp3",
                answer: "Baba is You",
            },
            {
                audio: "media/2020/music/10.mp3",
                answer: "Kinect Star Wars",
                matcher: /kinectstarwars|starwarskinect/
            },
        ]}
    />
    <Round
        name="Who's Voiceline is it Anyway?"
        format="audio"
        explanation="For each voice clip, name the character making that noise."
        questions={[
            {
                audio: "media/2020/voicelines/1.mp3",
                answer: "Sans",
            },
            {
                audio: "media/2020/voicelines/2.mp3",
                answer: "Big the Cat",
                matcher: /big/,
            },
            {
                audio: "media/2020/voicelines/3.mp3",
                answer: "Ragnaros the Fire Lord",
                matcher: /ragnaros.*/,
            },
            {
                audio: "media/2020/voicelines/4.mp3",
                answer: "Marge Simpson",
                matcher: /marge/,
            },
            {
                audio: "media/2020/voicelines/5.mp3",
                answer: "The Heavy",
                matcher: /.*heavy.*/
            },
            {
                audio: "media/2020/voicelines/6.mp3",
                answer: "Cornifer",
            },
            {
                audio: "media/2020/voicelines/7.mp3",
                answer: "Doomfist",
            },
            {
                audio: "media/2020/voicelines/8.mp3",
                answer: "Bayonetta",
            },
            {
                audio: "media/2020/voicelines/9.mp3",
                answer: "Enderman",
            },
            {
                audio: "media/2020/voicelines/10.mp3",
                answer: ["Ethan Mars", "Heavy Rain"],
                caveat: "You can also earn an extra point for giving the name of the game this character is from.",
                outOf: 2,
            },
        ]}
    />
</Quiz>
