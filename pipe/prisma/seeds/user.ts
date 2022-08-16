import { Random } from 'mockjs';
import { create } from '../helper';

export const user = () => {
  create(10, async (prisma) => {
    await prisma.user.create({
      data: {
        email: Random.email(),
        password: '123456',
        github: Random.url(),
        avater: Random.image('300x300')
      },
    });
  });
};
