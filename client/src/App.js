import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from './module/form';
import List from './module/list';
import Edit from './module/edit';
import Login from'./module/Login';

function App() {

  return (
    <Router>
      <div className="App">
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand"  style={{color:'orange',fontWeight:'bold'}}>Gestion Utilisateurs</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link  class="nav-link" to="/login"> Sign in </Link>
              </li>
              <li class="nav-item active">
                <Link  class="nav-link" to="/"> Utilisateurs List </Link>
              </li>
            </ul>
            <Link class="btn btn-info "  to="/form">Ajouter Utilisateur </Link>
          </div>
        </nav>

        <div class="container py-4">
          <div class="row">
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={List} />
          <Route path="/form" component={Form} />
          <Route path="/edit/:utilisateurId" component={Edit} />
        
          </div>
        </div>

      </div>
      </Router>
  );
}

export default App;