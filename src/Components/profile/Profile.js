import Topbar from "../Topbar";
import Sidebar from "../Sidebar";
import Rightbar from "../Rightbar";
import Feed from "../Feed";
import classes from "./Profile.module.css";
import coverimg from "../../assets/post/3.jpeg";
import userimg from "../../assets/person/7.jpeg";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className={classes.profile}>
        <Sidebar />
        <div className={classes.profileright}>
          <div className={classes.profilerighttop}>
            <div className={classes.profilecover}>
              <img src={coverimg} alt="" className={classes.profilecoverimg} />
              <img src={userimg} alt="" className={classes.profileuserimg} />
            </div>
            <div className={classes.profileinfo}>
              <h4 className={classes.profileinfoname}>Name</h4>
              <span className={classes.profileinfodesc}>Hey welcome !!</span>
            </div>
          </div>
          <div className={classes.profilerightbottom}>
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
