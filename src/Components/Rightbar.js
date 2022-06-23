import classes from "./Rightbar.module.css";
import birthdayimg from "../assets/gift.png";
import addimg from "../assets/ad.png";
import img from "../assets/person/1.jpeg";
import { Users } from "../dummyData";
import Online from "./online/Online";
const Rightbar = ({ profile }) => {
  const Homerightbar = () => {
    return (
      <>
        <div className={classes.birthdaycontainer}>
          <img src={birthdayimg} alt="" className={classes.birthdayimg} />
          <span className={classes.birthdaytext}>
            <b>Name</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img className={classes.rightbaradv} src={addimg} alt="" />
        <h4 className={classes.rightbartitle}>Online friends</h4>
        <ul className={classes.rightbarfriendlist}>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const Profilerightbar = () => {
    return (
      <>
        <h4 className={classes.rightbartitle}>User Information</h4>
        <div className={classes.rightbarinfo}>
          <div className={classes.rightbarinfoitem}>
            <span className={classes.rightbarinfokey}>City:</span>
            <span className={classes.rightbarinfovalue}>New York</span>
          </div>
          <div className={classes.rightbarinfoitem}>
            <span className={classes.rightbarinfokey}>From:</span>
            <span className={classes.rightbarinfovalue}>India</span>
          </div>
          <div className={classes.rightbarinfoitem}>
            <span className={classes.rightbarinfokey}>Relationship</span>
            <span className={classes.rightbarinfovalue}>Single</span>
          </div>
        </div>
        <h4 className={classes.rightbartitle}> User Friends</h4>
        <div className={classes.rightbarfollowings}>
          <div className={classes.rightbarfollowing}>
            <img src={img} alt="" className={classes.rightfollowingimg} />
            <span className={classes.rightbarfollowingname}>Name</span>
          </div>
          <div className={classes.rightbarfollowing}>
            <img src={img} alt="" className={classes.rightfollowingimg} />
            <span className={classes.rightbarfollowingname}>Name</span>
          </div>
          <div className={classes.rightbarfollowing}>
            <img src={img} alt="" className={classes.rightfollowingimg} />
            <span className={classes.rightbarfollowingname}>Name</span>
          </div>
          <div className={classes.rightbarfollowing}>
            <img src={img} alt="" className={classes.rightfollowingimg} />
            <span className={classes.rightbarfollowingname}>Name</span>
          </div>
          <div className={classes.rightbarfollowing}>
            <img src={img} alt="" className={classes.rightfollowingimg} />
            <span className={classes.rightbarfollowingname}>Name</span>
          </div>
          <div className={classes.rightbarfollowing}>
            <img src={img} alt="" className={classes.rightfollowingimg} />
            <span className={classes.rightbarfollowingname}>Name</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarwrapper}>
        {profile ? <Profilerightbar /> : <Homerightbar />}
      </div>
    </div>
  );
};
export default Rightbar;
