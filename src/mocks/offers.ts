import { Offers, OfferFull, OffersFull } from '../types/offer';

export const offers: Offers = [
  {
    'id': '0af9f711-c28d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment',
    'price': 120,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.85309666406198,
        'zoom': 8
      }},
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'https://url-to-image/image.png'
  },
  {
    'id': '0af9f914-c28d-4121-82cd-e0b682a27f00',
    'title': 'Some description',
    'type': 'apartment',
    'price': 1200,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3609553943508,
        'longitude': 4.85309666406198,
        'zoom': 8
      }},
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 3,
    'previewImage': 'https://url-to-image/image.png'
  },
  {
    'id': '0af9f914-c28d-9371-82cd-e0b682a27f00',
    'title': 'Another description',
    'type': 'apartment',
    'price': 100,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3909553943508,
        'longitude': 4.929309666406198,
        'zoom': 8
      }},
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 2,
    'previewImage': 'https://url-to-image/image.png'
  },
  {
    'id': '0af9f914-c99d-9371-82cd-e0b132a27f00',
    'title': 'Another desc',
    'type': 'apartment',
    'price': 100,
    'city': {
      'name': 'Amsterdam',
      'location': {
        'latitude': 52.3809553943508,
        'longitude': 4.939309666406198,
        'zoom': 8
      }},
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': true,
    'rating': 5,
    'previewImage': 'https://url-to-image/image.png'
  },
  {
    'id': '1af6f711-c28d-4121-82cd-e0b672a27f00',
    'title': 'At great location',
    'type': 'room',
    'price': 1250,
    'city': {
      'name': 'Paris',
      'location': {
        'latitude': 53.35514938496378,
        'longitude': 6.673877537499948,
        'zoom': 8
      }},
    'location': {
      'latitude': 53.35514938496378,
      'longitude': 5.673877537499948,
      'zoom': 8
    },
    'isFavorite': false,
    'isPremium': false,
    'rating': 3,
    'previewImage': 'https://url-to-image/image.png'
  },
  {
    'id': '9af6f711-c84d-4121-82cd-e0b462a27f00',
    'title': 'Beautiful studio',
    'type': 'house',
    'price': 130,
    'city': {
      'name': 'Brussels',
      'location': {
        'latitude': 60.35514938496378,
        'longitude': 8.673877537499948,
        'zoom': 8
      }},
    'location': {
      'latitude': 60.35514938496378,
      'longitude': 8.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': true,
    'rating': 4.5,
    'previewImage': 'https://url-to-image/image.png'
  },
  {
    'id': '3af6f711-c30d-4121-82cd-e0b462a27f00',
    'title': 'Luxurious studio at great location',
    'type': 'hotel',
    'price': 1200,
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 52.35514938496378,
        'longitude': 4.673877537499948,
        'zoom': 8
      }},
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 2,
    'previewImage': 'https://url-to-image/image.png'
  },
  {
    'id': '3ak6f711-c30d-4187-82cd-e0b462a27f00',
    'title': 'Luxurious studio',
    'type': 'hotel',
    'price': 12000,
    'city': {
      'name': 'Hamburg',
      'location': {
        'latitude': 62.35514938496378,
        'longitude': 7.673877537499948,
        'zoom': 8
      }},
    'location': {
      'latitude': 62.35514938496378,
      'longitude': 7.673877537499948,
      'zoom': 8
    },
    'isFavorite': true,
    'isPremium': false,
    'rating': 4,
    'previewImage': 'https://url-to-image/image.png'
  }
];

export const offerFull: OffersFull = [
  {
    id: '0af9f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: ['Heating'],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    images: ['https://url-to-image/image.png'],
    maxAdults: 4
  },
  {
    id: '1af6f711-c28d-4121-82cd-e0b672a27f00',
    title: 'At great location',
    type: 'room',
    price: 1250,
    city: {
      name: 'Paris',
      location: {
        latitude: 53.35514938496378,
        longitude: 6.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 53.35514938496378,
      longitude: 5.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 3,
    description: 'A charming room in the heart of Paris, perfect for couples.',
    bedrooms: 1,
    goods: ['Wi-Fi', 'Air Conditioning'],
    host: {
      name: 'Sophie Dupont',
      avatarUrl: 'https://url-to-image/another-image.png',
      isPro: true
    },
    images: ['https://url-to-image/another-image.png'],
    maxAdults: 2
  },
  {
    id: '9af6f711-c84d-4121-82cd-e0b462a27f00',
    title: 'Beautiful studio',
    type: 'house',
    price: 130,
    city: {
      name: 'Brussels',
      location: {
        latitude: 60.35514938496378,
        longitude: 8.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 60.35514938496378,
      longitude: 8.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.5,
    description: 'A spacious studio apartment in Brussels, ideal for families.',
    bedrooms: 2,
    goods: ['Elevator', 'Parking'],
    host: {
      name: 'Jean-Pierre Leclerc',
      avatarUrl: 'https://url-to-image/yet-another-image.png',
      isPro: false
    },
    images: ['https://url-to-image/yet-another-image.png'],
    maxAdults: 4
  },
  {
    id: '3af6f711-c30d-4121-82cd-e0b462a27f00',
    title: 'Luxurious studio at great location',
    type: 'hotel',
    price: 1200,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 2,
    description: 'Experience luxury in Hamburg with this stunning hotel suite.',
    bedrooms: 1,
    goods: ['Breakfast Included', 'Pool'],
    host: {
      name: 'Anna Schmidt',
      avatarUrl: 'https://url-to-image/final-image.png',
      isPro: true
    },
    images: ['https://url-to-image/final-image.png'],
    maxAdults: 3
  },{
    id: '3ak6f711-c30d-4187-82cd-e0b462a27f00',
    title: 'Luxurious studio',
    type: 'hotel',
    price: 12000,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 62.35514938496378,
        longitude: 7.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 62.35514938496378,
      longitude: 7.673877537499948,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    description: 'A top-notch studio in Hamburg, offering unparalleled luxury and comfort.',
    bedrooms: 1,
    goods: ['Jacuzzi', 'Sauna'],
    host: {
      name: 'Max Müller',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: true
    },
    images: ['https://url-to-image/image.png', 'https://url-to-image/another-luxurious-view.png'],
    maxAdults: 2
  }
];

export function findOfferById(id: string): OfferFull | undefined {
  return offerFull.find((offer) => offer.id === id);
}
