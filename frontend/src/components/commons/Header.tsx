import { useNavigate } from "react-router-dom"
import styles from "../../assets/css/module.module.css"

const Header = () => {
  const navigate = useNavigate();

const handleClickToTop = () => {
  navigate("/")
}


  const handleClickToLogin = () =>{
    navigate('/login')
  }

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
        <button 
          className={styles.headerButtons}
          onClick={handleClickToLogin}
        >
          ログインはこちら
        </button>
        <button className={styles.headerButtons}>会員情報</button>
        <button className={styles.headerButtons}>メニュー</button>
      </div>
    </header>
  )
}

export default Header