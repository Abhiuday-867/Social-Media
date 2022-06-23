import classes from "./share.module.css";
import { MdOutlinePermMedia, MdLabel, MdLocationOn } from "react-icons/md";
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";
import image from "../Image/8.jpeg";
const share = () => {
  return (
    <div className={classes.share}>
      <div className={classes.sharewrapper}>
        <div className={classes.sharetop}>
          <img src={image} alt="img" className={classes.shareprofileimg} />
          <input
            placeholder="What's in your Mind?"
            className={classes.shareinput}
          />
        </div>
        <hr className="sharehr" />
        <div className={classes.sharebottom}>
          <div className={classes.shareoptions}>
            <div className={classes.shareoptions}>
              <MdOutlinePermMedia className={classes.shareicon1} />
              <span className={classes.shareoptiontext}>Photo or Video</span>
            </div>
            <div className={classes.shareoptions}>
              <MdLabel className={classes.shareicon2} />
              <span className={classes.shareoptiontext}>Tag</span>
            </div>
            <div className={classes.shareoptions}>
              <MdLocationOn className={classes.shareicon3} />
              <span className={classes.shareoptiontext}>Location</span>
            </div>
            <div className={classes.shareoptions}>
              <BsFillEmojiSmileUpsideDownFill className={classes.shareicon4} />
              <span className={classes.shareoptiontext}>Feelings</span>
            </div>
          </div>
          <button className={classes.sharebutton}>Share!</button>
        </div>
      </div>
    </div>
  );
};

export default share;
