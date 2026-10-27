const STORIES = [
  {
    "id": 1,
    "title": "Moonlit Promise",
    "author": "Ariana Vale",
    "genre": "Romance",
    "synopsis": "A quiet artist meets a mysterious pianist beneath the city lights.",
    "content": "When Mira finds a handwritten melody inside a secondhand book, she follows its notes to a rooftop piano and meets Elias, a musician who has stopped believing in love.",
    "chapter": "The city glittered below them like a thousand fallen stars. Mira held the little page between her fingers. “You wrote this?” she asked. Elias nodded, his gaze fixed on the keys. “I wrote it for someone I thought I would never meet.” She sat beside him, and together they played the unfinished melody. For the first time in years, the silence between notes felt like a beginning.",
    "cover": "images/cover-1.svg"
  },
  {
    "id": 2,
    "title": "The Last Spell",
    "author": "Rowan Ash",
    "genre": "Fantasy",
    "synopsis": "A young mage discovers that the kingdom’s final spell belongs to her.",
    "content": "On the eve of the kingdom’s collapse, apprentice Elara discovers an ancient spell hidden in her grandmother’s journal.",
    "chapter": "The ink shimmered as Elara spoke the first word. Wind rushed through the tower, lifting every candle flame at once. Beyond the window, the shadow army gathered at the gates. She had spent her life believing magic was something inherited. Now she understood it was something chosen. With trembling hands, she turned the page and spoke the second word.",
    "cover": "images/cover-2.svg"
  },
  {
    "id": 3,
    "title": "Midnight at Room 9",
    "author": "J. M. Cross",
    "genre": "Mystery",
    "synopsis": "A hotel clerk finds a key to a room that does not exist on any floor plan.",
    "content": "Every night at 12:09, a bell rings from the locked ninth room of the old hotel.",
    "chapter": "The key was warm, almost alive, when June picked it up. The elevator display skipped from eight to ten, but the door beside the linen closet stood open. Inside was a room covered in dust, with a fresh cup of tea on the desk. A photograph showed June as a child, standing beside a woman she had never known. Behind her, the clock began to tick backward.",
    "cover": "images/cover-3.svg"
  },
  {
    "id": 4,
    "title": "Signal from Mars",
    "author": "Leo Winters",
    "genre": "Sci-Fi",
    "synopsis": "A student engineer receives a message from a colony that vanished fifty years ago.",
    "content": "A strange transmission reaches Earth using the voice of a missing astronaut.",
    "chapter": "The signal cracked through the headphones: three short tones, one long, then a voice saying his name. Theo checked the receiver twice. The message was coming from Mars, from a station officially abandoned before he was born. He opened the archived map and found a blinking dot beneath the planet’s northern ice. The voice returned. “Please don’t let them wake up.”",
    "cover": "images/cover-4.svg"
  },
  {
    "id": 5,
    "title": "The Summer We Kept",
    "author": "Nina Sol",
    "genre": "Coming of Age",
    "synopsis": "Two childhood friends reunite and discover their old promises still matter.",
    "content": "A summer job at a seaside café brings Sam and Jules back to the place where they once planned their futures.",
    "chapter": "The café smelled of salt and burnt sugar, exactly as Sam remembered. Jules was behind the counter, hair shorter and smile quieter. For a moment they were twelve again, racing along the pier with ice cream melting down their hands. “You kept the map?” Jules asked. Sam pulled the folded paper from a pocket. The ink had faded, but the X was still there.",
    "cover": "images/cover-5.svg"
  },
  {
    "id": 6,
    "title": "Ashes of the Crown",
    "author": "M. K. Thorn",
    "genre": "Fantasy",
    "synopsis": "An exiled princess must decide whether a throne is worth saving.",
    "content": "After the capital burns, Princess Ren returns disguised as a traveling healer.",
    "chapter": "Ren entered the ruined hall at dawn. Ash clung to the marble like gray snow, and the crown lay cracked beneath the throne. Her brother’s last letter was tucked inside her sleeve. It asked her to rebuild the kingdom, not reclaim it. Outside, villagers waited for a ruler. Ren lifted the broken crown, then set it down and walked toward them empty-handed.",
    "cover": "images/cover-6.svg"
  },
  {
    "id": 7,
    "title": "A Study in Shadows",
    "author": "Evelyn Hart",
    "genre": "Mystery",
    "synopsis": "A library assistant uncovers a pattern hidden in books returned after midnight.",
    "content": "Someone is leaving coded notes in the margins of books that have not yet been published.",
    "chapter": "The fourth note was tucked between two pages of a book still in print proof. Clara lined up the words from all four volumes and read the message aloud. The library lights flickered. Across the reading room, a chair scraped backward though no one sat there. She finally understood the code was not pointing to a place. It was pointing to a person—and that person had just entered the library.",
    "cover": "images/cover-7.svg"
  },
  {
    "id": 8,
    "title": "Paper Hearts",
    "author": "Lily Monroe",
    "genre": "Romance",
    "synopsis": "Anonymous letters change the life of a student who hates love stories.",
    "content": "A stack of letters appears in the school mailbox, each describing a moment the writer noticed June.",
    "chapter": "June read the newest letter under the stairwell, where nobody ever looked for her. It described the day she lent a stranger her umbrella and forgot all about it. At the bottom was a small drawing of a paper crane. She folded the letter carefully and looked up. Someone stood at the far end of the hall, holding the same blue umbrella.",
    "cover": "images/cover-8.svg"
  },
  {
    "id": 9,
    "title": "The Hollow Forest",
    "author": "Finn Wilder",
    "genre": "Horror",
    "synopsis": "A hiking group hears their own voices coming from deep inside the trees.",
    "content": "The trail map changes every time the friends check it.",
    "chapter": "“We should turn back,” Ava whispered. From somewhere between the pines, her own voice answered, “We should turn back.” The map in her hand showed a trail that looped through a blank space. Their footprints continued ahead, although none of them had walked there. Then the forest went completely silent, and something began counting their names.",
    "cover": "images/cover-9.svg"
  },
  {
    "id": 10,
    "title": "The Clockmaker’s Daughter",
    "author": "Iris Bell",
    "genre": "Historical",
    "synopsis": "A young inventor searches for the truth behind her father’s final machine.",
    "content": "In a city of brass towers, Ada discovers a clock that can replay one lost minute.",
    "chapter": "The machine clicked awake at midnight. Gears spun behind the glass, and a thin ribbon of light filled the workshop. Ada saw her father exactly as he had been on the night he disappeared, reaching toward a door that was not there. She pressed her palm to the glass. The minute restarted, and this time her father turned and looked directly at her.",
    "cover": "images/cover-10.svg"
  },
  {
    "id": 11,
    "title": "Goal Line",
    "author": "Marcus Reed",
    "genre": "Sports",
    "synopsis": "A benched football player gets one final chance to prove himself.",
    "content": "A new coach challenges Kai to lead a team that has forgotten how to trust.",
    "chapter": "The whistle blew, and the stadium seemed to hold its breath. Kai caught the pass with two defenders closing in. He could hear the old doubts from the bench, but he also heard his teammates calling his name. Instead of forcing the shot, he passed. The ball sailed cleanly into the open lane, and the winning goal belonged to the whole team.",
    "cover": "images/cover-11.svg"
  },
  {
    "id": 12,
    "title": "The Recipe for Rain",
    "author": "Mae Jun",
    "genre": "Slice of Life",
    "synopsis": "A baker learns to make peace with grief one recipe at a time.",
    "content": "After inheriting her aunt’s bakery, Hana finds a recipe that only works on rainy days.",
    "chapter": "Rain tapped the bakery windows while Hana mixed flour and sugar by hand. The recipe called for a pinch of salt, a spoon of honey, and one memory spoken aloud. She told the dough about her aunt’s laugh. The kitchen filled with the warm scent of cinnamon, and for a moment Hana could almost hear her humming. The bread rose, soft and golden.",
    "cover": "images/cover-12.svg"
  },
  {
    "id": 13,
    "title": "Neon Hearts",
    "author": "Kai Rivers",
    "genre": "Romance",
    "synopsis": "Two night-shift workers fall in love across a glowing city.",
    "content": "A convenience-store cashier and a delivery cyclist begin leaving notes for each other.",
    "chapter": "The first note said, “You forgot your umbrella.” The second said, “You left a song in my head.” By Friday, the notes had become a map of the city’s quiet places. They met at the river just before sunrise, both pretending the meeting was accidental. Neon signs blinked out behind them. “What happens tomorrow?” Alex asked. Ren smiled. “We leave another note.”",
    "cover": "images/cover-13.svg"
  },
  {
    "id": 14,
    "title": "The Dragon’s Bargain",
    "author": "Talia Storm",
    "genre": "Fantasy",
    "synopsis": "A village healer makes a dangerous deal with the dragon on the mountain.",
    "content": "To save her brother, Neri offers the dragon a secret instead of gold.",
    "chapter": "The dragon lowered its head until one golden eye filled Neri’s world. “Gold is easy,” it said. “Secrets cost more.” Neri told it the truth she had hidden for years: she had always dreamed of leaving the village. The mountain trembled. The dragon laughed, a sound like thunder rolling through stone, then placed a glowing scale in her hand. “Now you have a choice.”",
    "cover": "images/cover-14.svg"
  },
  {
    "id": 15,
    "title": "Offline",
    "author": "Noah Pixel",
    "genre": "Sci-Fi",
    "synopsis": "A gamer wakes to discover the world is running on a failing simulation.",
    "content": "When the city glitches, Ren finds a hidden command that can stop time.",
    "chapter": "The traffic froze mid-turn, rain hung in the air, and a bird stayed motionless above the street. Ren’s phone displayed a command line he had never installed. One prompt blinked: CHOOSE WHAT TO SAVE. He thought of the people he loved, the places he knew, and the strange beauty of an imperfect world. His fingers hovered over the screen as the countdown began.",
    "cover": "images/cover-15.svg"
  },
  {
    "id": 16,
    "title": "The Blue Lantern",
    "author": "Sofia Mar",
    "genre": "Adventure",
    "synopsis": "A lighthouse keeper follows a mysterious blue light beyond the reef.",
    "content": "After a storm, a lantern appears on the beach with a map inside its base.",
    "chapter": "The blue flame did not flicker in the wind. Lio carried it over the reef, where the waves opened around a path of pale stones. At the end stood a ship buried in coral, its sails intact beneath the water. The map warmed in his pocket. A bell rang from inside the hull, and the lantern answered with a brighter glow.",
    "cover": "images/cover-16.svg"
  },
  {
    "id": 17,
    "title": "Seven Days to Goodbye",
    "author": "Ella Finch",
    "genre": "Drama",
    "synopsis": "A family tries to repair old wounds during one final week together.",
    "content": "A box of unsent postcards brings three siblings back to their childhood home.",
    "chapter": "They sorted the postcards at the kitchen table, one for every year they had been apart. Their mother’s handwriting grew shakier with time, but each card carried the same question: when will you come home? No one answered at first. Then the oldest sibling slid a chair closer. They began with the smallest truth, and let the rest follow.",
    "cover": "images/cover-17.svg"
  },
  {
    "id": 18,
    "title": "The Perfect Lie",
    "author": "Victor Lane",
    "genre": "Thriller",
    "synopsis": "A witness realizes the detective investigating a crime is hiding something.",
    "content": "Mara’s statement changes each time she reads the official report.",
    "chapter": "The report said she had arrived at 8:15. Mara remembered the clock striking nine. It said the hallway was empty. She remembered a shadow by the stairs. Each correction made the detective smile less. At the bottom of the page, someone had typed a sentence she had never spoken: I saw nothing. She looked up. The office door was locked.",
    "cover": "images/cover-18.svg"
  },
  {
    "id": 19,
    "title": "Garden of Stars",
    "author": "Amara Bloom",
    "genre": "Fantasy",
    "synopsis": "A gardener grows constellations in a greenhouse hidden from the world.",
    "content": "Every flower in Sol’s garden contains a star from a forgotten sky.",
    "chapter": "Sol planted the last seed beneath the glass roof. By morning, a tiny constellation had opened like a white blossom. The stars above the city began to disappear, one by one, drawn toward the greenhouse. Sol realized the garden was not creating light. It was returning stolen wishes to the people who had made them.",
    "cover": "images/cover-19.svg"
  },
  {
    "id": 20,
    "title": "The Campus Pact",
    "author": "R. L. James",
    "genre": "Young Adult",
    "synopsis": "Five strangers make a pact to help each other survive their first year.",
    "content": "A lost notebook connects students who have never spoken before.",
    "chapter": "The notebook passed from desk to desk, each page filled with one honest fear and one small promise. By midterm, the five strangers had become the people each other called after a bad day. On the last page, someone had written, “We made it this far together.” Beneath it, four signatures waited for the fifth.",
    "cover": "images/cover-20.svg"
  },
  {
    "id": 21,
    "title": "Beneath the Red Sky",
    "author": "Dante Grey",
    "genre": "Post-Apocalyptic",
    "synopsis": "A courier crosses a ruined world carrying a message that could unite it.",
    "content": "The last working radio tower stands beyond a desert of red dust.",
    "chapter": "Dust scraped against Mara’s goggles as the tower appeared on the horizon. The message in her pack weighed almost nothing, yet every settlement she had crossed had tried to steal it. She climbed the final ladder and connected the transmitter. For the first time in twenty years, a voice answered from beyond the mountains: “We hear you.”",
    "cover": "images/cover-21.svg"
  },
  {
    "id": 22,
    "title": "The Art of Almost",
    "author": "Chloe West",
    "genre": "Romance",
    "synopsis": "Two best friends keep missing their chance to confess their feelings.",
    "content": "A series of almost-dates forces Bea and Noah to reconsider what they want.",
    "chapter": "They missed the train, spilled the coffee, and arrived at the film after the ending. Still, Noah kept walking beside Bea as if the evening had gone exactly to plan. At the station, she finally laughed. “We’re terrible at dates.” He looked at her, suddenly serious. “Maybe we should stop pretending these aren’t dates.”",
    "cover": "images/cover-22.svg"
  },
  {
    "id": 23,
    "title": "The Bone Collector",
    "author": "S. K. Vale",
    "genre": "Horror",
    "synopsis": "A museum intern finds a relic that remembers every person who touched it.",
    "content": "The artifact whispers names after the museum closes.",
    "chapter": "The first name came through the glass case like a breath. Then another, and another, until the gallery filled with voices. Nia reached for the alarm, but the relic pulsed beneath its velvet stand. A label had appeared beside it in fresh ink: RETURN WHAT WAS TAKEN. The security camera turned slowly toward her.",
    "cover": "images/cover-23.svg"
  },
  {
    "id": 24,
    "title": "Orbit of Us",
    "author": "Milo Chen",
    "genre": "Sci-Fi Romance",
    "synopsis": "Two astronauts fall in love while repairing a station drifting from Earth.",
    "content": "A damaged navigation system leaves the crew with one chance to return home.",
    "chapter": "Earth turned below them, blue and impossibly far away. Mina held the cable while Jules tightened the final bolt. Their gloves touched, and neither pulled away. “If we make it back,” Jules said through the radio, “I’m taking you somewhere with gravity.” Mina laughed, and the station lights came back on one by one.",
    "cover": "images/cover-24.svg"
  },
  {
    "id": 25,
    "title": "The Hidden Heir",
    "author": "Celia North",
    "genre": "Fantasy",
    "synopsis": "A village messenger learns she is the missing heir to a vanished dynasty.",
    "content": "A royal seal arrives inside an ordinary parcel of dried herbs.",
    "chapter": "The seal fit the mark on Lysa’s wrist perfectly. The old messenger who delivered it bowed so low his forehead touched the floor. “Your family has waited,” he said. Lysa looked at the crowded village square, at the people who had raised her, and at the road leading toward the capital. She folded the royal letter and asked for a horse.",
    "cover": "images/cover-25.svg"
  },
  {
    "id": 26,
    "title": "Last Train Home",
    "author": "Benji Park",
    "genre": "Drama",
    "synopsis": "A late-night train ride helps a stranger decide what to do next.",
    "content": "Two passengers share stories as the final train crosses the city.",
    "chapter": "The train rattled through empty stations while the stranger spoke about the job he had quit and the apology he had avoided. Across from him, Mara listened without offering easy answers. When the doors opened at her stop, she stood, then turned back. “You can still call them,” she said. Outside, dawn was beginning to soften the windows.",
    "cover": "images/cover-26.svg"
  },
  {
    "id": 27,
    "title": "The Cipher Club",
    "author": "A. J. Quinn",
    "genre": "Mystery",
    "synopsis": "A school club solves puzzles that point to a decades-old disappearance.",
    "content": "An anonymous puzzle appears on the club’s bulletin board each Monday.",
    "chapter": "The puzzle looked simple until Theo noticed the empty squares formed a map. The club spread papers across the floor, connecting numbers, dates, and old school photographs. At the center was a name removed from every yearbook. The final clue led beneath the auditorium stage, where a small metal box waited in the dark.",
    "cover": "images/cover-27.svg"
  },
  {
    "id": 28,
    "title": "Wildflower Road",
    "author": "June Ellis",
    "genre": "Coming of Age",
    "synopsis": "A teenager takes a road trip to find the person she wants to become.",
    "content": "With a camera and a borrowed car, Liv follows a list of places her mother loved.",
    "chapter": "At every stop, Liv took a photograph and wrote one sentence in her notebook. The mountains looked different from the pictures, and so did she. Near the coast, she found a letter tucked into the camera bag. Her mother had written it years ago: “You don’t have to become me. Just keep going until the view feels like yours.”",
    "cover": "images/cover-28.svg"
  },
  {
    "id": 29,
    "title": "The Silent Kingdom",
    "author": "Orin Frost",
    "genre": "Fantasy",
    "synopsis": "A prince enters a kingdom where every spoken word has a price.",
    "content": "To break the silence, he must learn the language of forgotten things.",
    "chapter": "The market moved without a sound. Coins changed hands, bread was wrapped, and children played in the square, all in silence. Prince Iven had been warned not to speak, but the old woman at the fountain held out a cracked bell. He rang it once. Every shadow in the kingdom turned toward him, and the first word in a hundred years rose from the stones.",
    "cover": "images/cover-29.svg"
  },
  {
    "id": 30,
    "title": "The Final Encore",
    "author": "Maya Hart",
    "genre": "Music",
    "synopsis": "A singer returns to the stage after a performance that changed her life.",
    "content": "A forgotten demo gives an anxious musician one last reason to perform.",
    "chapter": "The backstage mirror was lined with bulbs, but only half were working. June played the old demo through a tiny speaker and heard the fearless voice she used to have. She could not become that person again. She could, however, bring everything she had learned into the song. When the curtain rose, she stepped forward and let the first note be imperfect.",
    "cover": "images/cover-30.svg"
  },
  {
    "id": 31,
    "title": "Whispers in the Rain",
    "author": "Lena Frost",
    "genre": "Paranormal",
    "synopsis": "A student can hear memories in the sound of falling rain.",
    "content": "Each storm reveals a secret from the town’s forgotten past.",
    "chapter": "Rain tapped the classroom roof, and a voice spoke through the gutters. It described a locked room beneath the old station and a promise broken long ago. Mara followed the sound after school, carrying an umbrella that kept turning inside out. Under the platform, she found a wall covered in names. One was hers, written in fresh blue paint.",
    "cover": "images/cover-31.svg"
  }
];
