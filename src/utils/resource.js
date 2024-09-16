const resource = {
    header: {
        menus: [
            {name: 'Hakkımızda' , url: '/AboutUs'},
            {name: 'İletişim', url: '/Contact'}
        ],
        imageUrl: '/image/logo.png',
    },
    main: {
        textSwitcher : [
            { switch: 'Dinlenmenin' },
            { switch: 'Keşfetmenin' },
            { switch: 'Eğlenmenin' },
        ],
        text: "tam zamanı"
    },
    footer: [
        {title: 'İletişim Bilgişeri', contentOne:'Telefon: (123) 456-7890', contentTwo: 'Email: info@example.com', contentThree: 'Adres: Lorem Ipsum Dolor Sit'},
        {title: 'Sosyal Medya', contentOne: 'Facebook', contentTwo: 'Twitter', contentThree: 'Instagram'},
        {title: 'Hakkımızda', contentOne: 'Tatildeniz ile hayalinizdeki tatili yakalayın, en özel fırsatlarla unutulmaz bir kaçamağa hazır olun!'}
    ],
    //Slider Start
    slider: [
        
        { imageUrl: '/image/image.png', imageText: 'Erken Rezervasyona Özel İndirimler'},
        { imageUrl: '/image/image.webp', imageText: 'Peşin Fiyatına 12 Taksit İmkanı'}
    ],
    //Slider End

    //Room Types - Room Details Start
    rooms: [
        {
            id: 1,
            type: 'Standart Oda',
            features: ['Ücretsiz Wi-Fi', 'Deniz Manzarası', 'Klima'],
            price: 500,
            discount: '10%',
            imageUrl: '/image/standartRoom.png'
        },
        {
            id: 2,
            type: 'Deluxe Oda',
            features: ['Ücretsiz Wi-Fi', 'Havuz Manzarası', 'Oda Servisi', 'Klima'],
            price: 1000,
            imageUrl: '/image/deluxeRoom.png'
        },
        {
            id: 3,
            type: 'Suit Oda',
            features: ['Ücretsiz Wi-Fi', 'Deniz Manzarası', 'Jakuzi', 'Klima', 'Oda Servisi'],
            price: 2000,
            discount: '15%',
            imageUrl: '/image/suitRoom.png'
        },
        {
            id: 4,
            type: 'Ultra Lüks Oda',
            features: ['Ücretsiz Wi-Fi', 'Deniz Manzarası', 'Jakuzi', 'Klima', 'Oda Servisi', 'Evcil Hayvan Serbest'],
            price: 3000,
            imageUrl: '/image/ultraLuxRoom.png'
        }
    ],
    //Room Types - Room Details End

    aboutUs: {
        image: '/image/aboutUs.png',
        title: 'Hakkımızda',
        contentOne: 'Tatildeniz, size en iyi tatil fırsatlarını sunmayı amaçlayan, müşteri memnuniyetini ön planda tutan bir tatil platformudur. Yılların verdiği deneyimle, en iyi oteller ve tatil köyleri ile çalışarak unutulmaz tatil deneyimleri sunuyoruz.',
        contentTwo: 'Tatildeniz ile hayalinizdeki tatili şimdi keşfedin, en özel fırsatlarla unutulmaz bir kaçamağa hazır olun!',
        buttonText: 'Bize Ulaşın'
    },
    
    contact : {
        title: 'İletişim',
        name : 'İsim',
        email : 'Email',
        message : 'Mesajınız',
        buttonText : 'Gönder',
        googleMaps : './image/googleMaps.png'
    }
};

export default resource;
