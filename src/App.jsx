import { useState } from 'react';
import Perfil from './components/perfil/perfil'
import Formulario from './components/Formulario';
import Repositorios from './components/Repositorio'

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (

    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />


      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <Repositorios nomeUsuario={nomeUsuario} />

        </>
      )}
      {/* {formularioEstaVisivel && (
      <Formulario/>
    )}
    <button onClick={() =>setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>Toogle form</button> */}
    </>
  )

}

export default App
