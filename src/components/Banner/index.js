import styles from "./Banner.module.css";
import colorCircle from "assets/circulo_colorido.png";
import me from "assets/me.jpg"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentation}>
                <div className={styles.texts}>
                    <h1 className={styles.title}>
                        Olá, mundo!
                    </h1>

                    <p className={styles.paragraph}>Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)</p>
                </div>

                <div className={styles.images}>
                    <img
                        className={styles.colorCircle}
                        src={colorCircle}
                        aria-hidden={true}
                        alt="Circulo colorido"
                    />

                    <img
                        className={styles.me}
                        src={me}
                        alt="Foto do Guilherme frança"
                    />
                </div>
            </div>
        </div>
    )
}