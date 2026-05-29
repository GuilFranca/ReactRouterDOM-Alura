import { Link } from "react-router-dom";
import styles from "./CardPost.module.css";

export default function CardPost({ post }) {

    return (
        <Link to={`/post/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <button className={styles.botaoLer}>Ler</button>

            </div>
        </Link>
    )
}