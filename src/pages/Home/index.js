import styles from "./home.module.css";

import posts from "json/posts.json"
import CardPost from "components/CardPost";

export default function Home() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <CardPost post={post} />
                </li>
            ))}
        </ul>
    )
}