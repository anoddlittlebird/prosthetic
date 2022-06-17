// Prosthetic
// (C) Christopher M. Carruth 2022
// http://www.chriscarruth.com
// version for Chrome

/*
/i = ignore case, case insensitive
\b = Matches a word boundary. Boundaries are determined when a word character is NOT followed or NOT preceded with another word character.
| = matches either or
() = Capturing group: Matches x and remembers the match. For example, /(foo)/ matches and remembers "foo" in "foo bar".
*/


var regex2quote = [

	//american made machines

	[/\b(job|time?|productive?|capitalistic?|capitalism?|labor?|production?|task?|calm?|code?|generative?|algorithm?|internet?|pause?|contemplation?|meditate?|contemplate?|contemplative?|calm?|effort?|struggle?|machine?|machinery?|endeavor?|efficiency?|inbox?|work?|productivity?|\byour \w+ ears?|psychoan\w+)\b/i,
	"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b((written|spoken)[ -]word)\b|\bread(s|ing)? ((a|some) )?(poems?|poetry)\b/i,
	"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\bdream(ed|s|ing|t)?.{1,50}\baw[oa]ke\w+\b|\bSurely I\b/i,
	"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b(a stroll|I wandered) (in|into|through|by|past)\b|\ball of a sudden\b/i,
"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b(pikachus?|raichus?|caterpies?|pokemon)\b|\b(rivulet|(the|a) (creek|brook))\b|\b(coucher|collocate|the \w+ couple)\b|\boff the beaten (trail|track|path)\b/,
	"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b(blue|green|black|white|silver|gold|green|red|orange|teal|gr[ea]y|pink|purple|yellow)\b[ -]\b(blue|green|black|white|silver|gold|green|red|orange|teal|gr[ea]y|pink|purple|yellow)\b|\b(soft|cool|damp) (earth|soil|mud|dirt)\b|\bbreathing (exercises?|techniques?)\b|\bbiofeedback\b|\bdeep breathing\b|\b(cool|cold)-\w+\b/i,
	"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b(their arms|legs|wings|buffalo wild wings|bw3|wing stop|drivetrain)\b|\b\w+oo\b.{5,50}ieu\b/i,
"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\bsoft (hands|arms|touch)\b|\b(manipulated by|rearranged the \w+s|the dreamers|bertolucci)\b/i,
	"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b[3-6]:\d\d (a.?m.?|in the morning)\b|\bat dawn\b|\b()\beye-\w+\b|\beye \w+ (from|of|with|by)\b|\bthe (\w+ )?sublime\b/i,
		"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b(Icarus|Caravaggio|Jarman)\b|\bthe \w+ boy I know\b|\bthe winged \w+\b/i,
		"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b(\w+(y|Y|ie|IE)), \1\b|\b(his|her) (true|real) [B-DF-HJ-NP-TV-Z]\w+\b/,
"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\bla\w+st (\w+ )?and lo\w+st\b|\b(\w+st|most \w+) (vision|sight|scene|view|panorama|vista)\b|\b\w+ed \w+archy\b|\bit[ -]girl\b|\b(Jane Birken|Chlo[eë] Sevigny|Kendall Jenner|Grace Jones|Edie Sedgwick)\b/i,
	"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b(Phoebe|Venus|Hesperus|Phosphorus|evening (star|sky|meal)|gold[- ]crowned|crown of gold|sapphire[- ]\w+ed|glow[- ]?worm|biolum\w+)\b/i,
	"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b(do(n't| not|es not|esn't) have|has no|without) (m?any|an? )?(temples?|altars?|hymns?|fans?|follow(ers?|ing)|website?|Patreon|wikipedia page|fan[ -]?base|simps|stans)\b/i,
	"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b(virgins)\b|\bto (make|cook|brew) (an?|some )?(delicious|fabulous|tasty) \w+|\bvirgin \w+ v.?s.? (the )?chad \w+\b/i,
	"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b(incense|aromatherpy|diffuser|censer|lost (my|her|his|your) voice)\b|\b(\w+[kn] Orthodox|Divine Liturgy)\b/i,
	"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],

	[/\b(seculari\w+|rates? of (church|relig\w+))\b|\b(prophe\w+|Ezekiel|Isaiah|Jeremiah)\b|\b((data|predictive) analytics|(logistic|linear) regression|(language|time series) models|actuar\w+)\b/i,
	"to simply pause rather than to immediately fill up space can be a transformative experience  // american made machines",0],


	// arrhythmias | two-voice

	[/\b(resist|technology?|poetic?|poetics?|poetry?|poem?|surveillance?|amazon?|nostaligia?|giving up?|this is how you lose me?)\b/i,
		"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\btoo, too\b|\btoo late for (the|a\w+)\b|\bfor a promises?\b|\b(the|an?) (\w+ )?(believing|faithful|credulous) \w+|\bfor (\w+ )?(ancient|vintage|antique|old|aged) \w+s\b/i,
		"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\b(air)\b.{2,50}\b(water|fire)\b|\b(water)\b.{2,50}\b(air|fire)\b|\b(fire)\b.{2,50}\b(water|air)\b|\b(haunted|spooky) (forests?|woods?)\b/i,
		"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\byour (bright|glowing|shining) [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b|\bOlympians?\b|\bI('m| am) my own|\bmy own eyes\b/i,
		"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\bso let me be\b|\bbe your (ch|k)[aeoiu]\w+\b|\bmidnight hours?\b|\ba ((gr|m)oan|whimper)\b|\bnsfw\b/i,
		"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\b(your (\w+ )?\w+, ){1,}((and )?your (\w+ )?\w+)\b/i,
			"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\b(shrines?|gardens?|altars?|oracles?|priests?|prophets?|tombs?|dreams?(ing)?|holy?|sacred?|mystical|mysterious|flowers?|flora|vines?)\b[^.!?]+\b(shrines?|gardens?|alters?|oracles?|priests?|prophets?|tombs?|dreams?(ing)?|holy?|sacred?|mystical|mysterious|flowers?|flora|vines?)\b/i,
		"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\ba (temple|shrine|church) in some\b|\b(bethel|basilica|shrine|chapel|tabernacle|stupa|reliquary|buts?udan|maq[āa]m|chantry|ciborium|chantry)\b/i,
	"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\b(primeval|primary|virgin|wild|untouched|) (forest?|gardens?|woods?|nature)\b|\bnature preserves?\b|\b(concept|mind)[- ]map(\w+)?\b|\b(neurogenesis|synap\w+|dendrit\w+|decision trees?)|\bin the wind\b/i,
		"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\b(winged|gr[eo]ws?(ing)? (\w+ )?wings|(baby|fledgling) birds?)\b|\bs(\w+) by s\5\b|\bfar,? far\b|terrafor\w+/i,
		"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\b(light|west(ern?)) winds?\b|\bbirds and (the )?bees\b|\b(dryads?|fairy|fairies|nymphs?|oaks?|oaken|pixies?)\b|\b(melatonin|ambien)s?\b/i,
		"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\bin the midst of this\b|\ba w\+ (sanctuary|temple|church|shrine|mosque)\b|\b(neural[ -]?network|cognition|neurogenesis|synap\w+|dendrit\w+|decision trees?)\b|\bnoise( -)cancelling\b|\b(florists?|landscape arch\w+)\b/i,
		"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\bb[aeiou]+[b-df-hj-np-tv-z]+,? (and|not|or|with|of|for) ?b[aeiou]+[b-df-hj-np-tv-z]+\b|\bwithout (a name|names)\b|\bgreen thumbs?|horticult\w+\b|\bheirloom (vegetables?|fruits?|agricult\w+)\b|\bone of a kind\b|\bbroke the mou?ld\b|\bastron\w+\b|\bbook of Genesis\b|\bGenesis 2:[0-9]{2}\b/i,
		"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\b(all|most|some) (soft|sweet|kind|delicious|merciful|good|pure|beautiful|nice|holy) \w{6,}\b|\bthere (shall|will) be (for|in|by|of)\b|\blaw of attraction\b|\bpower of positiv(ity|e (thoughts|thinking))\b|\b(an?|the) (truce|endgame)\b/i,
			"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],

	[/\bbright [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b|\bopen(ed (the|a))? window\b|\b(maglite|petzl|black diamond)|\b(casper|purple|avocado) mattress\b|\bwarm [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+[ie]{0,}\b|\blet (love|truth|inspiration)\b/i,
		"L O V E L O V E L O V E L O V E L O V E L O V E // arrhythmias",1],


// paint the stars

[/\b(cloud|clouds?|opaque?|lack of transparency?|cumulus?|opacity?|no answer?|gloom?|darken?|menace?|shadow?|haze?|vapor?)\b/i,
	"i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

[/\bwith (an? )?\w+ed (necks?|heads?|face?|hands?|arms?|lips?|eyes?|mouths?|smiles?|shoulders?|teeth|tooth|noses?|fingers?|foot|feet|hair), and (an? )?\w+ (necks?|heads?|face?|hands?|arms?|lips?|eyes?|mouths?|smiles?|shoulders?|teeth|tooth|noses?|fingers?|foot|feet|hair)\b/i,
		"i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

	[/\b\w+ed in (white|black|silver|gold) \w+s\b|\b\w+ in (white|black|silver|gold) \w+s \w+ed\b|\bone (behind|in front of|with) the other \w+ed\b|\b(tevas|birkenstocks|chacos)\b/i,
	"i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

	[/\b(zoetrope|duotrope|wintergarden|Méliès|george melies|action movies?|british cinema|(mm|millimetres?) film|horse gait|gait of (the|a) ?horses)\b/i,
		"i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

	[/\b((a|the) sequel to|eternal (return|recurrence)|time is (infinite|a circle))\b/i,
	"i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

	[/\bas may (sometimes? )?(happen|be the case) with \w+,|((ceramic|cereal|ramen|set of \d+|tea|coffee|japanese|pyrex|porcelain|clay) (bowls?|cups?|mugs?))/,
	"i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

	[/\bHow is it that I (\w+ )?knew|\w+ed in such a \w+ \w+[?.!]|(n95|surgical|sheet|3d[- ]printed) masks?\b/i,
		"i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

	[/\b(grew|grows?) (less|\w+er) and (less|\w+er)|(necks?|heads?|face?|hands?|arms?|lips?|eyes?|fingers?|foot|feet|body|bodies|skin|legs?|gums) (was|were|is|are|felt|got) numb\b|\bslow\w+ pulse\b/i,
		"i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

	[/[.?!] +\bPain?\b[A-Za-z, '’]+\bpleasure?\b[A-Za-z, '’]+[.?!]|[.?!] +Pleasures?\b[A-Za-z, '’]+\bpains?\b[A-Za-z, '’]+[.?!]/i,
    "i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

	[/\b(exorcis[mt])\b|\bthink about nothing\b|\bstare at (her|my|their|his) phone\b/i,
	  "i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

	[/\b(unmeek|bossy|overbearing|pushy|loud|obstreperous|unruly|difficult|noisy|demanding) (wom[ea]n|girls|wi[fv]es?|girlfriends?)\b|\b(my|her|his|your) demons?\b|\b(artistic|poetic) inspiration\b|\bthe poetry of \b/i,
		"i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

	[/(your|my|our) (lazy|idle|tired|exhausted) [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b|\b(achievement subject|neoliberal ideology|self-optimization|byung-chul han)\b/i,
		"i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

	[/\b(like clockwork|rule of threes?|scotophob\w+)|and, [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+ing\b,/i,
		"i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

	[/\b((so|gettin?) faded)\b|\bfaded (af|every (day|night)|all the time)\b|\b(wingstop|bw3|(barbecue|bbq|hot|chicken) wings)\b/i,
		"i go out at night without a single answer, yet, in the darkness, painting the stars, feels like one // paint the stars",2],

// dépaysant /stills

[/\b(resistance|desire?|desire lines?|errantry?|errant?)\b/i,
	"...for hope is always born at the same time as love... // dépaysant",3],

[/\b(her name was|she was (called|named)) (Am|Lo)\w+\b|\bher \w+ was pale\b|\bthe three[:;.]/i,
	"...for hope is always born at the same time as love... // dépaysant",3],

[/\blove is\b|\bwant(s|ed|ing)? (wings|to hide|to fly( away)?|super[- ]?powers)|\bfade[ -](in|out)\b|\bOh? f\w+!|\bW(hat|here|ho|hen) (\b[A-Z]?[a-z]+\b ?){2,7}\? +(\b[A-Z]?[a-z]+\b ?){2,7}\?/i,
		"...for hope is always born at the same time as love... // dépaysant",3],

[/\b((stay|keep|get) motivated|need motivation|time management|bullet journal|pomodoro technique|to-?do app|trello)\b|\b\w+[’']s (?!from)\w{3,} \w+[’']s/i,
		"...for hope is always born at the same time as love... // dépaysant",3],

[/\bat least for me\b|\bnothing (sweeter|better|(as )?sweet|(as )?good) (as|than)\b|\bhoneyed\b|\brather be (sleeping|in bed)\b/i,
		"...for hope is always born at the same time as love... // dépaysant",3],

[/\b((your|my) ((late|early|mid)[- ])?((twen|thir|for|six|seven|eigh|nine)ties|(2|3|4|5|6|7|8|9)0s))\b|\bretirement[- ]age\b|\buniversal[- ]basic income\b/i,
		"...for hope is always born at the same time as love... // dépaysant",3],

[/\b([b-df-hj-np-tv-z]+)(\w+d|[aeiou]{1,}[b-df-hj-np-tv-z]{1,}) \1[b-df-hj-np-tv-z]{0,}(ea[nm]s?|oo[nm]s?|ai[nm]s?)\b|\bembroidered with\b/i,
		"...for hope is always born at the same time as love... // dépaysant",3],

[/\b(starlings|goldfinch(es)?|magpies?|sparrows?|wrens?|crows?|orioles?|warblers?)'s?|\b(vine|ivy|tendril)[,.]|\bpent[- ]up\b/i,
		"...for hope is always born at the same time as love... // dépaysant",3],

[/\bno \w+ of mine\b|\bsee me cry\b|\b(your|my) (skirts?|dress(es)?|blouses?|tears)\b|\bclosing[- ]time\b/i,
		"...for hope is always born at the same time as love... // dépaysant",3],

[/\b(Adi[oó]s|Hasta luego|Seeya|Bye ?bye|Peace)[!.,]|\b(I'm|am|I was) (just )?(chilling?|(chill|rel)axing|spac(ing|ed) out)\b/i,
		"...for hope is always born at the same time as love... // dépaysant",3],

[/\ba pet[- ]\w+\b|\ba sentimental \w+\b|\b(farce|bullshit|scandal|charade|shit[ -]show|travesty)[.!]/i,
		"...for hope is always born at the same time as love... // dépaysant",3],

[/\bsoftly (from|through|with|over|beyond|at|over|into)\b|\bon the [b-df-hj-np-tv-z]+eamy\b/i,
		"...for hope is always born at the same time as love... // dépaysant",3],

[/\b\w+s (for|of|with) the (night|evening|dark)[.,?!]|\bnights?\b[^?.!]{3,30}\bdays?\b/i,
		"...for hope is always born at the same time as love... // dépaysant",3],

[/\byou (fuckers|assholes|shitheads|dipshits|losers|ghosts)!|\bfuck off!|\b(idle|lazy) [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+[aeiou]?s?\b/i,
		"...for hope is always born at the same time as love... // dépaysant",3],


// dépaysant | motion

[/\b(wander|idleness?|idle?|idyll?|refuse?|refusal?|resist?)\b/i,
	"an american idyll // dépaysant",4],

[/\btight-\w+ed\b|\bits poisonous \w.+[.?!:;]|\bNo,? no,/,
	"an american idyll // dépaysant",4],

[/\bDon't let[^.?!,]{1,25}\b(kiss|touch)(ed)?\b|\b(nightshades?|eggplants?|[Xx]ans?|[Xx]anax(es)?|[Bb]enzos?)\b|\bOcean Spray\b/,
	"an american idyll // dépaysant",4],

[/\b(your rosary|a partner in your|psyche)\b|\w+'s mysteries\b/i,
	"an american idyll // dépaysant",4],

[/([st]h\w+) to \1|the \w+ \w+ of the (soul|mind|heart|imagination)/i,
	"an american idyll // dépaysant",4],

[/\like a \b(weeping|crying|sad) \w+[,.?!,2],|\ball the (\w+ )?(flowers|bushes|bouquets|petals|blooms)[,.?!]/i,
	"an american idyll // dépaysant",4],

[/\brainbow of the\b|\b(globed|peonies|glut|shroud)\b|\bof global\b|\b(red|blue|green|black|white|grey) (hill|peak|field|stream|pond|brook|cloud|star|creek|mist)|\bApril sh\w+/,
	"an american idyll // dépaysant",4],

[/\b([b-df-hj-np-tv-z])([aeiou]{1,2})([b-df-hj-np-tv-z]), \1\2\3|\b(\w+), \4 (upon|through|in|by|against|with|over|among|of|up|under|within|without|towards?)\b/i,
	"an american idyll // dépaysant",4],

[/(\w{5,})( - |—|--|---|–|[.?!.] )\1|\b([.?!] +She lives with|must die)\b/,
	"an american idyll // dépaysant",4],

[/(turn\w+ to|bec[oa]me|grew) (poison|ash|ruin|shit|mold|spoil)\w{0,}|\b\w+-mouth\b|\b(alchemy|metamorph[a-z]+|betrayals?|curdled?)\b/i,
	"an american idyll // dépaysant",4],

[/\b([Cc]hurch|[Tt]emple) of [A-Z]\w+\b|\b[Ss]overeign\w+\b|\b[Vv]eil\w+\b/,
	"an american idyll // dépaysant",4],

[/\b(gnostic\w+|sommeliers?|(refined|excellent|superb) tastes?|secret (society|club))|a sophisticate\b|\bsensitive (people|person|guy)\b/i,
  "an american idyll // dépaysant",4],

[/\bthe \w+ness of (my|her|his|our|your|his|their)? [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b|(my|her|his|our|your|his|their) \b\w[b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+(y|ies?) \w[b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+(y|ies?)\b|\b(troph(ies|y)\b|\bof her (might|power|strength|capability|influence|prestige|control|design))\b/i,
	"an american idyll // dépaysant",4],


// mouseX, mouseY

[/\b(line|lines?|trace?|remnant?|beginnings?|initial?|start?|idyll?|beginning?|indeterminate?|mouse?|gesture?|mouseX?|mouseY?)\b/i,
	"we're like amnesiacs in a ward on fire, we must find words or burn // mouseX, mouseY",5],

[/\bheart ?aches?|\bso (?:drunk|stoned|faded)\b|\bnumb(?:ness)?.{1,20}pains?|\bpains?.{1,20}numb(?:ness)?/i,
  "we're like amnesiacs in a ward on fire, we must find words or burn // mouseX, mouseY",5],

[/\bopiates?\b|\boblivion\b|\babyss\b|\bforgetfulnes\b|\b[A-Z]\w+-wards\b/,
  "we're like amnesiacs in a ward on fire, we must find words or burn // mouseX, mouseY",5],

[/\benvy (of|for)\b|\btoo (happy|perfect|good)\b/i,
  "we're like amnesiacs in a ward on fire, we must find words or burn // mouseX, mouseY",5],

[/\b(dryads?|fairy|fairies|nymphs?|oaks?|oaken|pixies?)\b|\b(melodious|lyrical|melodic|favorite song|euphon\w+)\b|\b(beech|deciduous|beechen|maple|yew|willow|alder)\b/i,
  "we're like amnesiacs in a ward on fire, we must find words or burn // mouseX, mouseY",5],

[/\bshadows\b|\bfull-throated\b|\b(song|singing) of (the )?(summer)\b|\binfinity\b/i,
  "we're like amnesiacs in a ward on fire, we must find words or burn // mouseX, mouseY",5],

[/\b(glass|pint) of \w+\b|\ba chilled \w+\b|\b(wine|merlot|pinot (noir|gris)|cabernet|sauvignon blanc|syrah|zinfandel)\b|\bin (the|a) (grotto|cave|cavern|earth)\b|\bneed (a|to) drink\b/i,
  "we're like amnesiacs in a ward on fire, we must find words or burn // mouseX, mouseY",5],

[/\b(grassy|vegetal|verdant|sunburned|sunburnt|mirth|glee|hilarity)\b|\bproven[cç]\w+\b|\b(Napa Valley|Sonoma)\b|\bthe \w+ green\b/i,
  "we're like amnesiacs in a ward on fire, we must find words or burn // mouseX, mouseY",5],

[/\ba \w+ full of (a|the )?(warm|hot|simmering)\b|\bthe (?:\w+ )?South\b|\b([Cc]hampagne|[Pp]rosecco|[Aa]perol|[Cc]ola|[Pp]epsi|[Rr]osé|[Bb]eaker|[Nn]algene|[Kk]lean [Kk]anteen|[Hh]ydro [Fl]lask|[Ff]lask|[Tt]he [Mm]uses|[Bb]ubbles)/,
  "we're like amnesiacs in a ward on fire, we must find words or burn // mouseX, mouseY",5],

[/\bfade away\b|\b(deep|dark|dim|misty) (forest|woods|mist|trees)\b|\bselva oscura\b|\bleave the world\b|\bunseen\b/i,
  "we're like amnesiacs in a ward on fire, we must find words or burn // mouseX, mouseY",5],

[/\bnever (known|knew)\b|\b(fret|weariness|weary|exhausted|fever|worry|anxiety|OCD|GAD|obsess\w+)\b/i,
  "we're like amnesiacs in a ward on fire, we must find words or burn // mouseX, mouseY",5],

[/\bold m(men|women|people)\b|\b(spectre|specter|ghostly)\b|\b(palsy|geriatric|elderly|Alzheimer's|nursing home|wast(ing|ed) away|gr[ae]y hairs?|gr[ae]ying)\b/i,
  "we're like amnesiacs in a ward on fire, we must find words or burn // mouseX, mouseY",5],

// {glossolalia}

[/\b(interrupt|interruption?|subvert?|subversion?|agitate?|agitation?|blink?|bright?|colors?|color?|structure?|strobe?|flash?)\b/i,
	"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\b(lustrous|luster|glossy|shiny|desir(ed?|ing) (you|them)|leaden|despair(s|ed|ing)?)\b|\b(those|her|his|my|our|the) \w+ eyes\b/i,
	"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/^[A-Z]\w+! \w+!|\b(Bacchus|[Bb]acchanalian?|Dionysus|his (entourage|groupies|enablers))\b|\b[Ff]or I will \w+ to you\b|\bof (Verse|Rhyme|Poetry)\b/,
"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\bmy (dull|stupid|idiotic|worthless|tired|broken|exhausted) (brain|mind|ideas)\b|\bmy (brain|mind|ideas) (is|are) (so )?(dull|stupid|idiotic|worthless|tired|broken|exhausted)\b/i,
	"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\ban? (Aries|Taurus|Gemini|Leo|Virgo|Libra|Scorpio|Sagittarius|Capricorn|Aquarius|Pisces)\b|\b(I'm|she's|he's) (such )?a Cancer\b/i,
"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\bgreen and black\b|\bdark green\b|\bmossy?\b|\blichens?\b|\bfung(us|al)\b|\bmoldy?\b/i,
"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\b(incense|aromatherapy|mumm(y|ification)|mangos?|apples|lemons?|oranges?|plums?|grapes?|papayas?|grapefruits?)\b|the \w+, the \w+, and the \w+-\w+ \w+/i,
	"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\b\w+thorn\b|\bprickly\b|\bviolets\b|\bcovered (up )in leaves\b|\bmid-(April|May|June)\b|\bsummer (evenings|nights)|\w+'s eldest (child|son|daughter)/i,
"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/^\b[A-Z]\w+ I \w+[;:!.]|\bhalf in love\b|(with|for|of|by) ([a-z]\w+)? Death|\bgood way to die\b/,
"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\b(thinking|dreaming|singing|writing|wrote|sang|dreamed|dreampt|longed) (about|of|for) death\b/i,
	"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\b(Now more than ever it seems)\b|\bwant(s|ed|ing)? the pain to (just )?(stop|end)\b|\bin (such )?ecstasy!|\b(too|so|really) (fucking )?emo\b/i,
	"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\b(my grave|my burial|my death|my demise|my corpse|turn to (grass|dirt)|requiem|Mozart's|Verdi's|about death)\b|\bbecome a [b-df-hj-np-tv-z]o[b-df-hj-np-tv-z]\b|\bstill you would \w+,/i,
"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\b(born (to die|for death|undying))\b|, [a-z]\w{5,} [A-Z]\w+!|\b immortal B\w+/,
"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\b(ancient|vintage|antique|old|aged|previous|medieval|primeval|bygone|former) (times?|years?|mornings?|evenings?|hours?|customs?|cultures?|patterns?|civilizations?|ways?)/i,
	"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\bs\w+(-| )s\w+ song\b|\bm\w+ melod(y|ies)|\bthe [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b of [B-DF-HJ-NP-TV-Z]{1,}[aeiou]+[b-df-hj-np-tv-z]+\b|\bwhen, \w+ (for|of|in|by) \w+,|\bthe alien [b-df-hj-np-tv-z]{0,}[aeiou]+[b-df-hj-np-tv-z]+\b/,
  "Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\bha[ds] charmed\b|\bf(?!rom)\w{4,} l\w+ f(?!rom)\w{4,}\b|\b(casements?|lattice[sd]?|awning|hinged)\b|\bforlorn\./i,
  "Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/[.!?] +F\w+!|\b[Bb]ell\b.{1,20}[Tt]oll(s|ed)?|\b[Tt]he very \w+/,
  "Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\b(Goodbye!|Later!|See ?ya!|Adios!|[Ss]he is (famous|well-known) for|([Tt]he i|I)(magination|nspiration) can('t|not)?)/,
  "Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\b(up|over|beyond|through|past|around) the (\w+ )?(streams?|hills?(-sides?)?|meadows?|dales?|mountains?|rivers?|forests?|woods?|stars|cliffs?|valleys?|fields?|streams?|beach(es)?|ponds?|hills?|brook?|trees?|gardens?|coasts?)[.,;:?!]/i,
"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

[/\b((just|only) an? (echo|dream|memory))\b|\bnightingale\b|\bbird('s)? ?song\b|(\b(empty|alone|sad|depressed|confused|miserable|bereft) again\b)|\balready (so |really )?far away\b|\bcouldn't hear (it|the song|the music) anymore\b|\bearshot\b|\balready gone\b|\bone hand clapping\b|\bwoke\b|\babout my dream\b/i,
"Subversion: the undermining of the power and authority of an established system or institution.  Are we learning a new vocabulary or forgetting an old one? // {glossolalia}",6],

// mine mine mine

[/\b(body|bodies?|watch?|watched?|watching?|surveillance?|mine?|mined?|exploited?|exploit?|commodity?|commodify?|claim?|rite?|ritual?)\b/i,
	"i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

[/(\b\w+ed (bride|wife|husband)\b|\b-child\b|\bof quiet\b|\bof silence\b)|\bof \w+ness\b|\bs\w+ and s\w+\b t[aeiou]\w+\b|\bstill un\w+ed\b/i,
  "i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

[/\b(of the forest|my rhyme|historian of)\b|, who \b(can't|can)\b|\ba \w+y \b(story|tale|history|drama|narrative)\b|\b(?:my|our)\b \b(rhyme|echo|melody)\b/i,
    "i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

[/\b(legend|legendary|haunts|of (deities|gods)|(gods|deities) (and|or) (humans|mortals))\b/i,
  "i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

[/\b([Ii]n (Tempe|Delphi|Naxos|Byzantium)|(dales|valleys|hollows|dells|vales) of [A-Z]\w+)\b/,
  "i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

[/\b(What men|What women|loth)\b|(\bWhat [a-z ]+\? {0,}){3,}|(\bWhat (mad|wild|crazy|insane) \w+[!?])/,
    "i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

[/\b[A-Z]\w+d (songs|melodies) are\b|\bthose \w+ are \w+er\b|\b\w+s are sweet\b/i,
    "i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

[/\byour? soft \w+\b|\bplay on\b|\bof no t\w+/i,
  "i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

[/\bt\w+ (be|are|were|) (bare|empty|naked)|\b[A-Z]\w+ youth|, beneath the \w+/,
    "i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

[/\ba \w+ lover\b|\bnever,? never\b|\byou can kiss\b|\bnear the goal\b/i,
  "i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

[/\b(your bliss|(cannot|can't|won't) fade)\b/i,
  "i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

[/\bhappy,? happy\b|\bbid (?:\w+ )+adieu/i,
  "i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

[/\ba \w+ (?:musician|drummer|composer|singer)\b|\bfor ?ever n\w+\b|\b(?:happy|perfect|joyful|beautiful|perfect|sweet) (?:love|dream|joy|life|friendship)\b/i,
    "i write i love you everywhere i can & like a ritual of validation of complicity it carries me over the threshold // mine",7],

// expect nothing short of everything

[/\b(unknown|let go?|expanse?|predetermined?|fluid?|ice?|snow?|charcoal?|smoke?|control?|flow?|fire?)\b/i,
	"It is the job of artists to open doors and invite in prophesies, the unknown, the unfamiliar; it’s where their work comes from, although its arrival signals the beginning of  the long disciplined process of making it their own. ~ Rebecca Solnit // expect nothing short of everything",8],

[/\bfor ?ever young\b|\bpanting\b|\bto be (?:enjoyed|appreciated|spent)\b/i,
	"It is the job of artists to open doors and invite in prophesies, the unknown, the unfamiliar; it’s where their work comes from, although its arrival signals the beginning of  the long disciplined process of making it their own. ~ Rebecca Solnit // expect nothing short of everything",8],

[/\bburning (?:forehead|face|mind|skin|rash|hands?|arms?|tongue)\b|\bso (?:thirsty|parched)\b|\ba h\w+ h\w+-s\w+\b|\bcloyed\b|\bleaves (?:a|my|your|the) heart\b|\ba \w+ing \w+,? and a \w+ing \w+\b/i,
	"It is the job of artists to open doors and invite in prophesies, the unknown, the unfamiliar; it’s where their work comes from, although its arrival signals the beginning of  the long disciplined process of making it their own. ~ Rebecca Solnit // expect nothing short of everything",8],

[/\b\w+ious priest\b|\bsilken\b|\bgarland\b|\bmoo(?:ing|s|ed)\b|\bcow moo\w+\b|\bwhat (green|blue|red|yellow|orange|black|white)\b/i,
	"It is the job of artists to open doors and invite in prophesies, the unknown, the unfamiliar; it’s where their work comes from, although its arrival signals the beginning of  the long disciplined process of making it their own. ~ Rebecca Solnit // expect nothing short of everything",8],

[/\w+-built\b|\b(charming|quaint|little|picturesque|small|cute) (town|village|community|suburb|city)\b|\bwith peaceful\b|\bpious\b|\bsea[ -]?shore\b|\bcitadel\b|\bis emptied of\b/i,
"It is the job of artists to open doors and invite in prophesies, the unknown, the unfamiliar; it’s where their work comes from, although its arrival signals the beginning of  the long disciplined process of making it their own. ~ Rebecca Solnit // expect nothing short of everything",8],

[/\bbe silent\b|\bnot a soul\b|\bcan't ever return\b|\bdesolate\b/i,
"It is the job of artists to open doors and invite in prophesies, the unknown, the unfamiliar; it’s where their work comes from, although its arrival signals the beginning of  the long disciplined process of making it their own. ~ Rebecca Solnit // expect nothing short of everything",8],

[/\bOh? [A-Z]\w+ \w+!|\b(embroidery|braid|ponytail|pigtails?|plait)\b|\bwith forest \w+s\b|\b\w+(en|ed)\b weed\b/i,
"It is the job of artists to open doors and invite in prophesies, the unknown, the unfamiliar; it’s where their work comes from, although its arrival signals the beginning of  the long disciplined process of making it their own. ~ Rebecca Solnit // expect nothing short of everything",8],

[/\beternity\b|\bout of (my|your|their) minds?\b|\bC\w+ [A-Z]\w+!/,
"It is the job of artists to open doors and invite in prophesies, the unknown, the unfamiliar; it’s where their work comes from, although its arrival signals the beginning of  the long disciplined process of making it their own. ~ Rebecca Solnit // expect nothing short of everything",8],

[/\bold age\b|\bthis generation\b|\bwoe\b|\bwasted? (my|your|our|their) (life|lives)\b/i,
	"It is the job of artists to open doors and invite in prophesies, the unknown, the unfamiliar; it’s where their work comes from, although its arrival signals the beginning of  the long disciplined process of making it their own. ~ Rebecca Solnit // expect nothing short of everything",8],

[/\b[Aa] friend to\b|\b[Aa]ll I know is\b|\b[Aa]ll you need to know\b|\b(Beauty|Love|Truth|Power|Wisdom) is\b/,
"It is the job of artists to open doors and invite in prophesies, the unknown, the unfamiliar; it’s where their work comes from, although its arrival signals the beginning of  the long disciplined process of making it their own. ~ Rebecca Solnit // expect nothing short of everything",8],

	// Homogenitus

  [/\b(homogenitus|resolution?|peace?|future?|answer?|final?|man-made?|anthropocene?|anthropogenic?|finally?|at last?|we did this?)\b/i,
	"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(pumpkins?|figs?|pears?|persimmons?|beets?|cranberr(y|ies)|bosom[- ]budd(y|ies))\b/i,
		"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(conspiracy theor(y|ies)|agri-?business|GMOs?|Syngenta|Nutrien|Monsanto|DowDuPont|Isidore|(St.?|Saint) Dorothy|thatched)\b|\bautumn\w+/i,
		"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(Thomas Kincade|tutti frutti|juice box(es)?|Mott's|Simply Orange|Capri Sun|Tropicana|Minute Maid|fill all|to the core)\b/i,
	"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(nutella|ferrero rocher|bacci|tumescen(ce|t)|fertility|sweet corn|fatten the|KIND bars?|hazelnut?|pistachios?|Mr\.? Peanut)\b/i,
		"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(apiary|honey|bees?|honecombs?|endless summers?|lobster rolls?|fried clams?|hives?|🍯|🐝|over the (lip|edge|brim)s?)\b/i,
		"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(preppers?|survivalism|hoarding|pandemic pantry|sardines|lentils|stockpil(e|ing)|toilet paper)\b/i,
		"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(barley|oats|rye|maize|millet|amaranth|quinoa|buckwheat|farro|spelt)\b|\b(hard|soft|warm|cold|near|far)-\w+ed\b|\bw\w+ winds?\b/i,
		"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(furrow|sound asleep|drowsy|sudafed|heroin|methadone|narcotic|opi(um|ate)|spared by|swath|thresher|eau de (parfum|toilette|cologne)|perfume|burnout)\b/i,
		"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(chaff|deep attention|heavy is the head|heavy head|across a brook)\b/i,
		"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(ciders?|applejack|calvados|deep attention|ooz(e[ds]?|ings?)|dregs|residues?)\b|a \w+-press\b|\b(hour|day|month)s? by (hour|day|month)s?\b/i,
	"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\bWhere\b[^?.!]{5,50}\?[^?.!]{0,6}\b[Ww]here\b[^?.!]{5,50}\?|\b[Tt]hink not of\b|\b[Yy]ou have your\b/,
	"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(the evening|(five|5) o'?clock shadow|at (sunset|dusk)|stubble|with (rosy|reddish|pink(ish)?))\b/i,
	"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(gnats?|midges?|flies?|willows?|reeds?|cat[ -](tails|kins)?|borne aloft|on the (wind|breeze))\b/i,
	"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(fully?[ -]grown|bleat(s|ing|ed)?|from (the )?hilly? \w+)\b/i,
	"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(crickets?|cicadas?|locusts?|grasshoppers?|Syngenta|Nutrien|Monsanto|DowDuPont|agri-?business|(family|community|neighborhood)[ -](farm|garden)s?|robin|finch|treble)\b/i,
	"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

	[/\b(a|the|some|\w+ing) swallows?|tweet(s|ed|ing)? (at|in|with|on|to)\b/i,
		"did we ever really learn how to pray or have we just forgotten that {clouds enter and unravel, they are everything, then nothing, then you, again, then clouds - Juan Felipe Herrera} // homogenitus",9],

]

var num2artUrl = {
	// amm works
	0:"https://vimeo.com/634614701",
	// arrhythmias works
	1:"https://docs.google.com/presentation/d/e/2PACX-1vT3HniPWRPKtNtuiHDt-oOWXulOwX5PJtGHxfzgSYzoSb6QdTKSrL-DCwkU3exu_Ygp8f1MNSSeYPdU/pub?start=false&loop=false&delayms=60000&slide=id.p",
	2:"https://docs.google.com/presentation/d/e/2PACX-1vS6IXSdl6VwqpS3s-2aSwwoTL5-k2155wGRhLkjZ7mxN64PVoBlIovMqEo5u9XBj7DiiznddZ4xNzkL/pub?start=false&loop=false&delayms=3000&slide=id.g10eceba6a66_0_5,",
  // dépaysant stills, works
	3:"https://chriscarruth.com/wp-content/uploads/2022/03/Screen-Shot-2022-05-08-at-4.02.02-PM.png",
	// dépaysant motion, works
	4:"https://www.youtube.com/watch?v=HSTy0askZnw&t=1s",
  // line works
	5:"https://editor.p5js.org/Mister_Carruth/full/mPgeHEyH1",
	//glossolalia, works
  6:"https://chriscarruth.com/glossolalia/",
	//mine works
  7:"https://mine-mine-mine-mine.tumblr.com/",
	//expect nothing short of everything works
	8:"https://www.youtube.com/watch?v=O4breFwztGA",
	//homogenitus, works
  9:"https://www.youtube.com/watch?v=wVUjJVTMQyI",
};
