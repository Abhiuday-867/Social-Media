import classes from "./Topbar.module.css";
import person1 from "../assets/person/1.jpeg";
import { FaSearch } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { BsFillChatFill, BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Topbar = (props) => {
  return (
    <div className={classes.topbarContainer}>
      <div className={classes.topbarLeft}>
        <Link to="/" className={classes.logolink}>
          <span className={classes.logo}>SocialMedia</span>
        </Link>
      </div>
      <div className={classes.topbarCenter}>
        <div className={classes.searchbar}>
          <FaSearch className={classes.searchIcon} />
          <input
            placeholder="Search for friends,post and video"
            className={classes.searchInput}
          />
        </div>
      </div>
      <div className={classes.topbarRight}>
        <div className={classes.topbarlinks}>
          <div className={classes.topbarlink}>Homepage</div>
          <div className={classes.topbarlink}>Timeline</div>
        </div>
        <div className={classes.topbarIcons}>
          <div className={classes.topbarIconItem}>
            <BsFillPersonFill className={classes.topbaricon} />
            <span className={classes.topbarIconBadge}>1</span>
          </div>
          <div className={classes.topbarIconItem}>
            <BsFillChatFill className={classes.topbaricon} />
            <span className={classes.topbarIconBadge}>1</span>
          </div>
          <div className={classes.topbarIconItem}>
            <MdNotificationsActive className={classes.topbaricon} />
            <span className={classes.topbarIconBadge}>1</span>
          </div>
        </div>
        <img src={person1} alt="Profile" className={classes.topbarImg} />
      </div>
    </div>
  );
};

export default Topbar;
