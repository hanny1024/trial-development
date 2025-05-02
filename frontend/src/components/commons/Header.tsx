import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "../../assets/css/module.module.css";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const handleClickToTop = () => {
    navigate("/");
  };

  const handleClickToLogin = () => {
    navigate("/login");
  };

  const handleClickToUserInfo = () => {
    if(isLoggedIn){
      navigate("/userInfo")
    }else{
      navigate("/login")
    }
  }

  return (
    <header>
      <div className={styles.headerLeftLogo}>
        <img 
          src="/Header/HeaderLogo.png" 
          alt="headerLogo" 
          className={styles.headerLogo}
          onClick={handleClickToTop}
        />
      </div>
      <div className={styles.headerRightButtons}>
        {isLoggedIn ? (
          <button className={styles.headerButtons} onClick={logout}>
            ログアウト
          </button>
        ) : (
          <button className={styles.headerButtons} onClick={handleClickToLogin}>
            ログインはこちら
          </button>
        )}
        <button 
          className={styles.headerButtons}
          onClick={handleClickToUserInfo}
        >
          会員情報
        </button>
        <button className={styles.headerButtons}>メニュー</button>
      </div>
    </header>
  );
};

export default Header;
