import React from "react";
import { BrowserRouter as Router, Route ,Redirect ,Switch} from "react-router-dom";

import Layout from './layouts'
import Home from './pages/home'
import Cv from './pages/CV'
import Text from './pages/text'

function BasicExample() {
    return (
      <Router>
        <Layout>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/cv" component={Cv} />
              <Route exact path="/text" component={Text} />
              <Redirect path="/" to="/cv" />
            </Switch>
        </Layout>
      </Router>
    );
  }

  export default BasicExample;