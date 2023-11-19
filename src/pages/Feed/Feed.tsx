import FeedStyles from './Feed.module.css';

function Feed() {
  return (
    <div className={ FeedStyles.feed }>
      <h1 className="text text_type_main-medium mb-6">Лента заказов</h1>
    </div>
  );
}

export default Feed;
