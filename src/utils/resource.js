const resource = {
    header: {
        title: "Header Title",
        subtitle: "This is the best app ever!",
    },
    main: {
        text: "Main text"
    },
    footer: {
        title: "Footer Title"
    },
    //Room Types Start
    rooms: [
        {
            id: 1,
            type: 'Standart Oda',
            features: ['Ücretsiz Wi-Fi', 'Deniz Manzarası', 'Klima'],
            price: 500,
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            type: 'Deluxe Oda',
            features: ['Ücretsiz Wi-Fi', 'Havuz Manzarası', 'Oda Servisi', 'Klima'],
            price: 1000,
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            type: 'Suit Oda',
            features: ['Ücretsiz Wi-Fi', 'Deniz Manzarası', 'Jakuzi', 'Klima', 'Oda Servisi'],
            price: 2000,
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            id: 4,
            type: 'Ultra Lüks Oda',
            features: ['Ücretsiz Wi-Fi', 'Deniz Manzarası', 'Jakuzi', 'Klima', 'Oda Servisi', 'Evcil Hayvan Serbest'],
            price: 3000,
            imageUrl: 'https://via.placeholder.com/150'
        }
    ],
    //Room Types End

    //Room Details Start
    roomData: [
        {
            id: 1,
            type: 'Standart Oda',
            features: ['Ücretsiz Wi-Fi', 'Deniz Manzarası', 'Klima'],
            price: 500,
            description: 'Bu Standart Oda, konforlu bir tatil için mükemmel bir tercihtir.',
            imageUrl: 'https://via.placeholder.com/400'
        },
        {
            id: 2,
            type: 'Deluxe Oda',
            features: ['Ücretsiz Wi-Fi', 'Havuz Manzarası', 'Oda Servisi', 'Klima'],
            price: 1000,
            description: 'Deluxe Oda, lüks bir konaklama için idealdir.',
            imageUrl: 'https://via.placeholder.com/400'
        },
        {
            id: 3,
            type: 'Suit Oda',
            features: ['Ücretsiz Wi-Fi', 'Deniz Manzarası', 'Jakuzi', 'Klima', 'Oda Servisi'],
            price: 2000,
            description: 'Suit Oda, unutulmaz bir tatil deneyimi sunar.',
            imageUrl: 'https://via.placeholder.com/400'
        }
    ]
    //Room Details End
};

export default resource;
