import { useState } from 'react'
import './App.css'
import AreaJogo from './components/AreaJogo'
import BotaoAcao from './components/BotaoAcao'
import Carta from './components/Carta'
import ExemploProps from './components/ExemploProps'
import HeaderPersonalizado from './components/headerPersonalizado'
import MaoJogador from './components/MaoJogador'
import PainelControles from './components/PainelControles'
import PlacarMesa from './components/PlacarMesa'
import TituloSecao from './components/TituloSecao'

function App() {
  const [pontosJogador, setPontosJogador] = useState(17)
  const [rodadaAtiva, setRodadaAtiva] = useState(true)


  function handleComprarCarta() {
    setPontosJogador((pontosAtuais) => pontosAtuais + 1)
  }

  function handleNovaRodada() {
    setPontosJogador(0)
    setRodadaAtiva(true)
  }

  return (
    <main className="app-aula">
      <HeaderPersonalizado />

      <TituloSecao />
      <PlacarMesa maoJogador={pontosJogador} maoDealer={0} />
      <AreaJogo />
      <MaoJogador />

      <section className="bloco-demo">
        <h3>Controles</h3>
        <p>Pontos do jogador: {pontosJogador}</p>
        <button type="button" onClick={handleComprarCarta}>
          Comprar (demo)
        </button>
        <button type="button" onClick={handleNovaRodada}>
          Reiniciar rodada
        </button>
        <button type="button" onClick={() => setRodadaAtiva((estadoAtual) => !estadoAtual)}>
          Alternar status
     
        </button>
      
        <p>{rodadaAtiva ? 'Rodada ativa' : 'Rodada encerrada'}</p>
      </section>

      <section className="bloco-componentes">
        <h3>Componentes basicos extras</h3>
        <BotaoAcao />
        <Carta />
        <PainelControles />
      </section>

      <ExemploProps mensagem="abcde" />
      <ExemploProps mensagem="teste" />
    </main>
  )
}

export default App