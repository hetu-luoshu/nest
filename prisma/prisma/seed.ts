import { user } from './seeds/user';
import { category } from './seeds/category';
import { article } from './seeds/article';

async function run() {
  user();
  category();
  article();
}
run();