import classes from "./Sidebar.module.css";
import { MdRssFeed, MdVideoLibrary, MdGroups } from "react-icons/md";
import {
  BsChatLeftTextFill,
  BsBookmarkFill,
  BsQuestionSquareFill,
  BsBriefcaseFill,
  BsCalendar2Check,
} from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

import { Users } from "../dummyData";
import Closefriend from "./closefriend/Closefriend";
const Sidebar = (props) => {
  return (
    <div className={classes.Sidebar}>
      <div className={classes.Sidebarwrapper}>
        <ul className={classes.sidebarlist}>
          <li className={classes.sidebarlistitem}>
            <MdRssFeed className={classes.sidebarIcon} />
            <span className={classes.sidebarlistitemtext}>Feed</span>
          </li>
          <li className={classes.sidebarlistitem}>
            <BsChatLeftTextFill className={classes.sidebarIcon} />
            <span className={classes.sidebarlistitemtext}>Chats</span>
          </li>
          <li className={classes.sidebarlistitem}>
            <MdVideoLibrary className={classes.sidebarIcon} />
            <span className={classes.sidebarlistitemtext}>Videos</span>
          </li>
          <li className={classes.sidebarlistitem}>
            <MdGroups className={classes.sidebarIcon} />
            <span className={classes.sidebarlistitemtext}>Groups</span>
          </li>
          <li className={classes.sidebarlistitem}>
            <BsBookmarkFill className={classes.sidebarIcon} />
            <span className={classes.sidebarlistitemtext}>Bookmarks</span>
          </li>
          <li className={classes.sidebarlistitem}>
            <BsQuestionSquareFill className={classes.sidebarIcon} />
            <span className={classes.sidebarlistitemtext}>Questions</span>
          </li>
          <li className={classes.sidebarlistitem}>
            <BsBriefcaseFill className={classes.sidebarIcon} />
            <span className={classes.sidebarlistitemtext}>Jobs</span>
          </li>
          <li className={classes.sidebarlistitem}>
            <BsCalendar2Check className={classes.sidebarIcon} />
            <span className={classes.sidebarlistitemtext}>Events</span>
          </li>
          <li className={classes.sidebarlistitem}>
            <FaGraduationCap className={classes.sidebarIcon} />
            <span className={classes.sidebarlistitemtext}>Courses</span>
          </li>
        </ul>
        <button className={classes.sidebarbutton}>Show More</button>
        <hr className={classes.sidebarhr} />
        <ul className={classes.sidebarfriendlist}>
          {Users.map((u) => (
            <Closefriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
