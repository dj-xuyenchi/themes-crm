import app from '../../config/configApp';
import { UserCard } from '@/view/pages/style.js';
import { CreatePost } from '@/view/apps/myProfile/overview/timeline/style.js';

[
  {
    name: 'UserCard',
    ...UserCard,
  },
  {
    name: 'CreatePost',
    ...CreatePost,
  },
].map((c) => {
  app.component(`sd${c.name}`, c);
});
