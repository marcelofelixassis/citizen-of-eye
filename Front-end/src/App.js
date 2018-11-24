import './assets/styles/App.css';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import CompTable from './components/CompTable';
import CompTableSocial from './components/CompTableSocial';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>
            Cidadão de Olho
          </span>
        </header>

        <div className="App-body">
          <Grid container spacing={8} style={{ width: "100%" }}>
            <Grid item xs={1}></Grid>
            <Grid item xs={6}>
              <CompTable />
            </Grid>
            <Grid item xs={4}>
              <CompTableSocial />
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
