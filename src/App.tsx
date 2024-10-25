import { useState } from "react"
import palavras from "./assets/listaPalavras.json"
import styles from "./styles/App.module.css"
import { DesenhoForca } from "./components/DesenhoForca"
import { PalavraForca } from "./components/PalavraForca"
import { Teclado } from "./components/Teclado"

function App() {

  const [palavraParaAdivinhar, setPalavraParaAdivinhar] = useState<string>(() => {
    return palavras[Math.floor(Math.random() * palavras.length)]
  })
  const [letrasAdivinhadas, setLetrasAcertadas] = useState<string[]>([])

  const letrasIncorretas = letrasAdivinhadas.filter(letra => palavraParaAdivinhar.includes(letra))

  return (
  <div className={styles.mainDisplay}>
    <div className={styles.textoResultado}>Lose Win</div>
    <DesenhoForca numeroAcertos={letrasIncorretas.length} />
    <PalavraForca letrasAdivinhadas={letrasAdivinhadas} palavraParaAdivinhar={palavraParaAdivinhar} />
    <div className={styles.teclado}>
      <Teclado />
    </div>

  </div>
  )
}

export default App
