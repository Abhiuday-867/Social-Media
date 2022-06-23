import Topbar from "../../Components/Topbar";
import Sidebar from "../../Components/Sidebar";
import Rightbar from "../../Components/Rightbar";
import Feed from "../../Components/Feed";
import classes from "./Home.module.css";
const home = () => {
  return (
    <>
      <Topbar />
      <div className={classes.homeContainer}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};
export default home;
