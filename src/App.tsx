import { useCallback, useEffect, useState } from "react"
import palavras from "./assets/listaPalavras.json"
import styles from "./styles/App.module.css"
import { DesenhoForca } from "./components/DesenhoForca"
import { PalavraForca } from "./components/PalavraForca"
import { Teclado } from "./components/Teclado"

function App() {
  
  const [palavraParaAdivinhar, setPalavraParaAdivinhar] = useState<string>(() => {
    return palavras[Math.floor(Math.random() * palavras.length)]
  })
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState<string[]>([])

  const letrasIncorretas = letrasAdivinhadas.filter(letra => !palavraParaAdivinhar.includes(letra))

  const addLetraAdivinhada = useCallback((letra: string) => {
    if (letrasAdivinhadas.includes(letra)) return
    setLetrasAdivinhadas(letrasAtuais => [...letrasAtuais, letra])
  }, [letrasAdivinhadas])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return 

      e.preventDefault()
      addLetraAdivinhada(key)
    }
    document.addEventListener("keydown", handler)

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [letrasAdivinhadas])

  return (
    <div className={styles.mainDisplay}>
      <div className={styles.textoResultado}>Lose Win</div>
      <DesenhoForca numeroAcertos={letrasIncorretas.length} />
      <PalavraForca letrasAdivinhadas={letrasAdivinhadas} palavraParaAdivinhar={palavraParaAdivinhar} />
      <div className={styles.teclado}>
        <Teclado letrasAtivas={letrasAdivinhadas.filter(letra => palavraParaAdivinhar.includes(letra))}
          letrasInativas={letrasIncorretas}
          addLetraAdivinhada={addLetraAdivinhada}/>
      </div>

    </div>
  )
}

export default App
