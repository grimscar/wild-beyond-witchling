const WBW_REALMS = [
  { id: "carnival", name: "The Witchlight Carnival", short: "Carnival", blurb: "The Feywild come to Faerûn: a carnival of wonders where every visit has a cost." },
  { id: "hither", name: "Hither", short: "Hither", blurb: "Bavlorna's swamp of muck and misery, bullywug courts and tolls paid in memories." },
  { id: "thither", name: "Thither", short: "Thither", blurb: "Granny Nightshade's domain, where lost children toil at Loomlurch and a unicorn waits on her island." },
  { id: "yon", name: "Yon", short: "Yon", blurb: "A realm of stone and storm, the land of bad endings. Trust the mountain more than the people." },
  { id: "prismeer", name: "All of Prismeer", short: "Prismeer", blurb: "The powers behind it all: Zybilna, the Hourglass Coven and the League of Malevolence." }
];

const WBW_SESSIONS = [
  {
    key: "1",
    act: "carnival",
    title: "Every Visit Has a Cost",
    summary: "Strangers who have each lost something meet at the gate of the Witchlight Carnival and spend their first tickets on dragonflies, cupcakes and swans.",
    scenes: [
      {
        title: "At the Gate",
        lines: [
          "A longing to get back what they once lost has brought each of them to the Witchlight Carnival, where the Feywild has come to Faerûn.",
          "They stand near the entrance with other visitors who are missing something, and catch sight of Mister Light. Every visit has a cost.",
          "They forget to buy a ticket at first. An elderly goblin ticketmaster sells them tickets, each one good for 8 attractions.",
          "At the gate: Flickerwick the fairy, Rielle the halfling, Gorse the harengon, Pachinko the tiefling and Ballax the dragonborn."
        ]
      },
      {
        title: "The Dragonfly Rides",
        lines: [
          "First up are the dragonfly rides. They pass a living tree visited by a squirrel named Red. Rielle doesn't smile.",
          "A dwarf with a huge blue beard rides without buckling in. When he starts to fall, Ballax swoops in on his own dragonfly and saves him.",
          "The dwarf, Bluebeard, demands pizza in a cup."
        ]
      },
      {
        title: "The Feasting Orchard",
        lines: [
          "Bluebeard pays for everyone's custard and pizza in a cup.",
          "The party enters the eating contest. Ballax throws up eight fairy cakes on Bluebeard, Flickerwick makes it to 14 cupcakes, and Gorse wins: the prize is an invisible cupcake."
        ]
      },
      {
        title: "The Swan Gondolas",
        lines: [
          "A talking swan carries them along the water.",
          "They hear that Candlefoot the mime proposed to Palasha the mermaid, but his voice left him.",
          "Burly guards the staff wagons and misses his brother, Hurly.",
          "Elsewhere, a bard finds Carzeiros, an elf, and tells him to go find his new friends at the swans. She is the anonymous benefactor.",
          "Unknown to the group, Carzeiros means to find the bard again and learn how she knew he was supposed to meet up with them."
        ]
      },
      {
        title: "The Big Top",
        lines: [
          "Rielle talks the group out of seeing an awesome fire-and-smoke mephit show. Carzeiros sneaks in and sees it anyway.",
          "Everyone else spends the time looking at some boring rocks that are still under construction."
        ]
      }
    ],
    quotes: [
      { by: "Rielle", text: "I told y'all those rocks weren't an attraction!" }
    ]
  },
  {
    key: "2",
    act: "carnival",
    title: "Pixie Names and Snail Races",
    summary: "Pixie names, a snail race, a warning from Burly and a daring plan: steal Mister Witch's watch in the middle of a Big Top show.",
    scenes: [
      {
        title: "Stolen Smiles",
        lines: [
          "The party runs into three kids with no wristbands to show they paid their way in.",
          "Gorse watches three creepy things steal the children's smiles and their ability to keep a secret, but can't work out what is really happening."
        ]
      },
      {
        title: "The Pixie Kingdom",
        lines: [
          "In the Pixie Kingdom, Jeremy Plum (a pixie, not a sprite) hands out pixie names: Flickerwick is Cotton Candy, Gorse is Dimple, Ballax is Jelly Bean Starfish and Rielle is Toadhop. Somebody also ends up as Puddlemud.",
          "There are thimbleberry tarts and sandwiches, and a wheel powered by a hamster.",
          "Rielle is told to keep an eye out for a kenku troublemaker: she's the one who messed with the dragonflies, and she took Candlefoot's voice.",
          "Carzeiros wins the hide-and-seek game and a bag of pixie dust.",
          "To find out more about Mister Light, they should talk to Burly in the staff area."
        ]
      },
      {
        title: "The Snail Race",
        lines: [
          "Two goblins officiate the snail race while pixies clean the snails' shells.",
          "Results: 1st High Road (Gorse), 2nd Quickleaf (Flickerwick), 3rd an average human, 4th Wizzy (Rielle) and Bluey Gnoll, 5th Bingo, 6th Break Neck (Carzeiros), 7th Nimblefoot (Ballax).",
          "The prize is a potion of advantage. Ballax gets a wand of dancing lights and casts it immediately."
        ]
      },
      {
        title: "Burly's Warning",
        lines: [
          "Leaving the snail race, they meet Burly, who has them talk in private in the staff area.",
          "Something is off with Mister Light and Mister Witch. People and things keep going missing, and the party will need leverage to make them spill the beans.",
          "At the end of the carnival the Witchlight Monarch will be chosen. Mister Witch's watch is attached to his waistcoat.",
          "Stay away from Thaco, the lead clown. Dirlagraun, Candlefoot and Palasha can be trusted."
        ]
      },
      {
        title: "At Mister Witch's Door",
        lines: [
          "Carzeiros casts fog cloud and picks the lock of Mister Witch's door, just as Ballax knocks on it.",
          "Mister Witch and Mister Light spot Carzeiros and introduce themselves. He says he's here to save the carnival and needs the watch to do it, and blames Thaco.",
          "They see through the deception and ask him to smile. Instead, he frowns and growls.",
          "He fails to impress, but still gets the party an invitation to perform at the Big Top Extravaganza."
        ]
      },
      {
        title: "The Lost and Found",
        lines: [
          "Looking for instruments, they find a giant cat in fake wings playing with two children: Dirlagraun, a displacer beast who runs the Lost and Found.",
          "One kid runs off. Gorse spots him running toward the Feasting Orchard, and Rielle and Carzeiros go after him and talk him into coming back.",
          "Dirlagraun once lost her own cub without a trace, and a small ball reminds her of him. The party offers to find the lost cub and pockets the ball.",
          "They get the instruments they need."
        ]
      },
      {
        title: "The Plan",
        lines: [
          "A light show, a sick drum beat, angry singing and board breaking, while Carzeiros steals the watch during the show if he can.",
          "The lineup: Rielle on the Flaming Glaur (a fantasy trumpet), Flickerwick on drums, Gorse breaking boards, Carzeiros on fog cloud and theft, and Ballax on heavy metal vocals, in Draconic so the kids can't understand the lyrics."
        ]
      }
    ]
  },
  {
    key: "3",
    act: "carnival",
    title: "The Big Top Heist",
    summary: "The Prismeer Players take the stage, the crowd goes wild and Carzeiros walks off with Mister Witch's watch. Then the Hall of Illusions shows its tricks.",
    scenes: [
      {
        title: "The Big Top",
        lines: [
          "Mister Witch and Mister Light are arguing as the show begins.",
          "Carzeiros lays down a fog cloud with dancing lights, Flickerwick hits the drum beat, and the Pixie? and Prismeer Players take the stage.",
          "Carzeiros's bagpipes don't impress, but Rielle wins the crowd back on the flaming instrument. Ballax's guttural growls draw people in, though some dragonborn families leave with their kids. Gorse does OK-ish at breaking boards.",
          "During Rielle's flaming-hair solo, with extra distraction from Ballax and a sorcerous burst from Rielle, Carzeiros sneaks off, snips the belt loop and steals the watch from Mister Witch.",
          "Gorse snaps a board into a rampage of flames to a bagpipe solo from Carzeiros, back on stage. Flickerwick busts his drum. The crowd goes wild.",
          "Afterwards Carzeiros notices that his clothes are a little tighter, and he's a little extra hungry."
        ]
      },
      {
        title: "The Staff Area",
        lines: [
          "In the staff area, Burly panics a little: they actually stole the watch.",
          "He suggests holding out until the monarch is crowned at the end. The mime and the mermaid can be trusted. The clown cannot.",
          "Avoid Mister Witch and Mister Light as best they can until the end of the fair. NO FIGHTING."
        ]
      },
      {
        title: "The Hall of Illusions",
        lines: [
          "Burly tells them Dirlagraun's cub went missing in the Hall of Illusions.",
          "Candlefoot, who lost his voice trying to propose to Palasha, confirms the cub vanished inside, and doesn't think the party will get lost in there.",
          "Flickerwick can't help himself and tells Candlefoot that Carzeiros has Mister Witch's watch. Rielle asks Candlefoot to keep it on the down-low.",
          "A halfling couple approach a sign reading Tasha's Hideous Laughter. He puts a box in her hand, she bursts out laughing uncontrollably, and he runs away. (He wasn't hole-punched.)",
          "Anyone who gets too close to that display laughs hysterically, and Mister Witch and Mister Light insist it stays put.",
          "The mirrors show the party in their old age, or young.",
          "Gorse, a little separated from the others, finds the halfling who ran off, and spots one of the weird creatures from before approaching him.",
          "A pig girl turns out to be the halfling's reflection. He reaches for the mirror, and Gorse's distraction makes it return to normal.",
          "The odd creature had told him they could make things right. He's confused, but as he settles down, things go back to normal."
        ]
      }
    ],
    next: "A quick booth game, then the Mystery Mine."
  },
  {
    key: "4",
    act: "carnival",
    milestone: "Gorse crowned Witchlight Monarch",
    title: "Long Live the Monarch",
    summary: "Carnival games, the Mystery Mine and a talkative kenku. Then Gorse is crowned Witchlight Monarch, and Mister Witch opens the way to Prismeer.",
    scenes: [
      {
        title: "Carnival Games",
        lines: [
          "Rielle plays Outstare the Cyclops and wins a toy spider!",
          "Flickerwick fails the ring toss spectacularly, even with a little illusion cheating.",
          "Ballax plays Wrestle the Goblin and makes a best bro for life.",
          "Gorse plays Pull the Dragon's Tail, wins super easily and takes home a pan flute."
        ]
      },
      {
        title: "The Mystery Mine",
        lines: [
          "The party spends their last ticket on the Mystery Mine, and it plunges them into darkness.",
          "A kenku jumps onto the ride and screams that it's broken.",
          "Flickerwick and Rielle are confronted with their failures. Everyone else has a great time."
        ]
      },
      {
        title: "The Kenku",
        lines: [
          "After a frustrating back-and-forth with Candlefoot, the party agrees to track down the troublemaking kenku who probably stole his voice.",
          "They spot her bursting the bubbles from the Bubble-Pop Teapot, and Carzeiros chases her down with stealth.",
          "Mister Witch and Mister Light can reach the Feywild, but she can't. She wanted to confront them about it, but they keep giving her the cold shoulder.",
          "She overheard them agreeing to a pact with the Hourglass Coven: the hags take what they want, and the carnival stays in business.",
          "Prismeer is the Feywild domain ruled by Zybilna. No one has been able to reach Zybilna lately, and the way into Prismeer is blocked."
        ]
      },
      {
        title: "Buying Time",
        lines: [
          "They bring the watch to Burly, and Thaco sees it. Carzeiros buys them time until tonight by telling Thaco they know his secret."
        ]
      },
      {
        title: "The Big Top Extravaganza",
        lines: [
          "Gorse wins the Monarch crown!",
          "The Charm of the Monarch lets Gorse sprout butterfly wings for an hour: flying at walking speed, with +5 on Charisma checks. After three uses, the charm vanishes."
        ]
      },
      {
        title: "Confronting Witch and Light",
        lines: [
          "The party confronts Mister Witch. Under contract, he and Mister Light can't tell them anything.",
          "He can open a way into Prismeer for them, through the mirrors of the Hall of Illusions.",
          "His advice: mind the rule of three (future, present, past), and remember that hospitality is important.",
          "Carzeiros gives up the watch."
        ]
      }
    ]
  },
  {
    key: "5",
    act: "hither",
    title: "The Toll of Memories",
    summary: "Into Prismeer: a broken bridge, a brigand prince who takes memories as tolls, a well that wants its stolen gifts back, and an inn that walks.",
    scenes: [
      {
        title: "The Broken Bridge",
        lines: [
          "The party arrives in Prismeer on a broken bridge and spots a hot air balloon crashing. They climb down into the swamp to investigate."
        ]
      },
      {
        title: "Agdon Longscarf's Toll",
        lines: [
          "Six bipedal rabbits approach, singing a song and escorting a snail: the band of Agdon Longscarf, brigand prince of Prismeer.",
          "They want a memory from each of them as a toll. The party negotiates it down to two.",
          "Carzeiros gives them the memory of wiping his butt with poison herbs. Ballax pees in the bottle."
        ]
      },
      {
        title: "The Singing Well",
        lines: [
          "Floating bubbles whisper to them, and wisps of light speak of the swamp draining and filling.",
          "Trinkets circulate in the well. Flickerwick knocks some out with mage hand, and the well answers in rhyme.",
          "What is freely given is yours, but what is stolen is owed. Rielle throws in the toy spider and keeps a pan flute in trade, one that attracts local fauna.",
          "For their honor, the well leaves them a spark, and a prophecy of a sleeping Lady and her sisters."
        ]
      },
      {
        title: "The Inn at the End of the Road",
        lines: [
          "A three-story inn walks through the lake on dozens of legs: the Inn at the End of the Road.",
          "Tsu Harabax is the innkeeper.",
          "Some sort of transformative magic on Rielle is obvious, but the truth of it isn't clear yet."
        ]
      }
    ]
  },
  {
    key: "6",
    act: "hither",
    title: "The Knight in the Silver Cage",
    summary: "The inn's secrets, a small knight in a silver cage, a goblin with a dragon key, and a vision of a shadow on the move.",
    scenes: [
      {
        title: "The Inn",
        lines: [
          "The hags are keeping the inn trapped in the swamp, and Zybilna is missing.",
          "Ballax plays his #1 song.",
          "A knight, Sir Talavar, stayed the night before and left behind a broken hourglass.",
          "On their way out, the innkeeper transforms into a black cat."
        ]
      },
      {
        title: "The Crashed Balloon",
        lines: [
          "Brave Wiggawog did not survive the crash.",
          "Sir Talavar is hiding in a silver cage and asks for help. He stole something from one of the hags, Bavlorna.",
          "The party hacks through thorns (Ballax gets pissed on). Flickerwick ties a rope around the cage and they haul it up, until Sir Talavar cuts the rope! They convince him they're there to save him.",
          "Carzeiros fails to pick the lock. A goblin called Jingle Jangle holds the key, atop a hill.",
          "Whoever holds the pendant, the broken hourglass, can find Sir Talavar.",
          "Snakes sneak up behind them and the party runs. Flickerwick casts feather fall so everyone lands safely, and Rielle's sorcerous burst sets the brambles alight to cover the escape."
        ]
      },
      {
        title: "The Reflecting Stream",
        lines: [
          "On the way to the hill, a stream shows them a vision in their reflections: a tall, thin figure in a pointy black hat and hooded cloak climbs to a ramshackle house on stilts, and its shadow detaches and crawls in through an open window."
        ]
      },
      {
        title: "Telemy Hill",
        lines: [
          "On Telemy Hill the trees have faces. Jingle Jangle was recently hurt by the rabbit-folk brigands.",
          "The party vows vengeance for Jingle Jangle, and she gives them a dragon key for the cage.",
          "Freed, Sir Talavar gives a mighty roar (for his size) and presents Carzeiros with a +1 dagger.",
          "Agdon keeps his troops at the great tree stump, the Great Tollway. Granny Nightshade takes things and doesn't obey the rules.",
          "To get from Hither to Thither they need Clapperclaw, a raven with pincers like a crab. He's in Downfall, where frogs croak louder than thunder."
        ]
      },
      {
        title: "The Mud Mephits",
        lines: [
          "Mud mephits insist the party journey into the mud, unless they can answer two questions.",
          "Rielle solves the riddle: mud pies!"
        ]
      },
      {
        title: "The Tree Stump",
        lines: [
          "At the tree stump, Agdon Longscarf throws off his cloak to reveal a billowing blue scarf, with bagpipes playing. The party is surprised."
        ]
      }
    ]
  },
  {
    key: "7",
    act: "hither",
    title: "The Court of Downfall",
    summary: "Agdon is made to apologize, Ballax is branded a friend, and in bullywug Downfall a balloon factory burns while Rielle hunts for the rules of court.",
    scenes: [
      {
        title: "Agdon's Apology",
        lines: [
          "The party forces Agdon Longscarf to send a runner to apologize to Jingle Jangle.",
          "His brigands work for one of the hags, Bavlorna.",
          "Rielle pays the harengon's toll with a secret: the story of the lost smile.",
          "The swamp can't be crossed without a skiff. Agdon returns with one, and Ballax takes a branding for... friendship.",
          "They take the skiff to Downfall."
        ]
      },
      {
        title: "Downfall",
        lines: [
          "Downfall is full of bullywugs who follow court protocols. Rielle keeps trying to find out what the protocols are; everyone else just pushes the party to talk to the king.",
          "The bullywugs build and fly hot air balloons.",
          "The balloon factory catches fire and the party can't stop it. Just before the building collapses, Rielle rushes in and rescues an artifact: a brass brooch shaped like a fly, its wings seeming to move."
        ]
      },
      {
        title: "The Bridge of Former Kings",
        lines: [
          "The Bridge of Former Kings is lined with 18 talking heads of former bullywug kings.",
          "Ahead of them waits a distraught Clapperclaw."
        ]
      }
    ],
    quotes: [
      { by: "Rielle", text: "They should have just pointed me to a book on protocols. And remember, snitches get stitches." }
    ]
  },
  {
    key: "8",
    act: "hither",
    milestone: "Knighted into the Soggy Court",
    title: "Knights of the Soggy Court",
    summary: "Court manners, a cask of rye and a knighthood from King Gullop XIX, then a shop under a captured storm and a baron plotting revolution.",
    scenes: [
      {
        title: "Clapperclaw",
        lines: [
          "Clapperclaw comes from the next kingdom over and wants his head back: that's what was stolen from him.",
          "The heads on pikes teach the party the court protocols: bow to the assembled monarchs, offer a sincere compliment, and share a small truth."
        ]
      },
      {
        title: "The Court of King Gullop XIX",
        lines: [
          "Rielle performs the protocols (and can tolerate these companions).",
          "The party is offered bullywug-themed food and drink. Carzeiros delivers a toast, sloshing his glass around to spread any possible poison.",
          "The drinks are pretty disgusting, but Ballax impresses with flattery and gets to taste a proper whiskey.",
          "Bavlorna keeps an exhaustive list of everyone who displeases her. Sir Talavar escaped, and King Gullop was supposed to keep him for her.",
          "He gives the party a book to deliver to Bavlorna to appease her, and Ballax talks him into adding a cask of rye.",
          "Everyone becomes a Knight of the Soggy Court so they can visit Bavlorna, and the bullywugs dress them in resplendent garments.",
          "Flickerwick gets a letter in a mug: “Find Illig, the Baron of Muckstump, at once. The revolution lives.”"
        ]
      },
      {
        title: "Trinket and Bauble's Stall",
        lines: [
          "Leaving court, they find a shop with a storm captured above it, run by two darklings, Trinket and Bauble.",
          "Available for a limited time only: a very good thimble (fingertip not included), a mug of Bumble Beer (it has a nice sting), Duskmallow pie (with decorative bite marks), a bundle of dry wood (great for starting fires), ink portraits (if we have to look at you, so should you) and a moonlight monocle (no more fumbling in the dark).",
          "A tree full of annoying creatures makes fun of the party. They're hiding in a tree blight, and Rielle's sorcerous burst gets one before the rest hide."
        ]
      },
      {
        title: "The Hut",
        lines: [
          "A hut that smells of decaying fish, with a chest in the middle. The party thinks the chest is trapped. It isn't.",
          "A mummified toad falls out, giving off evocation magic. Tossed into a pot or kettle of water, it vanishes and fills the place with magical darkness for 10 minutes."
        ]
      },
      {
        title: "Baron Illig's Hut",
        lines: [
          "Illig's crew plans to kill the king and put Illig on the throne. They seem a little incompetent.",
          "Illig asks the party to check the book: if the king's name is in it, trust Illig, not the king.",
          "Flickerwick finds an entry from Bavlorna about the king, but tells everyone there's nothing of interest about the king in the book."
        ]
      }
    ]
  },
  { key: "9", act: "hither", gap: true },
  { key: "10", act: "hither", gap: true },
  {
    key: "11",
    act: "hither",
    milestone: "Paths chosen",
    title: "Bavlorna's Cottage",
    summary: "Wasps, a rude redcap cook and Bavlorna herself. The party returns her book and blames Baron Illig, and then Flickerwick cracks.",
    scenes: [
      {
        title: "New Paths",
        lines: [
          "Rielle goes with wild magic, Flickerwick with the School of Illusion, and Gorse with the Rage of the Wilds."
        ]
      },
      {
        title: "Downstairs",
        lines: [
          "The frogs outside Bavlorna's cottage give a warning call.",
          "The party fails its investigation of the taxidermy room.",
          "Flickerwick casts knock on a locked cupboard: misc junk, and a scrap of paper in a teacup with one word on it, spittlespew.",
          "The party attacks a wasp swarm above the door leading up. Rielle's wild magic sends Rielle to another dimension, and Gorse kills the swarm with a few swings."
        ]
      },
      {
        title: "The Kitchen",
        lines: [
          "Upstairs, a cook called Bloody Toes is chasing two birds with a cleaver. She's a redcap, not a dwarf.",
          "She asks for help killing the vultures for dinner. Once that's done and she learns the party is looking for Bavlorna, she turns rude.",
          "Gorse, in a rage, takes offense and kills her."
        ]
      },
      {
        title: "Bavlorna",
        lines: [
          "The party overhears Bavlorna talking with a third party and walks in. Two tiny versions of herself cling to her leg.",
          "Rielle remembers being a child at the Witchlight Carnival, when a tiny, bug-eyed thing that looked like Bavlorna caught up with Rielle and stole a smile.",
          "The party blames Baron Illig for stealing her book of bad blood, and returns it. She crosses a few names off afterwards.",
          "Flickerwick can't keep up the lie, and admits to Bavlorna that the party attacked the wasps first and Gorse killed the chef."
        ]
      }
    ],
    quotes: [
      { by: "Rielle", text: "Only Rielle knows what she saw in the astral." },
      { by: "The DM", text: "Not hostile..rude" },
      { by: "Gorse", text: "matter of perspective" }
    ]
  },
  {
    key: "12",
    act: "hither",
    title: "The Hag's Bargain",
    summary: "Bavlorna has the party's missing smiles. To earn them back: clear her pool, then steal a portrait from her sister in Thither within eight days.",
    scenes: [
      {
        title: "The Pool",
        lines: [
          "Bavlorna has the party's missing smiles. She'll start bargaining once they deal with whatever is ruining her pool of water.",
          "Carzeiros notices that the darkling doesn't cast a shadow.",
          "The party kills the gelatinous cube blocking her pool."
        ]
      },
      {
        title: "The Bargain",
        lines: [
          "She wants them to travel to Thither, infiltrate her sister's home at Loomlurch and steal a portrait.",
          "She offers three jars holding two smiles and a sense of fashion. If they don't finish the task in eight days, the stolen things return to Bavlorna.",
          "Prismeer was ruled and kept by Zybilna. With her missing, three hags have split the domain into Hither, Thither and Yon, and Bavlorna sees all of Hither as hers.",
          "Three rules hold here: hospitality (be hospitable to new visitors), ownership (what's yours is yours; stealing is extremely discouraged) and reciprocity."
        ]
      },
      {
        title: "The Third Floor",
        lines: [
          "She sends them to the third floor to fetch Clapperclaw's head.",
          "A chest they try to open turns out to be a mimic.",
          "Gorse busts down a door into a closet of sorts with a skull inside. They also see one of Bavlorna's tiny things die, maybe."
        ]
      }
    ]
  },
  {
    key: "13-18",
    act: "thither",
    label: "Sessions 13–18",
    badge: "13–18",
    title: "Will's Tree and Lamorna's Island",
    aside: "Notes were posted for only one of these six sessions. This is it.",
    summary: "A tree house full of escaped children, a plan to raid Loomlurch, the unicorn Lamorna's secrets, and an assassin from the League of Malevolence.",
    scenes: [
      {
        title: "Will's Tree",
        lines: [
          "The party approaches a massive treant with a tree house on its back, a happy scene full of laughing children.",
          "An older kid stops them and asks who they are. They say they're not with Granny and want to bring the children to safety.",
          "Inside the tree house are a bunch of kids, a displacer beast kitten (Dirlagraun's cub!) and Will of the Feywild. Carzeiros fires a flare to signal Dirlagraun.",
          "Will agrees to take care of the children."
        ]
      },
      {
        title: "Plans for Loomlurch",
        lines: [
          "Granny Nightshade's guards are tin soldiers: tough, but distractible. Her boggles linger from the sadness of the children who slave away in her workshop.",
          "Inside Loomlurch is a goblin marketplace. Posing as merchants, the party will get a meeting with Granny Nightshade and cause a distraction.",
          "Will's Getaway Gang will sneak in, unseen, and alert the scarecrows so the tin soldiers go to investigate.",
          "That's when the children go free and the portrait gets stolen. Everyone regroups at Loomlurch."
        ]
      },
      {
        title: "Lamorna's Island",
        lines: [
          "The party borrows the Getaway Gang's unicorn costume to visit the unicorn, planning to meet the gang later at Loomlurch.",
          "In costume on Lamorna's island, Flickerwick casts fire bolt on a bowl of coals, and the unicorn appears.",
          "Her mate, Elidon, was captured, and his horn was used to seal Zybilna in the Palace of Heart's Desire. Elidon is likely still a prisoner somewhere.",
          "In Yon, Amidor the Dandelion can lead them safely to the Palace of Heart's Desire, where a library on the second floor holds Zybilna's most treasured tomes.",
          "Lamorna lets them use her pool to remove curses."
        ]
      },
      {
        title: "Zarak the Assassin",
        lines: [
          "A male orc attacks out of nowhere and tries to grab Ballax. Carzeiros and Gorse beat him down, Flickerwick's suggestion makes him drop his dagger, and he surrenders.",
          "Ballax defuses the situation with friendship, and the orc, Zarak, talks.",
          "He was hired by the League of Malevolence to kill Lamorna. The League is led by Kelek, a human sorcerer, and works out of the Palace of Heart's Desire.",
          "Skylla, a human warlock with them, knows the most about the hags and Iggwilv's Cauldron, but she's missing.",
          "The Hourglass Coven used Iggwilv's Cauldron to freeze Zybilna in time. Ringlerun, who has a staff Kelek wants, is trapped in stasis with her.",
          "When the friendship wears off, Zarak tries to knife Ballax, and the party puts him down."
        ]
      }
    ]
  },
  {
    key: "19",
    act: "thither",
    title: "Into Loomlurch",
    summary: "Candy with side effects, a goblin who might have a worm in his head, and a house full of creepy toys. The boggles notice.",
    scenes: [
      {
        title: "The Approach",
        lines: [
          "The party crosses a bridge over a dried-up stream to Loomlurch.",
          "A pumpkin-headed scarecrow sells unappetizing candy with side effects, in exchange for trinkets. The lollipops attract fireflies.",
          "Carzeiros buys some with a bow, and it shrinks him down. Ballax turns into a butterfly?"
        ]
      },
      {
        title: "The Goblin Market",
        lines: [
          "Chucklehead (who seems like he might have a worm in his head) and the goblins ask the party to rescue Mishka from the kitchens.",
          "He'll arrange a meeting with Skabatha."
        ]
      },
      {
        title: "The House of Toys",
        lines: [
          "The walls of one room are covered in portraits of family members.",
          "Through the southwest entrance, a creepy jack-in-the-box pops, and Carzeiros notices a chair twitch. Detect magic reveals nothing.",
          "In the next room, children stop playing when they notice the party. More creepy toys.",
          "The kids are scared of the boggles and want the party to keep quiet.",
          "The boggles attack, because the party didn't disguise their talk with the kids much at all."
        ]
      }
    ],
    quotes: [
      { by: "Flickerwick", text: "This was session 19 btw. putting in the work with this module now" }
    ]
  },
  {
    key: "20",
    act: "thither",
    milestone: "Rielle falls, to return reincarnated",
    title: "The Sewing Room",
    summary: "A key for the kitchens, a tiny Flickerwick on a pig rescue, five strange mushrooms, and a rug that smothers Rielle.",
    scenes: [
      {
        title: "A Key and a Pig",
        lines: [
          "One of the children, no longer oppressed, will make the party a key to the kitchens in the workshop.",
          "Another kid won't leave until she gets her baby pig back.",
          "Flickerwick drinks one of Carzeiros's potions to become tiny and fit out the window, then sneaks off to retrieve the pig.",
          "Flickerwick finds five different mushrooms, and lures the baby pig out with a butterfly saddle."
        ]
      },
      {
        title: "The Sewing Room",
        lines: [
          "A creepy doll doesn't buy the party's “audit” excuse and runs out to get help.",
          "A rug attacks and smothers Rielle. The doll dies!",
          "Flickerwick puts Rielle out of the misery.",
          "An inner glowing light consumes Rielle's body... What will Rielle be reincarnated as? Find out next time."
        ]
      }
    ]
  },
  {
    key: "21",
    act: "thither",
    aside: "Not numbered in the Discord notes: placed between sessions 20 and 23 by when it was posted.",
    title: "Granny's Portrait",
    summary: "The last tin soldier falls, Gorse falls and gets back up, and the party walks off with Granny Nightshade's portrait, Mishka and a captured adventurer. Level 5!",
    milestone: "Level 5",
    scenes: [
      {
        title: "Tin Soldiers",
        lines: [
          "Gorse brings down his maul and smashes the last tin soldier, and finds a trinket: a silver fork with its outer tines bent sideways. The party also picks up a pixie-sized wig.",
          "Above the door hangs an opened cocoon, big enough for a small creature, with nothing inside. The door behind them has closed.",
          "Opening it, they find the sow pig back alive, and a group of tin soldiers.",
          "Gorse goes down in the fight, and the party has no healing. A candy has enlarged him and made his footsteps musical.",
          "Will tosses the party a potion, and they bring Gorse back up."
        ]
      },
      {
        title: "The Portrait",
        lines: [
          "In the next room hangs Granny Nightshade's portrait. The party snags it.",
          "The key to Mishka's chain works, and she's free.",
          "Gorse rips out the grates trapping Elkhorn, a captured adventurer.",
          "Will escorts the kids to freedom, counting on the party to keep Granny Nightshade distracted."
        ]
      },
      {
        title: "An Audience Arranged",
        lines: [
          "Chucklehead (or is it Cacklejack?) will arrange a meeting with Granny Nightshade.",
          "She seems into the idea of getting back at Bavlorna.",
          "Level 5!"
        ]
      }
    ]
  },
  {
    key: "22",
    act: "thither",
    aside: "Not numbered in the Discord notes: placed between sessions 20 and 23 by when it was posted.",
    title: "Two Hags, Two Bargains",
    summary: "Granny Nightshade names her price, Carzeiros wipes her spit on Flickerwick, and back in Hither Bavlorna makes a counteroffer.",
    scenes: [
      {
        title: "Granny Nightshade's Price",
        lines: [
          "The party meets Granny Nightshade (Skabatha) to settle compensation for stealing the painting and destroying her guards.",
          "Her demands: bring her Bavlorna's stolen shadow (the darklings have it), bring her a unicorn horn, and burn Little Oak to the ground.",
          "In return, the party may take two items from her workshop.",
          "She spits in her hand to shake on it. Carzeiros goes for a fist bump; she grabs his hand anyway. He wipes the spit on Flickerwick.",
          "Rielle has a bad feeling about the backlash if they DON'T do these things.",
          "Elidon is almost certainly imprisoned at Loomlurch, in the form of a rocking horse."
        ]
      },
      {
        title: "Back to Hither",
        lines: [
          "The party returns to the hot air balloon and heads back to Hither.",
          "There's an extra head on the Bridge of Former Kings.",
          "At Bavlorna's cottage, Carzeiros swims to the dock and the party fights two merrows. Rielle somehow manages to catch fire."
        ]
      },
      {
        title: "Bavlorna's Counteroffer",
        lines: [
          "Carzeiros offers to return Bavlorna's shadow in exchange for a unicorn horn and an illusion of Little Oak burning down.",
          "Bavlorna reminds them that Granny Nightshade's power ends in Thither, and offers protection from her if they work for Bavlorna instead.",
          "Bring her the unicorn horn, and she'll restore Gorse's ability to keep secrets.",
          "She doesn't need an answer right away, and encourages them to consider the offer."
        ]
      }
    ]
  },
  {
    key: "23",
    act: "thither",
    title: "The Jabberwock and the Road to Yon",
    summary: "A jabberwock wrecks the balloon, the darklings' shop is found in ruins, Will gets cagey about unicorn horns, and Dirlagraun leads the party into Yon.",
    scenes: [
      {
        title: "New Errands",
        lines: [
          "Bavlorna wants the party to find her needle and thread, to restore her self-doubt and frustration.",
          "They're also looking for a unicorn horn, for both Bavlorna and Skabatha."
        ]
      },
      {
        title: "The Jabberwock",
        lines: [
          "The party flies to Thither by hot air balloon to ask Dirlagraun for a trip to Yon.",
          "A jabberwock attacks, knocks the party to the ground and destroys the balloon. It barely manages to flee."
        ]
      },
      {
        title: "The Crashed Shop",
        lines: [
          "They reach the tree house. Will isn't sure what the cloud they saw was, and he and Dirlagraun come along to investigate.",
          "Carzeiros's hunch proves right: it was the traveling shop, and it has crashed.",
          "Most of the items are broken or damaged beyond repair. Carzeiros finds a monocle, and Flickerwick finds ichor from the darklings who once lived there."
        ]
      },
      {
        title: "On Unicorn Horns",
        lines: [
          "Dirlagraun says unicorn horns are extremely magical: spells go wonky around them, and whoever holds one can nullify a spell's effects.",
          "Will acts a little fishy when the horn comes up, then admits he once saw it while drifting in and out of consciousness. He's also oddly strong..."
        ]
      },
      {
        title: "Into Yon",
        lines: [
          "Dirlagraun guides the party from Thither to Yon. They doubt the trip back is possible without a guide.",
          "Yon is a realm of stone and storm, the land of bad endings. Trust the mountain more than the people.",
          "Five silhouettes appear, then vanish into the darkness."
        ]
      }
    ]
  },
  {
    key: "24",
    act: "yon",
    title: "Sisters of Sun and Moon",
    summary: "An elf without a shadow, a dandelion knight and a honey bee; then a cyclops, a starry throne, an avalanche and will-o'-wisps on the trail to Lockbury Henge.",
    scenes: [
      {
        title: "Three Strangers",
        lines: [
          "The party meets an elf, a dandelion and a honey bee: Selenelion, Amidor the Dandelion and Pollyanna.",
          "Selenelion casts no shadow. She used to perform at the Witchlight Carnival as an acrobat with her sister, Glister; their costumes were the moon and the sun.",
          "Endelyn Moongrave has imprisoned Glister at Motherhorn, unharmed but distressed. She stole Selenelion's shadow, believing it can help her avoid death during the eclipse.",
          "They mention Hurly: Burly's missing brother is in Yon.",
          "Amidor freed Pollyanna from a cyclops and wants the party to free her of that problem. He'll escort them through Yon."
        ]
      },
      {
        title: "The Beekeeper Cyclops",
        lines: [
          "On the trail to Lockbury Henge, working through the mountain, they run into the beekeeper cyclops!",
          "Among the spoils: an empty crystal vial shaped like a pixie on a delicate silver chain (75 gp), and an untuned lyre of exquisite quality (250 gp)."
        ]
      },
      {
        title: "A Throne Among the Stars",
        lines: [
          "On the trail they meet Mazelcoff, an elf: a celebrated astronomer who claimed to hail from a black star at the edge of night. His throne was often used for astronomical observations.",
          "Carzeiros sits on the throne, grows drowsy and falls into a trance, then takes a trippy trip through space."
        ]
      },
      {
        title: "Storm and Avalanche",
        lines: [
          "A storm throws them off course, to the site of an avalanche, where they hear a faint cry beneath the rubble.",
          "The one they rescue works for someone called Charm, and they're looking for the unicorn horn.",
          "Then will-o'-wisps attack, and the session ends with Ballax ready to start blastin'."
        ]
      }
    ]
  },
  {
    key: "25",
    act: "yon",
    milestone: "Carzeiros ages 399 years",
    title: "No Strings Attached",
    summary: "Vex falls, a talking kite ages Carzeiros 399 years, the Dead Ringers ring, shadows strike, and a pageant wagon hands out tickets to meet Endelyn Moongrave.",
    scenes: [
      {
        title: "The Will-o'-Wisps",
        lines: [
          "The session opens mid-fight with the will-o'-wisps. The party's weapons work well at first, then less so, as if the wisps suddenly remembered being resistant to physical damage.",
          "Vex, the wounded darkling, and Amidor the Dandelion jump into the fray. Vex is killed in the melee and explodes into a burst of light.",
          "The party destroys the last of the will-o'-wisps and buries Vex back under the landslide."
        ]
      },
      {
        title: "The Kite",
        lines: [
          "Heading straight for Lockbury Henge, they notice that the 30-foot copper rods placed around Yon seem to work as lightning rods.",
          "On a windy plateau, a goblin child is flying a kite. The kite taunts the child and the party.",
          "They really, really, really, really want to get to Lockbury Henge, but finally decide to help, quickly.",
          "Carzeiros gets impatient and takes the kite string from the goblin child. Rielle shoots the talking kite (made of some kind of leather skin) with witch bolt, Carzeiros loses his grip on the string, and he ages 399 years.",
          "Carzeiros is now a middle-aged drow: Paul Rudd or Wilford Brimley, depending on who you ask.",
          "Carzeiros is gifted a pendant that shows the phases of the moon and an iron needle with an eye that refuses to let thread pass through it.",
          "Endelyn Moongrave had punished the goblin child for borrowing something from Motherhorn. The child won't go back, and will stay in a nearby cave instead."
        ]
      },
      {
        title: "The Dead Ringers",
        lines: [
          "Eight goblins solemnly ring bells, wearing headdresses made of animal skulls. They're the Dead Ringers, and they can speak with the dead.",
          "The party says “Cool” and moves on."
        ]
      },
      {
        title: "Untethered Shadows",
        lines: [
          "A group of untethered shadows ambush the party on the trail. The fight drains much of Thaldrom's strength."
        ]
      },
      {
        title: "The Pageant Wagon",
        lines: [
          "So close to Lockbury Henge they can almost see its great monoliths, a pageant wagon approaches, led by a figure draped in robes.",
          "The wagon opens on marionettes that look exactly like the party, and they perform everything from the party's arrival at the Witchlight Carnival to this very moment.",
          "Rielle's marionette shifts from halfling to harengon, then finally to dwarf. Odd, since Rielle has ALWAYS been a dwarf. Truly, reality is shifting around the play.",
          "A banner unfurls: “To be continued!” The curtains close.",
          "The hooded figure hands each of them a ticket with a tiny puppet of that character painted on it: “Good for one private audience with Endelyn Moongrave—no strings attached!” Then the wagon disappears as if it never existed.",
          "Within sight of the Henge, the party decides: forget it, let's go to Motherhorn and meet Endelyn Moongrave instead."
        ]
      }
    ],
    quotes: [
      { by: "Carzeiros", text: "TLDR: Carzeiros is a grumpy(er) middle aged Drow now" }
    ]
  },
  {
    key: "26",
    act: "yon",
    title: "Feats of the Korreds",
    summary: "Inside Lockbury Henge: an unfinished game of dragon chess, eight korreds, a star sapphire, and contests of boulders, headbutts, braids and lies. Then Brigganock Mine puts the party to sleep. Level 6!",
    milestone: "Level 6",
    scenes: [
      {
        title: "The Unfinished Game",
        lines: [
          "The session begins inside Lockbury Henge: an unfinished game of Dragon Chess, a recently doused campfire, and footprints leading away.",
          "Rielle calls out, and Carzeiros overhears voices debating whether the adventurers are visitors or thieves. Ballax calls out, at random, “We are NOT thieves.”",
          "The voices go back to arguing over the game. Flickerwick works out that one of the players was a single move from winning."
        ]
      },
      {
        title: "The Korreds",
        lines: [
          "As the party ends the game, eight korreds emerge from the monoliths: Budoc of Flint, Azil of Granite, Myzelda of Slate, Yanna of Basalt, Noll of Obsidian, Malo of Marble, Jagu of Chalk and Queen Argantle of Shale.",
          "The korreds keep the Rule of Hospitality. The party offers a gift: a cyclops eye.",
          "Queen Argantle is moved, and gives them a translucent blue star sapphire worth 1,000 gp. For the next 24 hours it grants +1 to ability checks and saving throws."
        ]
      },
      {
        title: "The Feats",
        lines: [
          "Out come barrels of ale, and a series of challenges for the adventurers.",
          "Gorse beats Azil of Granite at boulder throwing, then takes on Yanna of Basalt in a “kissing” (headbutting) contest and gives her a concussion.",
          "Noll of Obsidian challenges Carzeiros to a hair braiding competition, and Carzeiros just... nails it.",
          "Malo of Marble challenges Ballax to a laughing and lying contest. Ballax laughs heartily and tells the most entertaining lie anyone has heard in years."
        ]
      },
      {
        title: "Lore over Ale",
        lines: [
          "The brigganocks under the mountains of Yon are at odds with the korreds of the slopes and peaks. The brigganocks are in league with Endelyn Moongrave, and can be found at Brigganock Mine.",
          "Endelyn “Bitter End” Moongrave cut off Queen Argantle's hair. The korreds no longer hold large gatherings at Lockbury Henge.",
          "The korreds are about to dance at their first gathering in ages when lightning strikes, and they retreat into their monoliths.",
          "The party takes a long rest and reaches level 6."
        ]
      },
      {
        title: "Brigganock Mine",
        lines: [
          "In the morning they head to Brigganock Mine, where the sound of mining swings between loud and whisper-quiet.",
          "Down a winding, almost hypnotic shaft, the party does everything it can to stay awake, but everyone except Gleam and Carzeiros falls asleep.",
          "Carzeiros WISHES he could wake them, but his wishes don't have that much power...",
          "Brigganocks appear with wheelbarrows and start loading the sleepers into them. Carzeiros immediately casts entangle. Roll initiative..."
        ]
      }
    ]
  },
  { key: "27", act: "yon", gap: true },
  {
    key: "28",
    act: "yon",
    title: "The Fey Beacons",
    summary: "Tea with Obud the Elder, a plan to make neighbors of korreds and brigganocks, perytons turned comedians, a prince sent home, and a pillar that falls on purpose.",
    scenes: [
      {
        title: "Obud the Elder",
        lines: [
          "Across the bridge, an elderly brigganock sits on a pony: Obud the Elder. He insists on tea and a snack before discussing anything.",
          "He asks each of them what last made them smile.",
          "He proposes the party help unite the korreds and the brigganocks against Endelyn. The two peoples are stuck in a vicious cycle of grievances, and he wants help reminding them that they're neighbors.",
          "In return, they'll help the party into Endelyn's palace.",
          "The Fey Beacons, a place special to both peoples, are now overrun with large crows."
        ]
      },
      {
        title: "The Fey Beacons",
        lines: [
          "At the Fey Beacons, eight columns surround a lake with a rowboat moored, and a winged creature perches atop each one.",
          "An elf is trying to light torches on the pillars, but the crow things snuff them out behind him. They're perytons: part eagle, part stag, known for tearing out hearts.",
          "The elf, Prince Alagarthas, must light all eight beacons to see a path home, and hasn't managed it.",
          "Gorse uses speak with animals: the perytons are trying to maximize their torture of Alagarthas, and are delighted that someone finally understands them.",
          "Gorse convinces them to perform a comedy instead, which distracts them enough for Alagarthas to light the beacons. Flickerwick casts fire bolt to light the final one, and Gorse fire dances for the crowd.",
          "Alagarthas leaps into the light at the center of the lake and disappears, most likely home.",
          "The perytons appreciate performing something other than tragedies, and want to go on tour."
        ]
      },
      {
        title: "The Ceremony",
        lines: [
          "After a long rest, the korreds and the brigganocks arrive, and a ceremonial display between the two begins.",
          "Carzeiros lays down his weapon to encourage the others to do the same, so things stay peaceful.",
          "Gorse blocks a falling pillar and takes 17 damage. Carzeiros and Ballax spot who did it: someone wearing a sash."
        ]
      }
    ]
  },
  {
    key: "29",
    act: "yon",
    title: "The Spy in the Sash",
    summary: "Diplomacy stalls; interrogation works. With korreds and brigganocks at their side, the party marches on the hag.",
    scenes: [
      {
        title: "Making Neighbors",
        lines: [
          "After many persuasion checks trying to get the korreds and the brigganocks to work together, it was Carzeiros and Ballax brutally torturing the hag's spy that got the party what it needed.",
          "Now the party goes to fight the hag, with the korreds and the brigganocks as help."
        ]
      }
    ]
  },
  {
    key: "latest",
    act: "yon",
    label: "After Session 29",
    badge: "29+",
    title: "Spoils and Secrets",
    aside: "Loot and lore posted since session 29, before the next recap.",
    summary: "Zybilna's true parentage, the League of Malevolence by name, and a haul of treasure.",
    scenes: [
      {
        title: "Secrets",
        lines: [
          "Zybilna is the adopted daughter of Baba Yaga. The hags of the Hourglass Coven are Baba Yaga's true daughters.",
          "The hags used Iggwilv's Cauldron, a powerful artifact crafted with help from Baba Yaga, to trap Zybilna in time. The cauldron can be destroyed by a flame tongue sword, just like the one wielded by Kelek's evil bodyguard, Warduke.",
          "The League of Malevolence: Kelek, the group's rapacious leader; Warduke, the heartless; Skylla, a warlock who forged a pact with Baba Yaga; Zarak, an unconscionable orc assassin; and Zargash, a cleric of Orcus."
        ]
      },
      {
        title: "Spoils",
        lines: [
          "A black sack holding four gold bedpost knobs (25 gp each), and eight bottles of exquisite elven wine (100 gp each).",
          "A Ring of Shooting Stars.",
          "Shon's spellbook: a leather-bound tome with a charcoal sketch of a wolf spider on the title page.",
          "A +1 rapier, a dozen beans that cast plant growth when thrown, a potion of growth, three potions of healing and a potion of hill giant strength."
        ]
      }
    ]
  }
];
