import { Random } from 'mockjs';
import { create } from '../helper';

export const category = () => {
  create(10, async (prisma) => {
    await prisma.category.create({
      data: {
        title: Random.ctitle()
      },
    });
  });
};