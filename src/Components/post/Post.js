import classes from "./Post.module.css";

//import post1 from "../../assets/post/1.jpeg";
import heart from "../../assets/heart.png";
import like from "../../assets/like.png";

import { MdMoreVert } from "react-icons/md";
import { Users } from "../../dummyData";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.postwrapper}>
        <div className={classes.posttop}>
          <div className={classes.posttopleft}>
            <img
              className={classes.postprofileimg}
              alt="img"
              src={Users[0].profilePicture}
            />

            <span className={classes.postusername}>{Users[0].username}</span>
            <span className={classes.postdate}>{props.post.date}</span>
          </div>
          <div className={classes.posttopright}>
            <MdMoreVert />
          </div>
        </div>
        <div className={classes.postcenter}>
          <span className={classes.posttext}>{}</span>
          <img alt="post" className={classes.postimg} src={props.post.photo} />
        </div>
        <div className={classes.postbottom}>
          <div className={classes.postbottomleft}>
            <img src={heart} alt="like" className={classes.likeicon} />
            <img src={like} alt="like" className={classes.likeicon} />
            <span className={classes.postlikecounter}>
              {props.post.like} people like it
            </span>
          </div>
          <div className={classes.postbottomright}>
            <span className={classes.postcommenttext}>
              {props.post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
