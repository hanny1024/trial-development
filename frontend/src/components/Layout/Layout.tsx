import Footer from "../commons/Footer";
import Header from "../commons/Header";
import styles from "../../assets/css/module.module.css"

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className={styles.mainContents}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout