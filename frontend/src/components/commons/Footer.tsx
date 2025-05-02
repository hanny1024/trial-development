import { useNavigate } from "react-router-dom"
import styles from "../../assets/css/module.module.css"
import { useAuth } from "../../context/AuthContext";

const Footer = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const handleClickToContact = () => {
    if(isLoggedIn){
      navigate("/contact")
    }else{
      navigate("/login")
    }
  }

  return (
    <footer>
      <div className={styles.footerLeftText}>
        <button className={styles.footerTexts}>利用規約</button>
        <button className={styles.footerTexts}>このサイトについて</button>
        <button className={styles.footerTexts}>会社概要</button>
      </div>
      <div>
        <button 
          className={styles.footerTexts}
          onClick={handleClickToContact}
        >
          お問い合わせはこちら
        </button>
      </div>
    </footer>
  )
}

export default Footer