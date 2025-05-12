import styles from "../../assets/css/pages.module.css"

const Top = () => {
  return (
    <div className={styles.topPageFrame}>
      <div className={styles.categoryList}>
        <button className={styles.categories}>メンズ</button>
        <button className={styles.categories}>レディース</button>
        <button className={styles.categories}>ヴィンテージ</button>
        <button className={styles.categories}>カテゴリ</button>
        <button className={styles.categories}>ブランド</button>
      </div>
      <div className={styles.topFrame}>
        <p className={styles.topMessage}>あなたにおすすめのアイテム</p>
        <div className={styles.topImages}>
          <img src="RecommendItems/RecommendItemImage1.jpeg"></img>
          <img src="RecommendItems/RecommendItemImage2.jpeg"></img>
          <img src="RecommendItems/RecommendItemImage3.jpeg"></img>
        </div>
      </div>
      <div className={styles.topFrame}>
        <p className={styles.topMessage}>今週のトピックス</p>
        <div className={styles.topImages}>
          <div className={styles.topicFrame}>
            <img src="Topics/TopicsImage1.png" className=""></img>
            <p>古着とデザイン</p>
          </div>
          <div className={styles.topicFrame}>
            <img src="Topics/TopicsImage2.png" className=""></img>
            <p>古着屋さんの仕事</p>
          </div>
          <div className={styles.topicFrame}>
            <img src="Topics/TopicsImage3.jpeg" className=""></img>
            <p>流行のデザイン</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Top