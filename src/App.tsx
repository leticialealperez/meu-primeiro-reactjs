import React from 'react';
import SectionContent from './Components/SectionContent/SectionContent';
import img from './Components/SectionContent/images/jessica.png';
import { ThemeProvider } from 'styled-components';

const img2 = 'https://www.growdev.com.br/assets/images/starter/mentores.png';

const tema = {
  dark: {
    background: '#3a3a3a',
    color: '#fff'
  },
  light: {
    background: '#fff',
  },
}

function App() {
  
  return (
    <React.Fragment>
      <ThemeProvider theme={tema.light}>
        <SectionContent titulo='Titulo Props' img={img} texto='Um texto teste de props' alt='Foto da Jessica' showButton/>

        <SectionContent titulo='Titulo 2' img={img2} texto='Um outro texto teste de props' revert />
      </ThemeProvider>
    </React.Fragment>
  );
}

// toda vez que precisarmos retornar elementos html ou componentes da aplicação vamos precisar usar ()
export default App;
