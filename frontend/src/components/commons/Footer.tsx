import styles from "../../assets/css/module.module.css"

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerLeftText}>
        <button className={styles.footerTexts}>利用規約</button>
        <button className={styles.footerTexts}>このサイトについて</button>
        <button className={styles.footerTexts}>会社概要</button>
      </div>
      <div>
        <button className={styles.footerTexts}>お問い合わせはこちら</button>
      </div>
    </footer>
  )
}

export default Footer