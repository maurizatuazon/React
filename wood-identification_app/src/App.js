import logo from './up_logo.png';
import './App.css';
import Grid from '@mui/material/Grid';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import WoodInformation from './components/WoodInformation';
import { columns_family_table, columns_specie_table } from "./constants";
import { family_rows, specie_rows, apitong } from "./mock/mock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Wood ID Portal</h1>
      </header>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchBar></SearchBar>
        </Grid>
        <Grid item xs={6}>
          <div className="result-list">
            <ResultList gridId="family-grid" columns={columns_family_table} rows={family_rows}></ResultList>
            <ResultList gridId="specie-grid" columns={columns_specie_table} rows={specie_rows}></ResultList>
          </div>
        </Grid>
        <Grid item xs={6}>
          <WoodInformation data={apitong}></WoodInformation>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
