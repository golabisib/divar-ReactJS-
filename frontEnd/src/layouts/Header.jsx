import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "src/services/user";

function Header() {
  const { data } = useQuery(["profile"], getProfile);
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>طهران</p>
        </span>
      </div>
      <div>
        {data && data.data.role === "ADMIN" ? (
          <Link to="/admin">
            <span>
              <img src="profile.svg" />
              <p>پنل ادمین</p>
            </span>
          </Link>
        ) : (
          <Link to="/auth">
            <span>
              <img src="profile.svg" />
              <p>چیزای من</p>
            </span>
          </Link>
        )}
        <Link to="/dashboard" className={styles.button}>
          ثبت چیز
        </Link>
      </div>
    </header>
  );
}

export default Header;
