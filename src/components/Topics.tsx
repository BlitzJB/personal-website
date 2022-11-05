import styles from "../styles/Home.module.css"

const Topics = () => {
    return (<>
        <div className={styles.topicsbox}>
        <div className={styles.topicsbox__label}>
            What do i talk about?
        </div>
        <ul className={styles.topics__list}>
            <li className={styles.topics__listitem}>Upcoming Opportunities like workshops, hackathons, seminars, etc</li>
            <li className={styles.topics__listitem}>Major news in Tech relevant for uni students</li>
            <li className={styles.topics__listitem}>Just little things i find cool and worthy to talk about 😉</li>
        </ul>
        </div>
    </>)
}

export default Topics






