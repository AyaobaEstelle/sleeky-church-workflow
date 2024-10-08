import Image from "next/image";
import styles from "../../styles.module.css";

const SignInPage = () => {
  return (
    <ul className="flex w-full justify-between h-[100vh] overflow-y-clip p-2.5 space-x-[7.9375rem]">
      <li className={`${styles.textSection} pl-[7.5rem] pt-[7.125rem]`}>
        <h2 className={styles.textHeader}>Sign In</h2>
        <p className={styles.textSubHeader}>
          Welcome back! It only takes a moment to access your account.
        </p>
        <form>
          <div className={styles.form}>
            <label htmlFor="email" className={styles.label}>
              Email Address
            </label>

            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className={styles.form}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <div className={styles.passwordContainer}>
              <input
                className={styles.input}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
              />
              <span className={styles.eyeIcon}>
                <Image
                  src="/images/eye-logo.png"
                  alt="eye logo"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>
          <div className={styles.forgotPassword}>
            <p className={styles.forgotPasswordText}>
              <a href="/#">Forgot password?</a>
            </p>
          </div>
          <div className={styles.form}>
            <button type="submit" className={styles.submitButton}>
              Continue
            </button>
          </div>

          <div className={styles.divider}>
            <hr />
            <span>or</span>
            <hr />
          </div>

          <div className={styles.form}>
            <button type="button" className={styles.googleButton}>
              <Image
                src="/images/google.png"
                alt="Google Logo"
                width={20}
                height={20}
                className={styles.googleLogo}
              />
              Continue with Google
            </button>
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              {" "}
              Don't have an account? {""}{" "}
              <span className={styles.footerSpan}>
                <a href="/sign-up">Sign Up</a>
              </span>
            </p>
          </div>
        </form>
      </li>

      <li className="h-full">
        <Image
          src="/images/login-frame.png"
          alt="Church Congregation"
          width={1000}
          height={100}
          className="h-[100%] object-fill"
        />
      </li>
    </ul>
  );
};

export default SignInPage;
