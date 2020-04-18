import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Tigris } from './components/seedling-qa-tables/tigris';
import { Orca } from './components/seedling-qa-tables/orca';
import { FormPrototyping } from './components/form-prototyping';

function App() {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/seedling-qa/tigris" component={Tigris} />
          <Route exact path="/seedling-qa/orca" component={Orca} />
          <Route exact path="/select" component={FormPrototyping} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
