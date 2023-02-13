import {useState} from 'react'
import Cabecalho from './components/Cabecalho'

function App() {
  const [numero, setNumero] = useState()

  function incrementar(){
    console.log("funcao adicionar!")
    setNumero(numero + 1)
  }

  return (
    <div className="home">
      <Cabecalho tema="home" />
      <br />
      {numero}
      ------------------------------
      <Cabecalho tema="cadastro"/>
      <button onClick={incrementar}>Adicionar</button>

    </div>
  )
}

export default App


