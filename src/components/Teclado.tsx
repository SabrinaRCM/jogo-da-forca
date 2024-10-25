import styles from "../styles/Teclado.module.css"
import letras from "../assets/letras.json"

const TECLAS = letras
export function Teclado() {
    return (
        <div className={styles.displayLetras}>
           {TECLAS.map(tecla => {
            return <button className={`${styles.btn}`} key={tecla}>{tecla}</button>
           })}
        </div>
    )
}