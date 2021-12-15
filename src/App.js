import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FoodProvider from './context/FoodProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import DetalhesComidas from './pages/DetalhesComidas';
import DetalhesBebidas from './pages/DetalhesBebidas';
import ProcessoComida from './pages/ProcessoComida';
import ProcessoBebida from './pages/ProcessoBebida';
import Explorar from './pages/Explorar';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarComIngre from './pages/ExplorarComIngre';
import ExplorarBebIngre from './pages/ExplorarBebIngre';
import ExplorarComidasAreas from './pages/ExplorarComidasAreas';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <FoodProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/project-recipes-app" component={ Login } />
            <Route exact path="/project-recipes-app/comidas" component={ Comidas } />
            <Route exact path="/project-recipes-app/bebidas" component={ Bebidas } />
            <Route exact path="/project-recipes-app/comidas/:id" component={ DetalhesComidas } />
            <Route exact path="/project-recipes-app/bebidas/:id" component={ DetalhesBebidas } />
            <Route exact path="/project-recipes-app/comidas/:id/in-progress" component={ ProcessoComida } />
            <Route exact path="/project-recipes-app/bebidas/:id/in-progress" component={ ProcessoBebida } />
            <Route exact path="/project-recipes-app/explorar" component={ Explorar } />
            <Route exact path="/project-recipes-app/explorar/comidas" component={ ExplorarComidas } />
            <Route exact path="/project-recipes-app/explorar/bebidas" component={ ExplorarBebidas } />
            <Route
              exact
              path="/project-recipes-app/explorar/comidas/ingredientes"
              component={ ExplorarComIngre }
            />
            <Route
              exact
              path="/project-recipes-app/explorar/bebidas/ingredientes"
              component={ ExplorarBebIngre }
            />
            <Route
              exact
              path="/project-recipes-app/explorar/comidas/area"
              component={ ExplorarComidasAreas }
            />
            <Route exact path="/project-recipes-app/perfil" component={ Perfil } />
            <Route exact path="/project-recipes-app/receitas-feitas" component={ ReceitasFeitas } />
            <Route exact path="/project-recipes-app/receitas-favoritas" component={ ReceitasFavoritas } />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </FoodProvider>
    </div>
  );
}

export default App;
