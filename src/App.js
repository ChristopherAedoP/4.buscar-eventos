import React ,{Fragment} from 'react';
import Header from './components/Header';
import CategoriasProvider from './context/CategoriasContext';

import Formulario from './components/Formulario';
import EventosProvider from './context/EventosContext';
import ListaEventos from './components/ListaEventos';


function App() {
  return (
    <Fragment>
      <Header />
      
      <EventosProvider>
        <CategoriasProvider>
          
          <div className="uk-container">
            <Formulario/>
            <ListaEventos />
          </div>
          
        </CategoriasProvider>
      </EventosProvider>
    </Fragment>
  );
}

export default App;
