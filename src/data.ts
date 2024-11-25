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
    image: '/works/heart-activation/heart-activation-paint.jpg',
    size: '200 x 125',
    paintType: PaintType.AcryliqueModelingPaste,
    description: [
      'Heart Activation, réalisée par Jean Marc Larhantec, est une œuvre née d’une profonde méditation accompagnée de la fréquence musicale de 963 Hz, connue pour éveiller l’intuition. Ce tableau, imprégné de vibrations spirituelles, est une invitation à reconnecter avec la profondeur de soi et à puiser dans la somme de nos expériences passées. Travaillant avec cette fréquence, l’artiste nous conduit à une exploration intime, révélant notre véritable nature et élargissant notre expression personnelle. Heart Activation transcende le simple visuel, évoquant un espace où l’esprit s’ouvre à une compréhension plus complète de soi et du monde environnant.',
    ],
    subTitle: 'Exploration de Fréquences',
    subDescription: [
      'Jean Marc Larhantec transforme chaque tableau en vibration pure, capturant les forces invisibles du monde. Inspiré par des années de méditation, de voyages et de contemplation, il peint comme on compose une symphonie, où chaque couleur devient une note et chaque coup de pinceau, une résonance. Cette exposition invite à découvrir sa quête de la fréquence universelle, une énergie qui relie chaque être vivant et dépasse les limites du visible pour révéler les mystères de la vie.',
    ],
    subImage: '/works/heart-activation/heart-activation-image.png',
    audioPath: '/works/heart-activation/heart-activation-music.mp3',
  },
  {
    id: 2,
    title: 'Babylon',
    frequency: '(329 Hz)',
    image: '/works/babylon/babylon-paint.jpg',
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
    subImage: '/works/babylon/babylon-image.png',
    audioPath: '/works/babylon/babylon-music.mp3',
  },
  {
    id: 3,
    title: 'My Girl',
    frequency: '(432 Hz)',
    image: '/works/my-girl/my-girl-paint.png',
    size: '146 x 114',
    paintType: PaintType.Acrylique,
    description: [
      "My Girl est une déclaration d'amour, une ode à la femme et à l'amour universel que Jean Marc Larhantec place au-dessus de tout. Dans cette œuvre, chaque coup de pinceau est empreint de dévotion, de respect et de passion. Réalisée en écoutant une sélection musicale intime, parmi laquelle Je voudrais tomber amoureux de Félix Radu occupe une place particulière, cette toile capture l’essence même de l’amour et de la sensualité.",
      'La chanson de Félix Radu, avec sa douceur poétique et sa sincérité désarmante, accompagne le geste de l’artiste dans une méditation profonde sur la nature de l’attachement, du désir et de l’intensité émotionnelle. La fréquence 432 Hz, connue pour son potentiel harmonisant, imprègne l’œuvre de vibrations apaisantes, créant un équilibre entre la quiétude et l’effervescence des sentiments. À travers ce tableau, Jean Marc nous invite à plonger dans un espace de connexion émotionnelle, où l’amour est à la fois calme et brûlant, distant et proche.\n',
      "Les teintes subtiles de bleu et de gris, fluides et enveloppantes, évoquent une sensualité discrète, un univers où l’intime se mêle à l’immense. Les formes douces et les textures délicates semblent danser au rythme de la musique, traduisant visuellement les mots et les émotions de Félix Radu. My Girl devient ainsi une expérience complète, où chaque nuance et chaque courbe résonnent en harmonie avec la poésie de la chanson, éveillant les sens et célébrant l'intensité de la connexion humaine.\n",
      'Avec cette œuvre, Jean Marc Larhantec nous rappelle que l’amour, sous toutes ses formes, est un fil conducteur universel, une force qui unit, apaise et transcende.\n',
    ],
    subTitle: 'Fréquences de Vie',
    subDescription: [
      "Jean Marc Larhantec compose des univers visuels qui vibrent au rythme de la vie elle-même. Fruit d’une méditation profonde et d'une quête spirituelle, chaque œuvre explore ce qui connecte chaque être à l’univers. Ses toiles, abstraites et lumineuses, révèlent une quête d’unité universelle, où la couleur et le son fusionnent dans une chorégraphie spontanée, touchant le spectateur au-delà de la simple compréhension visuelle.",
    ],
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
    subImage: '/works/yellow-corner/yellow-corner-image.png',
    audioPath: '/works/yellow-corner/yellow-corner-music.mp3',
  },
];
