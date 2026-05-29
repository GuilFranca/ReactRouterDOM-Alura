import styles from "./ModelPost.module.css";

export default function ModelPost({ children, fotoCapa, titulo }) {
    return (
        <article className={styles.postModeloContainer}>
            <div 
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            ></div>

            <h2 className={styles.titulo}>{titulo}</h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}