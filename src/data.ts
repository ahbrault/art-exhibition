export interface Artwork {
  id: number;
  title: string;
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
    image: '/works/heart-activation/heart-activation-paint.jpg',
    subImage: '/works/heart-activation/heart-activation-image.png',
    audioPath: '/works/heart-activation/heart-activation-music.mp3',
  },
  {
    id: 2,
    title: 'Babylon',
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
      'Dans "FREQUENCES", Jean Marc Larhantec nous entraîne dans une exploration sensorielle profonde. Ses œuvres, imprégnées de son amour pour la musique, la lumière et la méditation, touchent l’âme autant qu’elles captivent les sens. En jouant sur les vibrations subtiles des couleurs et des formes, chaque toile devient un pont vers un monde vibrant, où les sons et les nuances fusionnent dans une invitation à ressentir la vie au-delà du tangible.',
    ],
    nextPaintingText:
      'Pour la suite de la visite, approchez-vous du tableau suivant.',
    image: '/works/babylon/babylon-paint.jpg',
    subImage: '/works/babylon/babylon-image.png',
    audioPath: '/works/babylon/babylon-music.mp3',
  },
  {
    id: 3,
    title: 'My Girl',
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
    image: '/works/my-girl/my-girl-paint.png',
    subImage: '/works/my-girl/my-girl-image.png',
    audioPath: '/works/my-girl/my-girl-music.mp3',
  },
  {
    id: 4,
    title: 'Yellow Corner',
    frequency: '(349 Hz)',
    image: '/works/yellow-corner/yellow-corner-paint.jpeg',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      "Dans Yellow Corner, Jean Marc Larhantec explore la puissance introspective et hypnotique du morceau Everything in Its Right Place de Radiohead. Ce titre, construit autour d'une fréquence lancinante et répétitive, crée une atmosphère à la fois apaisante et mystérieuse. Avec des harmonies électroniques envoûtantes et des sonorités minimalistes, cette chanson invite l’auditeur à se perdre dans un univers parallèle où tout semble étrangement en ordre.",
      'Jean Marc Larhantec traduit cette fréquence vibratoire en une composition visuelle dominée par des nuances de jaune et de tons neutres. Le jaune, éclatant et lumineux, symbolise une lumière intérieure, une énergie profonde qui contraste avec les éléments plus sombres et structurés du tableau. Ce contraste rappelle l’équilibre fragile du morceau, où chaque élément trouve sa place tout en créant un sentiment de flottement.',
      "Les formes et les lignes présentes dans Yellow Corner semblent se mouvoir lentement, capturant l'idée de flux continu et d'harmonie que dégage la musique. Les superpositions et les textures ajoutent une dimension poétique, évoquant un espace où chaque détail a un sens et chaque fréquence visuelle est en accord avec l’énergie du morceau. En contemplant cette œuvre, le spectateur est invité à plonger dans cet univers où couleurs, sons, et mouvements fusionnent pour créer une expérience introspective et immersive.",
    ],
    subTitle: 'Écouter les Couleurs',
    subDescription: [
      'Pour Jean Marc Larhantec, les couleurs ne se contentent pas d’être vues : elles se vivent et s’écoutent. Dans chaque toile, il transcrit une symphonie intérieure, une musique de fréquences qui transcende le visible. Cette exposition "FREQUENCES" est une invitation à plonger dans les ondes de lumière et de son qui font vibrer le monde et permettent à chaque spectateur de ressentir le monde avec des yeux neufs.',
    ],
    nextPaintingText:
      'Avancez vers la prochaine œuvre pour continuer l’immersion.',
    subImage: '/works/yellow-corner/yellow-corner-image.png',
    audioPath: '/works/yellow-corner/yellow-corner-music.mp3',
  },
  {
    id: 5,
    title: 'Black Hole Sun',
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
      'Au cœur de "FREQUENCES", Jean Marc Larhantec cherche à capturer l’alchimie entre la lumière, la musique et la matière. Ses œuvres témoignent de cette recherche, offrant au spectateur une expérience immersive où la couleur et le son se rejoignent pour créer un espace vibratoire unique. Ici, il transforme chaque toile en un reflet de la fréquence universelle, unifiant l’art et la nature en une même résonance, pour toucher l’essence de la vie elle-même.',
    ],
    nextPaintingText:
      'Avancez vers le prochain tableau pour découvrir la suite.',
    image: '/works/black-hole-sun/black-hole-sun-paint.jpeg',
    subImage: '/works/black-hole-sun/black-hole-sun-image.png',
    audioPath: '/works/black-hole-sun/black-hole-sun-music.mp3',
  },
  {
    id: 6,
    title: 'South Of Heaven',
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
    image: '/works/south-of-heaven/south-of-heaven-paint.jpeg',
    subImage: '/works/south-of-heaven/south-of-heaven-image.png',
    audioPath: '/works/south-of-heaven/south-of-heaven-music.mp3',
  },
  {
    id: 7,
    title: 'Cinema',
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
    image: '/works/cinema/cinema-paint.png',
    subImage: '/works/cinema/cinema-image.png',
    audioPath: '/works/cinema/cinema-music.mp3',
  },
  {
    id: 8,
    title: 'I Believe In You',
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
      'Derrière chaque trait de peinture de Jean Marc Larhantec se cache une vibration, une onde invisible. Pour cet artiste, la peinture va au-delà de la matière : c\'est une énergie, une fréquence qu\'il transmet au monde. Par cette exposition, il révèle un aperçu de ces fréquences secrètes qui constituent notre univers et nous invite à ressentir les forces invisibles qui nous entourent, unissant l’art et la nature dans un dialogue intuitif.',
    ],
    nextPaintingText: 'Poursuivez votre visite en vous dirigeant vers le prochain tableau.',
    image: '/works/i-believe-in-you/i-believe-in-you-paint.png',
    subImage: '/works/i-believe-in-you/i-believe-in-you-image.png',
    audioPath: '/works/i-believe-in-you/i-believe-in-you-music.mp3',
  },
];
