export interface Artwork {
    id: number;
    title: string;
    frequency: string;
    size: string;
    image: string;
    paintType: PaintType;
    description: string[];
    subTitle: string;
    subDescription: string[];
    youtubeLink: string
}

enum PaintType {
    Acrylique = 'Acrylique'
}

export const artworks: Artwork[] = [
    {
        id: 1,
        title: "Babylon",
        frequency: "(329 Hz)",
        image: "/babylon-paint.jpg",
        size: '146x114',
        paintType: PaintType.Acrylique,
        description: [
            'Dans Babylon, Jean Marc Larhantec explore la résonance entre la musique et l\'art visuel, inspiré\n' +
            'par les fréquences du morceau Nude de Radiohead. Cette chanson, aux sonorités introspectives\n' +
            'et envoûtantes, vibre à travers des basses profondes et des harmonies subtiles, créant une\n' +
            'atmosphère à la fois douce et intense. Jean Marc capte ces vibrations et les retranscrit en un jeu\n' +
            'de contrastes puissants entre le noir et le jaune.\n',
            'Le noir, dense et profond, symbolise les basses fréquences, l’ombre et la gravité de la chanson,\n' +
            'évoquant des zones de mystère et d’introspection. Le jaune, vif et éclatant, traduit les harmonies\n' +
            'lumineuses et les moments de grâce du morceau, apportant des touches de lumière et de vie qui\n' +
            'semblent percer l\'obscurité. Ensemble, ces deux couleurs incarnent la dualité sonore de Nude, où\n' +
            'chaque note oscille entre l’ombre et la lumière, l’intensité et l’apaisement.\n',
            'Dans cette toile, les formes géométriques et les traits fragmentés évoquent les oscillations de la\n' +
            'musique, chaque coup de pinceau vibrant au rythme de la chanson. Les couches superposées et\n' +
            'les textures brutes donnent une impression de mouvement, comme si la toile elle-même était en\n' +
            'perpétuelle résonance avec le morceau. En contemplant Babylon, le spectateur est invité à\n' +
            'ressentir cette transposition des ondes sonores en visuel, à plonger dans un monde où la couleur\n' +
            'et la musique se fondent en une seule et même fréquence.'
        ],
        subTitle: 'Une Connexion Sensorielle',
        subDescription: ['Dans "FREQUENCES", Jean Marc Larhantec nous entraîne dans une exploration sensorielle profonde. Ses\n' +
        'œuvres, imprégnées de son amour pour la musique, la lumière et la méditation, touchent l’âme autant\n' +
        'qu’elles captivent les sens. En jouant sur les vibrations subtiles des couleurs et des formes, chaque toile\n' +
        'devient un pont vers un monde vibrant, où les sons et les nuances fusionnent dans une invitation à ressentir\n' +
        'la vie au-delà du tangible.'],
        youtubeLink: 'https://www.youtube.com/watch?v=BbWBRnDK_AE&ab_channel=Radiohead',
    },
    {
        id: 2,
        title: "Babylon",
        frequency: "(329 Hz)",
        image: "/babylon-paint.jpg",
        size: '146x114',
        paintType: PaintType.Acrylique,
        description: [
            'Dans Babylon, Jean Marc Larhantec explore la résonance entre la musique et l\'art visuel, inspiré\n' +
            'par les fréquences du morceau Nude de Radiohead. Cette chanson, aux sonorités introspectives\n' +
            'et envoûtantes, vibre à travers des basses profondes et des harmonies subtiles, créant une\n' +
            'atmosphère à la fois douce et intense. Jean Marc capte ces vibrations et les retranscrit en un jeu\n' +
            'de contrastes puissants entre le noir et le jaune.\n',
            'Le noir, dense et profond, symbolise les basses fréquences, l’ombre et la gravité de la chanson,\n' +
            'évoquant des zones de mystère et d’introspection. Le jaune, vif et éclatant, traduit les harmonies\n' +
            'lumineuses et les moments de grâce du morceau, apportant des touches de lumière et de vie qui\n' +
            'semblent percer l\'obscurité. Ensemble, ces deux couleurs incarnent la dualité sonore de Nude, où\n' +
            'chaque note oscille entre l’ombre et la lumière, l’intensité et l’apaisement.\n',
            'Dans cette toile, les formes géométriques et les traits fragmentés évoquent les oscillations de la\n' +
            'musique, chaque coup de pinceau vibrant au rythme de la chanson. Les couches superposées et\n' +
            'les textures brutes donnent une impression de mouvement, comme si la toile elle-même était en\n' +
            'perpétuelle résonance avec le morceau. En contemplant Babylon, le spectateur est invité à\n' +
            'ressentir cette transposition des ondes sonores en visuel, à plonger dans un monde où la couleur\n' +
            'et la musique se fondent en une seule et même fréquence.'
        ],
        subTitle: 'Une Connexion Sensorielle',
        subDescription: ['Dans "FREQUENCES", Jean Marc Larhantec nous entraîne dans une exploration sensorielle profonde. Ses\n' +
        'œuvres, imprégnées de son amour pour la musique, la lumière et la méditation, touchent l’âme autant\n' +
        'qu’elles captivent les sens. En jouant sur les vibrations subtiles des couleurs et des formes, chaque toile\n' +
        'devient un pont vers un monde vibrant, où les sons et les nuances fusionnent dans une invitation à ressentir\n' +
        'la vie au-delà du tangible.'],
        youtubeLink: 'https://www.youtube.com/watch?v=BbWBRnDK_AE&ab_channel=Radiohead',
    }, {
        id: 3,
        title: "Babylon",
        frequency: "(329 Hz)",
        image: "/babylon-paint.jpg",
        size: '146x114',
        paintType: PaintType.Acrylique,
        description: [
            'Dans Babylon, Jean Marc Larhantec explore la résonance entre la musique et l\'art visuel, inspiré\n' +
            'par les fréquences du morceau Nude de Radiohead. Cette chanson, aux sonorités introspectives\n' +
            'et envoûtantes, vibre à travers des basses profondes et des harmonies subtiles, créant une\n' +
            'atmosphère à la fois douce et intense. Jean Marc capte ces vibrations et les retranscrit en un jeu\n' +
            'de contrastes puissants entre le noir et le jaune.\n',
            'Le noir, dense et profond, symbolise les basses fréquences, l’ombre et la gravité de la chanson,\n' +
            'évoquant des zones de mystère et d’introspection. Le jaune, vif et éclatant, traduit les harmonies\n' +
            'lumineuses et les moments de grâce du morceau, apportant des touches de lumière et de vie qui\n' +
            'semblent percer l\'obscurité. Ensemble, ces deux couleurs incarnent la dualité sonore de Nude, où\n' +
            'chaque note oscille entre l’ombre et la lumière, l’intensité et l’apaisement.\n',
            'Dans cette toile, les formes géométriques et les traits fragmentés évoquent les oscillations de la\n' +
            'musique, chaque coup de pinceau vibrant au rythme de la chanson. Les couches superposées et\n' +
            'les textures brutes donnent une impression de mouvement, comme si la toile elle-même était en\n' +
            'perpétuelle résonance avec le morceau. En contemplant Babylon, le spectateur est invité à\n' +
            'ressentir cette transposition des ondes sonores en visuel, à plonger dans un monde où la couleur\n' +
            'et la musique se fondent en une seule et même fréquence.'
        ],
        subTitle: 'Une Connexion Sensorielle',
        subDescription: ['Dans "FREQUENCES", Jean Marc Larhantec nous entraîne dans une exploration sensorielle profonde. Ses\n' +
        'œuvres, imprégnées de son amour pour la musique, la lumière et la méditation, touchent l’âme autant\n' +
        'qu’elles captivent les sens. En jouant sur les vibrations subtiles des couleurs et des formes, chaque toile\n' +
        'devient un pont vers un monde vibrant, où les sons et les nuances fusionnent dans une invitation à ressentir\n' +
        'la vie au-delà du tangible.'],
        youtubeLink: 'https://www.youtube.com/watch?v=BbWBRnDK_AE&ab_channel=Radiohead',
    },
    {
        id: 4,
        title: "Babylon",
        frequency: "(329 Hz)",
        image: "/babylon-paint.jpg",
        size: '146x114',
        paintType: PaintType.Acrylique,
        description: [
            'Dans Babylon, Jean Marc Larhantec explore la résonance entre la musique et l\'art visuel, inspiré\n' +
            'par les fréquences du morceau Nude de Radiohead. Cette chanson, aux sonorités introspectives\n' +
            'et envoûtantes, vibre à travers des basses profondes et des harmonies subtiles, créant une\n' +
            'atmosphère à la fois douce et intense. Jean Marc capte ces vibrations et les retranscrit en un jeu\n' +
            'de contrastes puissants entre le noir et le jaune.\n',
            'Le noir, dense et profond, symbolise les basses fréquences, l’ombre et la gravité de la chanson,\n' +
            'évoquant des zones de mystère et d’introspection. Le jaune, vif et éclatant, traduit les harmonies\n' +
            'lumineuses et les moments de grâce du morceau, apportant des touches de lumière et de vie qui\n' +
            'semblent percer l\'obscurité. Ensemble, ces deux couleurs incarnent la dualité sonore de Nude, où\n' +
            'chaque note oscille entre l’ombre et la lumière, l’intensité et l’apaisement.\n',
            'Dans cette toile, les formes géométriques et les traits fragmentés évoquent les oscillations de la\n' +
            'musique, chaque coup de pinceau vibrant au rythme de la chanson. Les couches superposées et\n' +
            'les textures brutes donnent une impression de mouvement, comme si la toile elle-même était en\n' +
            'perpétuelle résonance avec le morceau. En contemplant Babylon, le spectateur est invité à\n' +
            'ressentir cette transposition des ondes sonores en visuel, à plonger dans un monde où la couleur\n' +
            'et la musique se fondent en une seule et même fréquence.'
        ],
        subTitle: 'Une Connexion Sensorielle',
        subDescription: ['Dans "FREQUENCES", Jean Marc Larhantec nous entraîne dans une exploration sensorielle profonde. Ses\n' +
        'œuvres, imprégnées de son amour pour la musique, la lumière et la méditation, touchent l’âme autant\n' +
        'qu’elles captivent les sens. En jouant sur les vibrations subtiles des couleurs et des formes, chaque toile\n' +
        'devient un pont vers un monde vibrant, où les sons et les nuances fusionnent dans une invitation à ressentir\n' +
        'la vie au-delà du tangible.'],
        youtubeLink: 'https://www.youtube.com/watch?v=BbWBRnDK_AE&ab_channel=Radiohead',
    }, {
        id: 5,
        title: "Babylon",
        frequency: "(329 Hz)",
        image: "/babylon-paint.jpg",
        size: '146x114',
        paintType: PaintType.Acrylique,
        description: [
            'Dans Babylon, Jean Marc Larhantec explore la résonance entre la musique et l\'art visuel, inspiré\n' +
            'par les fréquences du morceau Nude de Radiohead. Cette chanson, aux sonorités introspectives\n' +
            'et envoûtantes, vibre à travers des basses profondes et des harmonies subtiles, créant une\n' +
            'atmosphère à la fois douce et intense. Jean Marc capte ces vibrations et les retranscrit en un jeu\n' +
            'de contrastes puissants entre le noir et le jaune.\n',
            'Le noir, dense et profond, symbolise les basses fréquences, l’ombre et la gravité de la chanson,\n' +
            'évoquant des zones de mystère et d’introspection. Le jaune, vif et éclatant, traduit les harmonies\n' +
            'lumineuses et les moments de grâce du morceau, apportant des touches de lumière et de vie qui\n' +
            'semblent percer l\'obscurité. Ensemble, ces deux couleurs incarnent la dualité sonore de Nude, où\n' +
            'chaque note oscille entre l’ombre et la lumière, l’intensité et l’apaisement.\n',
            'Dans cette toile, les formes géométriques et les traits fragmentés évoquent les oscillations de la\n' +
            'musique, chaque coup de pinceau vibrant au rythme de la chanson. Les couches superposées et\n' +
            'les textures brutes donnent une impression de mouvement, comme si la toile elle-même était en\n' +
            'perpétuelle résonance avec le morceau. En contemplant Babylon, le spectateur est invité à\n' +
            'ressentir cette transposition des ondes sonores en visuel, à plonger dans un monde où la couleur\n' +
            'et la musique se fondent en une seule et même fréquence.'
        ],
        subTitle: 'Une Connexion Sensorielle',
        subDescription: ['Dans "FREQUENCES", Jean Marc Larhantec nous entraîne dans une exploration sensorielle profonde. Ses\n' +
        'œuvres, imprégnées de son amour pour la musique, la lumière et la méditation, touchent l’âme autant\n' +
        'qu’elles captivent les sens. En jouant sur les vibrations subtiles des couleurs et des formes, chaque toile\n' +
        'devient un pont vers un monde vibrant, où les sons et les nuances fusionnent dans une invitation à ressentir\n' +
        'la vie au-delà du tangible.'],
        youtubeLink: 'https://www.youtube.com/watch?v=BbWBRnDK_AE&ab_channel=Radiohead',
    },
    {
        id: 6,
        title: "Babylon",
        frequency: "(329 Hz)",
        image: "/babylon-paint.jpg",
        size: '146x114',
        paintType: PaintType.Acrylique,
        description: [
            'Dans Babylon, Jean Marc Larhantec explore la résonance entre la musique et l\'art visuel, inspiré\n' +
            'par les fréquences du morceau Nude de Radiohead. Cette chanson, aux sonorités introspectives\n' +
            'et envoûtantes, vibre à travers des basses profondes et des harmonies subtiles, créant une\n' +
            'atmosphère à la fois douce et intense. Jean Marc capte ces vibrations et les retranscrit en un jeu\n' +
            'de contrastes puissants entre le noir et le jaune.\n',
            'Le noir, dense et profond, symbolise les basses fréquences, l’ombre et la gravité de la chanson,\n' +
            'évoquant des zones de mystère et d’introspection. Le jaune, vif et éclatant, traduit les harmonies\n' +
            'lumineuses et les moments de grâce du morceau, apportant des touches de lumière et de vie qui\n' +
            'semblent percer l\'obscurité. Ensemble, ces deux couleurs incarnent la dualité sonore de Nude, où\n' +
            'chaque note oscille entre l’ombre et la lumière, l’intensité et l’apaisement.\n',
            'Dans cette toile, les formes géométriques et les traits fragmentés évoquent les oscillations de la\n' +
            'musique, chaque coup de pinceau vibrant au rythme de la chanson. Les couches superposées et\n' +
            'les textures brutes donnent une impression de mouvement, comme si la toile elle-même était en\n' +
            'perpétuelle résonance avec le morceau. En contemplant Babylon, le spectateur est invité à\n' +
            'ressentir cette transposition des ondes sonores en visuel, à plonger dans un monde où la couleur\n' +
            'et la musique se fondent en une seule et même fréquence.'
        ],
        subTitle: 'Une Connexion Sensorielle',
        subDescription: ['Dans "FREQUENCES", Jean Marc Larhantec nous entraîne dans une exploration sensorielle profonde. Ses\n' +
        'œuvres, imprégnées de son amour pour la musique, la lumière et la méditation, touchent l’âme autant\n' +
        'qu’elles captivent les sens. En jouant sur les vibrations subtiles des couleurs et des formes, chaque toile\n' +
        'devient un pont vers un monde vibrant, où les sons et les nuances fusionnent dans une invitation à ressentir\n' +
        'la vie au-delà du tangible.'],
        youtubeLink: 'https://www.youtube.com/watch?v=BbWBRnDK_AE&ab_channel=Radiohead',
    },
];
