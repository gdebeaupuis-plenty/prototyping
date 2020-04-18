import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { SeedlingQaTable } from './components/seedling-qa-table';
import { FormPrototyping } from './components/form-prototyping';

function App() {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={SeedlingQaTable} />
          <Route exact path='/select' component={FormPrototyping} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
