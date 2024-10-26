import styles from "../styles/Teclado.module.css"
import letras from "../assets/letras.json"

const TECLAS = letras
type TecladoProps = {
    letrasAtivas: string[], 
    letrasInativas: string[], 
    addLetraAdivinhada: (letra: string) => void
    disabled: boolean
}
export function Teclado({letrasAtivas, letrasInativas, addLetraAdivinhada, disabled = false} : Readonly<TecladoProps>) {
    return (
        <div className={styles.displayLetras}>
           {TECLAS.map(tecla => {
            const ativo = letrasAtivas.includes(tecla)
            const inativo = letrasInativas.includes(tecla)
            return <button onClick={() => addLetraAdivinhada(tecla)} className={`${styles.btn} ${ativo ? styles.active : ""} ${inativo ? styles.inactive : ""}`}
            disabled={ativo || inativo || disabled}
            key={tecla}>{tecla}</button>
           })}
        </div>
    )
}