import React from 'react';
import { ThemeProvider, Card, createMuiTheme, Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { Tigris } from './components/seedling-qa-table/tables/tigris';
import { FormPrototyping } from './components/form-prototyping';
import { Test } from './components/form-prototyping/test';

function Home() {
  return (
    <Box display="flex" justifyContent="center" marginTop="4rem">
      <Card>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Link to="/ag-grid-pure-table/tigris">Seedling QA AG Table: Tigris</Link>
          <Link to="/seedling-qa/tigris">Seedling QA Table: Tigris</Link>
          <Link to="/seedling-qa/orca">Seedling QA Table: Orca</Link>
          <Link to="/select">Form prototyping</Link>
          <Link to="/test">Test</Link>
        </Box>
      </Card>
    </Box>
  );
}

function App() {
  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/seedling-qa/tigris" component={Tigris} />
          <Route exact path="/select" component={FormPrototyping} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
