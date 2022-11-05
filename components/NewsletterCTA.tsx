import styles from "@styles/Home.module.css"

const NewsletterCTA = () => {
    return (<>
      <div className={styles.newsletterbox}>
      <div className={styles.newsletterbox__header}>Sign Up for my newsletter!</div>
      <form action='/api/addEmail' method='POST' className={styles.newsletterbox__inputarea}>
        <input className={styles.emailinput} type="email" name="email" id="email" />
        <button type="submit" className={styles.submit}>
        <span className="material-symbols-outlined">
          send
        </span>
        </button>
      </form>
    </div>
    </>)
}

export default NewsletterCTA


