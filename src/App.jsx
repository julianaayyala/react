import { useState } from 'react'
import Questionario from '/src/componentes/questionario'
import './App.css'
import listaPerguntas from '/src/componentes/listaPerguntas'

function App() {

  return (
    <>
      <Questionario listaPerguntas={listaPerguntas}/>
    </>
  )
}

export default App
