import React from "react";
import classes from "./Auth.module.css";
import { Link } from "react-router-dom";
function Auth() {
  return (
    <section className={classes.auth}>
      {/* logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Amazon_2024.svg/1280px-Amazon_2024.svg.png"
          alt="amazon logo"
        />
      </Link>
      {/* form */}

      <div className={classes.auth__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.auth__signIn_btn}>Sign In</button>
        </form>
        {/* Agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          sale. Please see out privacy Notice, our Cookies Notice and our
          Interest-based ADS Notice.
        </p>

        {/* Create account bottom */}
        <button className={classes.auth__signUp_btn}>
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
