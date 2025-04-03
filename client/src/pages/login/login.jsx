import React, { useState } from "react";
import styles from "./login.module.css";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [inputData, setInputData] = useState({
    fullName: "",
    username: "",
    bio: "",
    password: "",
  });

  const handleChange = () => {};

  const handleLogIn = (e) => {
    e.preventDefault();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  // This function toggles b/w login and register forms
  const toggleForms = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <section className={styles.loginContainer}>
      {isLogin ? (
        <form
          onSubmit={(e) => {
            handleLogIn(e);
          }}
          className={styles.loginForm}
        >
          <h2 className={styles.title}>Login</h2>
          <input
            required
            type="text"
            placeholder="Username"
            name="username"
            value={inputData.username}
            className={styles.inputField}
            onChange={handleChange}
          />
          <input
            required
            type="password"
            name="password"
            value={inputData.password}
            placeholder="Password"
            className={styles.inputField}
            onChange={handleChange}
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
          <p className={styles.signupText}>
            Don't have an account?{" "}
            <button onClick={toggleForms} className={styles.signupBtn}>
              Sign Up
            </button>
          </p>
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            handleSignUp;
          }}
          className={styles.registerForm}
        >
          <h2 className={styles.title}>Register</h2>
          <input
            required
            type="text"
            name="fullName"
            value={inputData.fullName}
            placeholder="Full Name"
            className={styles.inputField}
            onChange={handleChange}
          />
          <input
            required
            type="text"
            name="username"
            value={inputData.username}
            placeholder="Username"
            className={styles.inputField}
            onChange={handleChange}
          />
          <input
            required
            type="text"
            name="bio"
            value={inputData.bio}
            placeholder="Bio"
            className={styles.inputField}
            onChange={handleChange}
          />
          <input
            required
            type="password"
            name="password"
            value={inputData.password}
            placeholder="Password"
            className={styles.inputField}
            onChange={handleChange}
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
          <p className={styles.loginText}>
            Already have an account?
            <button onClick={toggleForms} className={styles.loginBtn}>
              SignIn
            </button>
          </p>
        </form>
      )}
    </section>
  );
}

export default Login;
