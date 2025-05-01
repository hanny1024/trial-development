import styles from "../../assets/css/module.module.css"

const Header = () => {
  return (
    <header>
      <div className={styles.headerLeftLogo}>
        <img 
          src = "/Header/HeaderLogo.png" 
          alt="headerLogo" 
          className={styles.headerLogo}
        />
      </div>
      <div className={styles.headerRightButtons}>
        <button className={styles.headerButtons}>ログインはこちら</button>
        <button className={styles.headerButtons}>会員情報</button>
        <button className={styles.headerButtons}>メニュー</button>
      </div>
    </header>
  )
}

export default Header