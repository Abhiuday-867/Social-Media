import classes from "./Closefriend.module.css";
const Closefriend = (props) => {
  return (
    <li className={classes.sidebarfriend}>
      <img
        className={classes.sidebarfriendimg}
        src={props.user.profilePicture}
        alt="img"
      />
      <span className={classes.sidebarfriendname}>{props.user.username}</span>
    </li>
  );
};

export default Closefriend;
