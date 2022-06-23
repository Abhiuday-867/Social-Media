import classes from "./Online.module.css";
const Online = (props) => {
  return (
    <li className={classes.rightbarfriend}>
      <div className={classes.rightbarprofilecontainer}>
        <img
          className={classes.rightbarprofileimg}
          src={props.user.profilePicture}
          alt=""
        />
        <span className={classes.rightbarOnline}></span>
      </div>
      <span className={classes.rightbarusername}>{props.user.username}</span>
    </li>
  );
};

export default Online;
