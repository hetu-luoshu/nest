import { Random } from 'mockjs';
import { create } from '../helper';
import _ from 'lodash';

export const article = () => {
  create(20, async (prisma) => {
    await prisma.article.create({
      data: {
        title: Random.ctitle(),
        content: Random.cparagraph(10, 50),
        thumb: Random.string(),
        categoryId: _.random(1, 10)
      },
    });
  });
};