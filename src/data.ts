export interface Artwork {
  id: number;
  title: string;
  slug: string;
  frequency: string;
  size: string;
  image: string;
  subImage: string;
  paintType: PaintType;
  description: string[];
  subTitle: string;
  subDescription: string[];
  nextPaintingText: string;
  audioPath: string;
}

enum PaintType {
  Acrylique = 'Acrylique',
  AcryliqueModelingPaste = 'Acrylique & Modeling paste',
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: 'Heart Activation',
    slug: 'heart-activation',
    frequency: '(963 Hz)',
    size: '200 x 125',
    paintType: PaintType.AcryliqueModelingPaste,
    description: [
      'Heart Activation, réalisée par Jean Marc Larhantec, est une œuvre née d’une profonde méditation accompagnée de la fréquence musicale de 963 Hz, connue pour éveiller l’intuition. Ce tableau, imprégné de vibrations spirituelles, est une invitation à reconnecter avec la profondeur de soi et à puiser dans la somme de nos expériences passées. Travaillant avec cette fréquence, l’artiste nous conduit à une exploration intime, révélant notre véritable nature et élargissant notre expression personnelle. Heart Activation transcende le simple visuel, évoquant un espace où l’esprit s’ouvre à une compréhension plus complète de soi et du monde environnant.',
    ],
    subTitle: 'Exploration de Fréquences',
    subDescription: [
      'Jean Marc Larhantec transforme chaque tableau en vibration pure, capturant les forces invisibles du monde. Inspiré par des années de méditation, de voyages et de contemplation, il peint comme on compose une symphonie, où chaque couleur devient une note et chaque coup de pinceau, une résonance. Cette exposition invite à découvrir sa quête de la fréquence universelle, une énergie qui relie chaque être vivant et dépasse les limites du visible pour révéler les mystères de la vie.',
    ],
    nextPaintingText: 'Rendez-vous au tableau suivant.',
    image: '/works/heart-activation/heart-activation-paint.webp',
    subImage: '/works/heart-activation/heart-activation-image.webp',
    audioPath: '/works/heart-activation/heart-activation-music.mp3',
  },
  {
    id: 2,
    title: 'Babylon',
    slug: 'babylon',
    frequency: '(329 Hz)',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      "Dans Babylon, Jean Marc Larhantec explore la résonance entre la musique et l'art visuel, inspiré par les fréquences du morceau Nude de Radiohead. Cette chanson, aux sonorités introspectives et envoûtantes, vibre à travers des basses profondes et des harmonies subtiles, créant une atmosphère à la fois douce et intense. Jean Marc capte ces vibrations et les retranscrit en un jeu de contrastes puissants entre le noir et le jaune.",
      "Le noir, dense et profond, symbolise les basses fréquences, l’ombre et la gravité de la chanson, évoquant des zones de mystère et d’introspection. Le jaune, vif et éclatant, traduit les harmonies lumineuses et les moments de grâce du morceau, apportant des touches de lumière et de vie qui semblent percer l'obscurité. Ensemble, ces deux couleurs incarnent la dualité sonore de Nude, où chaque note oscille entre l’ombre et la lumière, l’intensité et l’apaisement.",
      'Dans cette toile, les formes géométriques et les traits fragmentés évoquent les oscillations de la musique, chaque coup de pinceau vibrant au rythme de la chanson. Les couches superposées et les textures brutes donnent une impression de mouvement, comme si la toile elle-même était en perpétuelle résonance avec le morceau. En contemplant Babylon, le spectateur est invité à ressentir cette transposition des ondes sonores en visuel, à plonger dans un monde où la couleur et la musique se fondent en une seule et même fréquence.',
    ],
    subTitle: 'Une Connexion Sensorielle',
    subDescription: [
      'Dans "FRÉQUENCES", Jean Marc Larhantec nous entraîne dans une exploration sensorielle profonde. Ses œuvres, imprégnées de son amour pour la musique, la lumière et la méditation, touchent l’âme autant qu’elles captivent les sens. En jouant sur les vibrations subtiles des couleurs et des formes, chaque toile devient un pont vers un monde vibrant, où les sons et les nuances fusionnent dans une invitation à ressentir la vie au-delà du tangible.',
    ],
    nextPaintingText:
      'Pour la suite de la visite, approchez-vous du tableau suivant.',
    image: '/works/babylon/babylon-paint.webp',
    subImage: '/works/babylon/babylon-image.webp',
    audioPath: '/works/babylon/babylon-music.mp3',
  },
  {
    id: 3,
    title: 'My Girl',
    slug: 'my-girl',
    frequency: '(432 Hz)',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      "My Girl est une déclaration d'amour, une ode à la femme et à l'amour universel que Jean Marc Larhantec place au-dessus de tout. Dans cette œuvre, chaque coup de pinceau est empreint de dévotion, de respect et de passion. Réalisée en écoutant une sélection musicale intime, parmi laquelle Je voudrais tomber amoureux de Félix Radu occupe une place particulière, cette toile capture l’essence même de l’amour et de la sensualité.",
      'La chanson de Félix Radu, avec sa douceur poétique et sa sincérité désarmante, accompagne le geste de l’artiste dans une méditation profonde sur la nature de l’attachement, du désir et de l’intensité émotionnelle. La fréquence 432 Hz, connue pour son potentiel harmonisant, imprègne l’œuvre de vibrations apaisantes, créant un équilibre entre la quiétude et l’effervescence des sentiments. À travers ce tableau, Jean Marc nous invite à plonger dans un espace de connexion émotionnelle, où l’amour est à la fois calme et brûlant, distant et proche.',
      "Les teintes subtiles de bleu et de gris, fluides et enveloppantes, évoquent une sensualité discrète, un univers où l’intime se mêle à l’immense. Les formes douces et les textures délicates semblent danser au rythme de la musique, traduisant visuellement les mots et les émotions de Félix Radu. My Girl devient ainsi une expérience complète, où chaque nuance et chaque courbe résonnent en harmonie avec la poésie de la chanson, éveillant les sens et célébrant l'intensité de la connexion humaine.",
      'Avec cette œuvre, Jean Marc Larhantec nous rappelle que l’amour, sous toutes ses formes, est un fil conducteur universel, une force qui unit, apaise et transcende.',
    ],
    subTitle: 'Fréquences de Vie',
    subDescription: [
      "Jean Marc Larhantec compose des univers visuels qui vibrent au rythme de la vie elle-même. Fruit d’une méditation profonde et d'une quête spirituelle, chaque œuvre explore ce qui connecte chaque être à l’univers. Ses toiles, abstraites et lumineuses, révèlent une quête d’unité universelle, où la couleur et le son fusionnent dans une chorégraphie spontanée, touchant le spectateur au-delà de la simple compréhension visuelle.",
    ],
    nextPaintingText: 'Suite au prochain tableau...',
    image: '/works/my-girl/my-girl-paint.webp',
    subImage: '/works/my-girl/my-girl-image.webp',
    audioPath: '/works/my-girl/my-girl-music.mp3',
  },
  {
    id: 4,
    title: 'Yellow Corner',
    slug: 'yellow-corner',
    frequency: '(349 Hz)',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      "Dans Yellow Corner, Jean Marc Larhantec explore la puissance introspective et hypnotique du morceau Everything in Its Right Place de Radiohead. Ce titre, construit autour d'une fréquence lancinante et répétitive, crée une atmosphère à la fois apaisante et mystérieuse. Avec des harmonies électroniques envoûtantes et des sonorités minimalistes, cette chanson invite l’auditeur à se perdre dans un univers parallèle où tout semble étrangement en ordre.",
      'Jean Marc Larhantec traduit cette fréquence vibratoire en une composition visuelle dominée par des nuances de jaune et de tons neutres. Le jaune, éclatant et lumineux, symbolise une lumière intérieure, une énergie profonde qui contraste avec les éléments plus sombres et structurés du tableau. Ce contraste rappelle l’équilibre fragile du morceau, où chaque élément trouve sa place tout en créant un sentiment de flottement.',
      "Les formes et les lignes présentes dans Yellow Corner semblent se mouvoir lentement, capturant l'idée de flux continu et d'harmonie que dégage la musique. Les superpositions et les textures ajoutent une dimension poétique, évoquant un espace où chaque détail a un sens et chaque fréquence visuelle est en accord avec l’énergie du morceau. En contemplant cette œuvre, le spectateur est invité à plonger dans cet univers où couleurs, sons, et mouvements fusionnent pour créer une expérience introspective et immersive.",
    ],
    subTitle: 'Écouter les Couleurs',
    subDescription: [
      'Pour Jean Marc Larhantec, les couleurs ne se contentent pas d’être vues : elles se vivent et s’écoutent. Dans chaque toile, il transcrit une symphonie intérieure, une musique de fréquences qui transcende le visible. Cette exposition "FRÉQUENCES" est une invitation à plonger dans les ondes de lumière et de son qui font vibrer le monde et permettent à chaque spectateur de ressentir le monde avec des yeux neufs.',
    ],
    nextPaintingText:
      'Avancez vers la prochaine œuvre pour continuer l’immersion.',
    image: '/works/yellow-corner/yellow-corner-paint.webp',
    subImage: '/works/yellow-corner/yellow-corner-image.webp',
    audioPath: '/works/yellow-corner/yellow-corner-music.mp3',
  },
  {
    id: 5,
    title: 'Black Hole Sun',
    slug: 'black-hole-sun',
    frequency: '(392 Hz)',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      "Inspiré par la chanson emblématique de Soundgarden, Black Hole Sun, cette œuvre explore la dualité entre la lumière et l’obscurité, un thème central dans la musique de Chris Cornell et une source d’inspiration profonde pour Jean Marc Larhantec. Ce tableau est également une ode à la mémoire de sa mère disparue, un hommage personnel imprégné de sentiments d'absence et de connexion spirituelle.",
      'Le morceau Black Hole Sun, écrit en tonalité de sol majeur, émet une fréquence fondamentale de 392 Hz pour la note sol. Cette fréquence, associée à la clarté et à l’harmonie, résonne avec la lumière au centre du tableau, représentant l’espoir et la foi. Autour de cette lumière centrale, Jean Marc crée un tourbillon de tons sombres, évoquant l’attraction irrésistible du "trou noir", une métaphore de la perte et du chagrin. La fréquence de la lumière picturale et de la musique entre en résonance pour créer une sensation de lutte entre l’obscurité et la clarté.',
      "L’idée de cette œuvre est née lorsque Jean Marc, écoutant la radio, réalisa que Black Hole Sun célébrait son 30e anniversaire. La chanson, qu'il associe à des souvenirs puissants, lui rappelle l’étrangeté du passage du temps et le caractère éphémère de la vie. Dans ce tableau, les nuances sombres capturent cette temporalité, tandis que le noyau lumineux symbolise la permanence des liens, l'espérance et la résilience qui transcendent le temps.",
      "La version de Black Hole Sun interprétée par Norah Jones, diffusée dans cette exposition immersive, accompagne l'œuvre d'une douceur mélancolique qui résonne avec les émotions de Jean Marc. À travers cette fréquence vibratoire partagée entre la musique et la lumière de Black Hole Sun, le spectateur est invité à plonger dans une réflexion sur la foi, l’amour, et l’éclat persistant des souvenirs.",
    ],
    subTitle: 'Une Alchimie de Lumière et de Musique',
    subDescription: [
      'Au cœur de "FRÉQUENCES", Jean Marc Larhantec cherche à capturer l’alchimie entre la lumière, la musique et la matière. Ses œuvres témoignent de cette recherche, offrant au spectateur une expérience immersive où la couleur et le son se rejoignent pour créer un espace vibratoire unique. Ici, il transforme chaque toile en un reflet de la fréquence universelle, unifiant l’art et la nature en une même résonance, pour toucher l’essence de la vie elle-même.',
    ],
    nextPaintingText:
      'Avancez vers le prochain tableau pour découvrir la suite.',
    image: '/works/black-hole-sun/black-hole-sun-paint.webp',
    subImage: '/works/black-hole-sun/black-hole-sun-image.webp',
    audioPath: '/works/black-hole-sun/black-hole-sun-music.mp3',
  },
  {
    id: 6,
    title: 'South Of Heaven',
    slug: 'south-of-heaven',
    frequency: '(60 Hz)',
    size: '162 x 130',
    paintType: PaintType.Acrylique,
    description: [
      'Sur cette toile intense, Jean Marc Larhantec traduit son retour à l’essentiel, inspiré par la nature, les vagues et l’air iodé du Pays Basque, où il aime partir surfer avec son fils. On y devine un arc et une flèche, orientés vers le sol, symboliquement dirigés vers le noyau de la Terre. Ce geste visuel puissant suggère une connexion profonde aux racines, à la stabilité que procure la nature, et à une quête de recentrage face aux tumultes du monde.',
      "Cette œuvre puise aussi son intensité dans le morceau de Slayer, South of Heaven, que Jean Marc écoute souvent. Écrit en résonance avec les tensions de la fin de la guerre froide, ce morceau explore des thèmes sombres et existentiels. Ses fréquences basses et pénétrantes résonnent comme un écho de puissance et d'ombre, touchant des thèmes profonds. Pour cette exposition immersive, l’artiste a choisi une version acoustique interprétée par Jeff Vicario, qui dénude la chanson de son agressivité pour révéler son essence émotionnelle, en parfaite harmonie avec l’esprit de la toile.",
    ],
    subTitle: 'Une Harmonie Cosmotrope',
    subDescription: [
      'Dans le cadre unique du Château Troplong Mondot, l’art de Jean Marc Larhantec trouve une résonance rare et puissante. Entourées des vignobles et de la terre de Saint-Émilion, ses œuvres capturent l’énergie du lieu, se fondant dans une harmonie cosmique. Cette exposition devient ainsi un espace où l’art et le terroir parlent le même langage, une symphonie de fréquences partagées, imprégnées de l’histoire et de la nature environnante.',
    ],
    nextPaintingText: 'Approchez du tableau suivant pour explorer la suite.',
    image: '/works/south-of-heaven/south-of-heaven-paint.webp',
    subImage: '/works/south-of-heaven/south-of-heaven-image.webp',
    audioPath: '/works/south-of-heaven/south-of-heaven-music.mp3',
  },
  {
    id: 7,
    title: 'Cinema',
    slug: 'cinema',
    frequency: '(528 Hz)',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      "Avec Cinema, Jean Marc Larhantec rend hommage à sa mère et au monde du cinéma qui les a tant rapprochés. Inspirée par la chanson de Claude Nougaro du même nom, cette toile fait écho aux souvenirs intimes de Jean Marc, notamment ceux de séances de cinéma partagées avec sa mère, autour de films cultes comme Pierrot le Fou de Jean-Luc Godard. L'accumulation de formes évoque des fragments de pellicules, rappelant le charme des vieux montages de films et une époque révolue du cinéma, celle des années 50 et 60, que l'artiste ressent avec nostalgie, comme s’il l’avait vécue.",
      "Dans cette œuvre, Jean Marc aborde également la sincérité et la quête d'authenticité. Comme il le dit lui-même, nombreux sont ceux qui \"font leur cinéma\", choisissant d’incarner un personnage plutôt que d'être eux-mêmes. Cinema est une invitation à être vrai, à se libérer des artifices et des rôles que l'on s’impose. Cette toile se veut un rappel de l’importance de la sincérité et de l'authenticité, de la beauté de l'être humain sans masque.",
      'La fréquence symbolique de cette œuvre, 528 Hz, est parfois surnommée la "fréquence de l’amour" ou de la "transformation". Réputée pour induire des émotions de paix intérieure et de guérison, cette fréquence est utilisée en musicothérapie pour encourager des états de méditation profonde et d’ouverture émotionnelle. En résonance avec les thèmes de Pierrot le Fou, ce tableau vibre de ce romantisme tumultueux, de cette quête de liberté et de contemplation poétique que Jean Marc associe au cinéma de la Nouvelle Vague. À travers Cinema, il nous invite à ressentir une fréquence émotionnelle douce et apaisante, et à redécouvrir la puissance de la sincérité et de l’amour.',
    ],
    subTitle: 'Résonance Personnelle',
    subDescription: [
      'Les toiles de Jean Marc sont nées de méditations profondes. En travaillant avec des sons et des fréquences spécifiques, il explore des états d’être qui se matérialisent en couleurs et formes. Chaque visiteur peut y trouver sa propre résonance, un écho de son histoire intime.',
    ],
    nextPaintingText: 'Approchez du tableau suivant pour explorer la suite.',
    image: '/works/cinema/cinema-paint.webp',
    subImage: '/works/cinema/cinema-image.webp',
    audioPath: '/works/cinema/cinema-music.mp3',
  },
  {
    id: 8,
    title: 'I Believe In You',
    slug: 'i-believe-in-you',
    frequency: '(432 Hz)',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      'Inspirée par le deuxième album des Chemical Brothers, Dig Your Own Hole, cette œuvre de Jean Marc Larhantec capte l’essence de la cymatique, où le son se manifeste en formes visuelles. En 1997, à la sortie de cet album, Jean Marc a 25 ans. Alors étudiant en cinéma et membre d’un groupe de rock, il découvre à travers ces sons électroniques une nouvelle dimension artistique. The Private Psychedelic Reel, une composition longue et immersive de cet album, devient un déclencheur pour lui, une porte d’entrée vers un univers où le son devient matière.',
      'I Believe in You est une traduction visuelle de cette révélation, peinte 25 ans plus tard avec toute l’énergie et l’émotion accumulées. La toile explore les motifs répétitifs et la montée progressive de couches sonores que l’on retrouve dans The Private Psychedelic Reel, une pièce musicale qui joue sur les fréquences de manière hypnotique. À travers ses formes circulaires et ses couches dynamiques, Jean Marc évoque les principes de la cymatique, où le son agit comme un architecte caché, créant des motifs visibles dans des matériaux comme l’eau ou le sable.',
      'Peinte sur une fréquence de 432 Hz, cette œuvre résonne avec des vibrations harmonieuses souvent associées à la paix intérieure et à l’ouverture émotionnelle. Pour Jean Marc Larhantec, ces fréquences sont les véritables architectes de la terre, de la matière, et de la vie elle-même. Dans I Believe in You, il invite le spectateur à ressentir cette force invisible qui relie tous les éléments de l’univers, traduisant le potentiel infini de l’art et de la musique pour transformer et sublimer notre perception du monde.',
    ],
    subTitle: "Le Pouvoir de l'Invisible",
    subDescription: [
      "Derrière chaque trait de peinture de Jean Marc Larhantec se cache une vibration, une onde invisible. Pour cet artiste, la peinture va au-delà de la matière : c'est une énergie, une fréquence qu'il transmet au monde. Par cette exposition, il révèle un aperçu de ces fréquences secrètes qui constituent notre univers et nous invite à ressentir les forces invisibles qui nous entourent, unissant l’art et la nature dans un dialogue intuitif.",
    ],
    nextPaintingText:
      'Poursuivez votre visite en vous dirigeant vers le prochain tableau.',
    image: '/works/i-believe-in-you/i-believe-in-you-paint.webp',
    subImage: '/works/i-believe-in-you/i-believe-in-you-image.webp',
    audioPath: '/works/i-believe-in-you/i-believe-in-you-music.mp3',
  },
  {
    id: 9,
    title: 'Transhumance',
    slug: 'transhumance',
    frequency: '(432 Hz)',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      "Dans Transhumance, Jean Marc Larhantec explore le vertige du passage vers une nouvelle phase de vie, ce moment fragile et intense où l’on quitte un environnement familier, une culture, ou une relation proche pour s'aventurer dans l'inconnu. Inspirée par la chanson de Led Zeppelin Babe I'm Gonna Leave You, cette œuvre capture l’émotion d’un départ nécessaire, entre mélancolie et courage.",
      'Les nuances sombres et vertes de la toile évoquent la terre, la faune et la flore, symbolisant le lien fondamental entre la vie humaine et la nature. Ce passage, tel un changement de saison, fait écho aux cycles de la vie, où tout départ ouvre la voie à une régénération. Les motifs et textures de la toile semblent incarner les mouvements naturels de la vie, comme un paysage en transformation perpétuelle.',
      "Résonnant autour d’une fréquence harmonisante de 432 Hz, Transhumance capte l’essence d’une introspection profonde et apaisante. Comme la musique de Led Zeppelin, cette œuvre invite le spectateur à contempler l’équilibre fragile entre enracinement et évolution, la puissance de la terre et le besoin d'exploration. En embrassant ce changement, Jean Marc nous rappelle que, tout comme la nature, nous sommes en constante transformation.",
    ],
    subTitle: 'Symphonie Universelle',
    subDescription: [
      'Jean Marc Larhantec capte dans chaque toile la symphonie du monde, puisant son inspiration dans les fréquences de la lumière, de la musique, et de la matière. Pour lui, chaque geste est un écho de cette harmonie universelle qui relie tous les êtres. Cette exposition est une invitation à se laisser emporter dans cette mélodie visuelle où tout est vibration, où chaque couleur et chaque forme résonnent avec l’univers.',
    ],
    nextPaintingText:
      "Continuez l'expérience en avançant vers le tableau suivant.",
    image: '/works/transhumance/transhumance-paint.webp',
    subImage: '/works/transhumance/transhumance-image.webp',
    audioPath: '/works/transhumance/transhumance-music.mp3',
  },
  {
    id: 10,
    title: 'Elon is playing with Evil',
    slug: 'elon-is-playing',
    frequency: '(963 Hz)',
    size: '146 x 114',
    paintType: PaintType.AcryliqueModelingPaste,
    description: [
      'Créée sous l’effet d’une vive émotion, Elon is Playing with Evil incarne la colère et la frustration de Jean Marc Larhantec face à la puissance démesurée de certaines figures de notre époque. Inspiré par la beauté poétique des correspondances entre Albert Camus et Maria Casarès, lues par Isabelle Adjani et Lambert Wilson dans Notre éternel été sur France Culture, l’artiste se plongeait dans un moment de grâce littéraire et d’humanité lorsque tout fut interrompu par une notification sur son téléphone : un tweet de Elon Musk. Cette irruption brutale symbolise pour Jean Marc l’intrusion du matérialisme et du cynisme dans un monde qui devrait être empli de poésie et de valeurs humaines.',
      'Ce tableau, avec ses teintes vives de rouge et de jaune, évoque l’intensité de la rage et du ressentiment. Le rouge et le noir se mêlent pour symboliser le conflit entre la passion humaine et les forces froides de la technologie et de l’argent. L’arc dynamique de couleurs suggère un mouvement d’affrontement, une lutte entre le pouvoir déshumanisé et les aspirations profondes de l’âme. Pour accompagner cette œuvre, Jean Marc a choisi le titre I\'m So Tired de Fugazi, une chanson empreinte de lassitude et de frustration face à un monde en perte de repères. En résonance avec la fréquence de 963 Hz, connue pour élever l’esprit et reconnecter avec l’univers, cette composition amplifie le message de l’œuvre. Cette fréquence, parfois surnommée la "fréquence de l’éveil", évoque la nécessité de se recentrer sur des valeurs essentielles, loin de la course effrénée pour le pouvoir.',
      'Avec Elon is Playing with Evil, Jean Marc Larhantec lance un appel à la conscience collective : l’argent et la domination technologique ne doivent pas être le but ultime de l’humanité. L’artiste nous rappelle que "Love is All, All is Love", et que la poésie, l’amour et l’empathie doivent reprendre leur place centrale dans nos vies.',
    ],
    subTitle: 'Un Art de l’Intuition',
    subDescription: [
      'Jean Marc Larhantec laisse la musique et la vibration guider chaque geste sur la toile, atteignant une spontanéité libérée de toute convention artistique. Inspiré par l’écoute intérieure, il puise dans les fréquences profondes de la vie pour créer des œuvres intuitives, où chaque forme et chaque couleur semblent flotter et résonner dans l’espace. Cette exposition nous invite à ressentir les impulsions vibratoires de l’univers, traduites dans un langage pictural unique.',
    ],
    nextPaintingText:
      'Avancez vers le tableau suivant pour continuer la découverte.',
    image: '/works/elon-is-playing/elon-is-playing-paint.webp',
    subImage: '/works/elon-is-playing/elon-is-playing-image.webp',
    audioPath: '/works/elon-is-playing/elon-is-playing-music.mp3',
  },
  {
    id: 11,
    title: 'A Fragile Thing',
    slug: 'a-fragile-thing',
    frequency: '(432 Hz)',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      'Créée pour la première fois dans un état de méditation profonde, A Fragile Thing marque une étape unique dans la pratique artistique de Jean Marc Larhantec. Contrairement à ses autres œuvres, où il médite avant de peindre, l’artiste a cette fois fusionné le processus méditatif avec l’acte créatif lui-même, peignant en pleine conscience tout en écoutant des fréquences sacrées. Ces vibrations, réputées pour leur pouvoir d’harmonisation et de connexion spirituelle, ont amplifié sa réceptivité aux énergies environnantes, rendant chaque geste et chaque trait empreints d’une sensibilité nouvelle.',
      "Dans cette toile, le noir se révèle être bien plus qu’une simple couleur : pour Jean Marc, il devient un réceptacle lumineux, un espace d’énergie et de potentiel. Ce noir profond symbolise la matière invisible, celle qui relie les atomes et incarne l’essence de la création. Au cœur de l'œuvre, une ouverture mystérieuse se dessine, comme une porte vers les Annales Akashiques. Accéder à cet espace symbolique permettrait de puiser dans une sagesse ancienne, d’explorer les souvenirs de l’âme à travers ses vies passées, présentes et futures, et de trouver une direction spirituelle.",
      "A Fragile Thing nous parle de la fragilité de la Terre et de l’humanité, une vulnérabilité qui, loin d'être une faiblesse, devient une source de connexion et de sensibilité entre les êtres. Par cette œuvre, Jean Marc Larhantec rappelle que la fragilité est ce qui crée des adhérences, ce lien subtil qui nous permet de nous soutenir les uns les autres. A Fragile Thing invite à contempler cette précieuse fragilité et à éveiller notre conscience collective, afin de percevoir la beauté invisible qui unit toutes choses.",
    ],
    subTitle: "Fragments d'Univers",
    subDescription: [
      'Chaque œuvre de Jean Marc Larhantec est une tentative de capturer l’infini dans le fini. L’artiste explore la puissance invisible des fréquences qui animent l’univers. Ses œuvres abstraites, baignées de lumière et de mouvement, sont comme des fenêtres ouvertes sur cette énergie subtile.',
    ],
    nextPaintingText:
      'Avancez vers le tableau suivant pour continuer la découverte.',
    image: '/works/a-fragile-thing/a-fragile-thing-paint.webp',
    subImage: '/works/a-fragile-thing/a-fragile-thing-image.webp',
    audioPath: '/works/a-fragile-thing/a-fragile-thing-music.mp3',
  },
  {
    id: 12,
    title: 'I can never say goodbye',
    slug: 'i-can-never-say-goodbye',
    frequency: '(432 Hz)',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      "Inspirée par le dernier single du groupe anglais The Cure, I Can Never Say Goodbye, cette œuvre de Jean Marc Larhantec explore la douleur et la beauté du souvenir. À travers cette toile, l'artiste exprime la difficulté de laisser partir ceux que l'on aime, tout en nourrissant le besoin de préserver leur présence dans notre vie. Le morceau de The Cure, riche en textures sonores enveloppantes et en couches de guitares réverbérées, a influencé l’ambiance méditative et introspective de cette œuvre. Les basses profondes et les synthétiseurs de la chanson, typiques du style de Robert Smith, créent un univers sonore dense, qui incite à la contemplation et à l’émotion.",
      "Les teintes de bleu dans cette œuvre évoquent la profondeur émotionnelle et l’introspection, rappelant la sérénité et la mélancolie de l’océan. Le bleu symbolise également la fidélité aux souvenirs, un lien indéfectible avec ceux que l'on ne peut oublier. Le noir, quant à lui, représente ici le mystère et l’inconnu, une obscurité douce qui, loin d’être menaçante, devient un espace de protection, un réceptacle où se nichent les souvenirs et les émotions les plus intimes. Ensemble, le bleu et le noir créent une harmonie apaisante et contemplative, un équilibre entre l’ombre et la lumière qui illustre la profondeur des sentiments de l’artiste.",
      'Avant de réaliser cette peinture, Jean Marc Larhantec a plongé dans une méditation profonde en écoutant une fréquence de 432 Hz, connue pour ses propriétés apaisantes et harmonisantes. Cette fréquence, surnommée "la fréquence de l\'amour", invite à une résonance émotionnelle qui aide à faire face à des sentiments d’abandon et de perte. Dans cette œuvre, les textures fluides et les mouvements de couleur suggèrent un espace intérieur où l’amour et le manque coexistent, formant des socles émotionnels essentiels mais difficiles à abandonner.',
      "Pour Jean Marc, l'influence de l’amour et du souvenir est omniprésente. Tout comme Robert Smith a trouvé en son épouse Mary Poole une muse éternelle, Jean Marc explore ici la fragilité des liens humains et l’importance de l’attachement. I Can Never Say Goodbye est une déclaration silencieuse sur l’incapacité de se détacher des piliers affectifs, de ces ancrages qui, malgré la douleur, offrent un sentiment de sécurité. Par cette œuvre, l’artiste nous invite à méditer sur l’importance de préserver l’amour et les souvenirs qui façonnent notre existence.",
    ],
    subTitle: 'À la Rencontre des Ondes',
    subDescription: [
      '"FRÉQUENCES" est un monde vibrant que Jean Marc Larhantec a créé pour que chacun y trouve sa propre résonance. Inspiré par la musique et les énergies profondes, il peint pour rendre visible l’invisible, pour exprimer la danse perpétuelle des ondes et des vibrations qui unissent chaque élément du monde. Cette exposition est un voyage sensible au cœur des énergies de l’univers.',
    ],
    nextPaintingText:
      "Découvrez la suite en vous approchant de l'œuvre suivante.",
    image: '/works/i-can-never-say-goodbye/i-can-never-say-goodbye-paint.webp',
    subImage:
      '/works/i-can-never-say-goodbye/i-can-never-say-goodbye-image.webp',
    audioPath:
      '/works/i-can-never-say-goodbye/i-can-never-say-goodbye-music.mp3',
  },
  {
    id: 13,
    title: 'Touch Me I’m Lost',
    slug: 'touch-me-im-lost',
    frequency: '(880 Hz)',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      '"Touch me I\'m lost" est une toile qui vibre au rythme de l’intensité sonore de l’album Goo de Sonic Youth. Réalisée sous l’impulsion créative d’une écoute immersive, l’œuvre capte l’essence de cette chanson, dont la fréquence oscillante semble dialoguer avec le chaos émotionnel. Pour Jean Marc Larhantec, la musique est bien plus qu’une simple inspiration : elle est un outil de résonance, un vecteur d’émotions brutes et universelles.',
      'À travers cette toile, l’artiste traduit non seulement les textures sonores et les distorsions caractéristiques du rock alternatif, mais aussi l’écho d’une histoire personnelle. Lors de la création, Jean Marc pensait à l’un de ses plus proches amis, pris dans les tourments d’une rupture difficile. Les harmonies dissonantes de Sonic Youth, mêlées aux fréquences rugueuses de la guitare, sont devenues un exutoire, une manière de peindre l’indicible.',
      'Dans ce morceau, les guitares saturées de Sonic Youth évoquent des fréquences puissantes et dominantes, telles que 880 Hz, une octave au-dessus de la fréquence de référence musicale (440 Hz). Cette vibration particulière traverse la toile, résonnant dans chaque coup de pinceau comme une onde chargée de tension et de passion.',
      'Dans le travail de Larhantec, la musique occupe une place centrale. Les grands groupes de rock, tels que Sonic Youth, The Cure ou encore Joy Division, marquent une empreinte indélébile sur ses œuvres. Ils ne sont pas seulement des bandes-son mais des catalyseurs, influençant les formes, les lignes et les couleurs. Chaque geste de l’artiste sur la toile peut être vu comme une note, chaque couche comme une vibration.',
      '"Touch me I\'m lost" est ainsi une œuvre qui transcende les frontières du visible pour atteindre l’audible, où l’énergie électrique du rock rencontre la profondeur d’une douleur humaine. En mêlant ses souvenirs, ses influences et la puissance vibratoire du titre Kool Thing, Jean Marc Larhantec nous invite à ressentir, à nous laisser toucher, et à nous perdre avec lui dans cette fréquence intime et universelle.',
    ],
    subTitle: 'Rythme et Résonance',
    subDescription: [
      'Dans l’art de Jean Marc Larhantec, chaque couleur a sa propre fréquence, chaque tableau devient une onde, une résonance. Cette exposition célèbre l’harmonie entre la lumière et le rythme, comme une symphonie visuelle inspirée des profondeurs du domaine de Troplong Mondot. Ici, ses œuvres fusionnent avec l’énergie vibratoire du lieu, devenant des échos silencieux des mouvements subtils de la vie.',
    ],
    nextPaintingText:
      "Découvrez la suite en vous approchant de l'œuvre suivante.",
    image: '/works/touch-me-im-lost/touch-me-im-lost-paint.webp',
    subImage: '/works/touch-me-im-lost/touch-me-im-lost-image.webp',
    audioPath: '/works/touch-me-im-lost/touch-me-im-lost-music.mp3',
  },
  {
    id: 14,
    title: 'Minotaure',
    slug: 'minotaure',
    frequency: '(880 Hz)',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      'Face à "Minotaure", le visiteur est confronté à une œuvre magistrale, une véritable apothéose dans le parcours artistique de Jean Marc Larhantec. Inspirée par l’écoute du dernier album de Fontaines D.C. et habitée par les fréquences mélancoliques et fiévreuses du morceau Romance, cette toile ne se contente pas de raconter une histoire : elle hurle, vibre et résonne avec une intensité rare. Les couleurs, soigneusement orchestrées, dialoguent avec une force presque mythologique. Le bleu profond, strié de lumières mouvantes, évoque les labyrinthes d’émotions complexes, tandis que les touches de noir charbonneux ancrent la composition dans un combat viscéral. Ici, chaque coup de pinceau est une pulsation, chaque mouvement de peinture une fréquence traduite en image. Les éclats d’ocre et de jaune doré rappellent une lumière vacillante, comme celle qui guide dans les ténèbres un héros perdu. Ce contraste entre ombre et lumière devient une métaphore de l’âme en lutte.',
      'Dans le morceau Romance, une fréquence symbolique émerge : 880 Hz, une octave au-dessus du La standard. Cette vibration, avec sa pureté et sa puissance, traverse la toile comme une onde, reliant chaque élément dans une harmonie chaotique. Elle incarne à la fois l’énergie et la tension, la mélodie et la dissonance, des forces que Larhantec traduit en une danse visuelle magistrale.',
      'Le choix du titre "Minotaure" n’est pas anodin. Comme le monstre légendaire, l’œuvre semble être à la fois force brute et fragilité captive. On y perçoit un déchirement intérieur, une tension constante entre la puissance animale et l’introspection humaine. Le labyrinthe n’est pas seulement visuel, il est aussi sonore, comme si les fréquences de Fontaines D.C. se propageaient à travers la toile pour égarer ou guider le spectateur.',
      'Cette œuvre est un aboutissement. Jean Marc Larhantec, à travers "Minotaure", canalise toute la force accumulée au fil de son parcours. Il transcende les frontières entre abstraction et narration, entre peinture et musique, pour atteindre une forme d’harmonie brute et percutante.',
      'Devant cette toile, le visiteur est invité à ralentir, à écouter les battements qui émanent de ses propres émotions, à se laisser envelopper par ce champ de forces contradictoires. "Minotaure" n’est pas qu’une peinture, c’est une expérience totale : celle d’un artiste qui peint avec des fréquences, compose avec des couleurs, et livre un chef-d\'œuvre intemporel.',
    ],
    subTitle: 'Fréquence et Lumière',
    subDescription: [
      'Pour Jean Marc Larhantec, chaque couleur est une vibration, chaque coup de pinceau une résonance. Inspiré par les nuances subtiles du monde qui nous entoure, il crée des tableaux où la lumière et la couleur deviennent des échos visuels d’une symphonie invisible. À travers cette exposition, découvrez la fréquence qui émane de ses gestes artistiques.',
    ],
    nextPaintingText:
      "Découvrez la suite en vous approchant de l'œuvre suivante.",
    image: '/works/minotaure/minotaure-paint.webp',
    subImage: '/works/minotaure/minotaure-image.webp',
    audioPath: '/works/minotaure/minotaure-music.mp3',
  },
];
