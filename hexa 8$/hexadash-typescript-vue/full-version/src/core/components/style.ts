import app from '../../config/configApp';
import { UserCard } from '../../views/pages/style';
import { CreatePost } from '../../views/apps/myProfile/overview/timeline/style';

[
  {
    ...UserCard,
    name: 'UserCard',
  },
  {
    ...CreatePost,
    name: 'CreatePost',
  },
].map((c) => {
  app.component(`sd${c.name}`, c);
});
