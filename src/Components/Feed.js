import classes from "./Feed.module.css";
import Share from "./Share/share";
import Post from "./post/Post";
import { Posts } from "../dummyData";

const Feed = () => {
  return (
    <div className={classes.Feed}>
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
};
export default Feed;
