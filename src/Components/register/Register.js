import classes from "./Register.module.css";

const Register = () => {
  return (
    <div className={classes.login}>
      <div className={classes.wrapper}>
        <div className={classes.loginleft}>
          <h3 className={classes.loginlogo}>Social Media</h3>
          <span className={classes.logindesc}>
            Connect with friends and the world around you on Social
          </span>
        </div>
        <div className={classes.loginright}>
          <div className={classes.loginbox}>
            <input
              type="text"
              className={classes.logininput}
              placeholder="UserName"
            />
            <input
              type="email"
              className={classes.logininput}
              placeholder="Email"
            />
            <input
              type="text"
              className={classes.logininput}
              placeholder="Password"
            />
            <input
              type="text"
              className={classes.logininput}
              placeholder=" Confirm Password"
            />

            <button className={classes.loginbutton}>Log In</button>
            <span className={classes.loginforgot}>Forgot Password</span>
            <button className={classes.loginregister}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
