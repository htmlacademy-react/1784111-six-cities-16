import { Comment, Comments } from '../types/comment';
import faker from 'faker';

export function generateMockComment(): Comment {
  return {
    id: faker.datatype.uuid(),
    date: faker.date.past().toISOString(),
    user: {
      name: faker.name.findName(),
      avatarUrl: faker.image.avatar(),
      isPro: faker.datatype.boolean(),
    },
    comment: faker.lorem.paragraph(),
    rating: faker.datatype.number({ min: 1, max: 5 }),
  };
}

export function generateMockComments(amount: number): Comments {
  const comments = [];

  for (let i = 0; i < amount; i++) {
    comments.push(generateMockComment());
  }

  return comments;
}
