import { Offer, Offers, OfferFull } from '../types/offer';
import faker from 'faker';

export function generateMockOffer(): Offer {
  return {
    id: crypto.randomUUID(),
    title: 'Title',
    type: 'house',
    price: 1000,
    city: {
      name: faker.address.city(),
      location: {
        latitude: Number(faker.address.latitude()),
        longitude: Number(faker.address.longitude()),
        zoom: 10,
      },
    },
    location: {
      latitude: Number(faker.address.latitude()),
      longitude: Number(faker.address.longitude()),
      zoom: 10,
    },
    isFavorite: Math.random() >= 0.5,
    isPremium: Math.random() >= 0.5,
    rating: Math.floor(Math.random() * 5) + 1,
    previewImage: 'https://via.placeholder.com/150',
  };
}

export function generateMockOfferFull(): OfferFull {
  const goodsCount = faker.datatype.number({ min: 1, max: 4 });
  const goods = faker.random.arrayElements(['Wi-Fi', 'TV', 'Kitchen', 'Air conditioning', 'Heating', 'Washing machine'], goodsCount);

  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.words(3),
    type: faker.random.arrayElement(['Apartment', 'House', 'Room']),
    price: parseFloat(faker.commerce.price()),
    city: {
      name: faker.address.city(),
      location: {
        latitude: parseFloat(faker.address.latitude()),
        longitude: parseFloat(faker.address.longitude()),
        zoom: faker.datatype.number({ min: 10, max: 18 }),
      },
    },
    location: {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
      zoom: faker.datatype.number({ min: 10, max: 18 }),
    },
    isFavorite: faker.datatype.boolean(),
    isPremium: faker.datatype.boolean(),
    rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
    description: faker.lorem.paragraph(1),
    bedrooms: faker.datatype.number({ min: 1, max: 5 }),
    goods,
    host: {
      name: faker.name.findName(),
      avatarUrl: 'https://via.placeholder.com/150',
      isPro: faker.datatype.boolean(),
    },
    images: [
      `https://via.placeholder.com/300x200?text=${faker.random.word()}`,
      `https://via.placeholder.com/300x200?text=${faker.random.word()}`
    ],
    maxAdults: faker.datatype.number({ min: 1, max: 10 }),
  };
}

export function generateMockOffers(amount: number): Offers {
  const offers = [];

  for (let i = 0; i < amount; i++) {
    offers.push(generateMockOffer());
  }

  return offers;
}
