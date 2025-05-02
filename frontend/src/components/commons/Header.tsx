import { useNavigate } from "react-router-dom"
import styles from "../../assets/css/module.module.css"
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

const handleClickToTop = () => {
  navigate("/")
}

  const handleClickToLogin = () =>{
    navigate('/login')
  }

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if(token){
      setIsLoggedIn(true);
    }
  }, []);

  const handleClickToLogout = () => {
      localStorage.removeItem('authToken');
      setIsLoggedIn(false);
  };

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('authToken');
      setIsLoggedIn(!!token);
    };
  
    checkToken(); // 初回チェック
  
    const interval = setInterval(checkToken, 1000); // 毎秒チェック
  
    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className={styles.headerLeftLogo}>
        <img 
          src = "/Header/HeaderLogo.png" 
          alt="headerLogo" 
          className={styles.headerLogo}
          onClick={handleClickToTop}
        />
      </div>
      <div className={styles.headerRightButtons}>
      {isLoggedIn ? (
        <button className={styles.headerButtons} onClick={handleClickToLogout}>
          ログアウト
        </button>
      ) : (
        <button className={styles.headerButtons} onClick={handleClickToLogin}>
          ログインはこちら
        </button>
      )}
        <button className={styles.headerButtons}>会員情報</button>
        <button className={styles.headerButtons}>メニュー</button>
      </div>
    </header>
  )
}

export default Header