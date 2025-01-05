import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import styles from "./Header.module.css";

import { getProfile } from "src/services/user";
import cookiesUtils from "src/utils/cookie";
const { deleteCookie } = cookiesUtils;


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
        ) : ( !data &&
          <Link to="/auth">
            <span>
              <img src="profile.svg" />
              <p>ورود</p>
            </span>
          </Link>
        )}
        <Link to="/dashboard" className={styles.button}>
          ثبت چیز
        </Link>
      {data && <button onClick={deleteCookie} className={styles.logButton}>خروج</button>}
      </div>
    </header>
  );
}

export default Header;
