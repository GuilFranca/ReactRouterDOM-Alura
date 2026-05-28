import styles from "./Post.module.css";

export default function Post({ post }) {

    console.log(`/assets/posts/${post.id}/capa.png`);

    return (
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt="Imagem de capa do post"
            />
        </div>
    )
}