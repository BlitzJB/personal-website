import styles from "@styles/Home.module.css"
import Instagram from "./Instagram"
import LinkedIn from "./LinkedIn"
import Whatsapp from "./Whatsapp"


const Contact = () => {
    return (<>
      <div className={styles.contact}>Reach out to me!</div>
      <div className={styles.contact__icons}>
        <LinkedIn/>
        <Whatsapp/>
        <Instagram/>      
      </div>
    </>)
}

export default Contact