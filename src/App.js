import './App.css';
import { Topbar } from './components/topbar';
import { Body } from './components/body';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { format, search } from './services/api';
import { useState } from 'react';
function App() {
  const [searchObject, updateSearchObject] = useState({})
  const [values, setValues] = useState([]);
  const [chartType, updateChartType] = useState("LineChart");
  const [hasError, updateError] = useState(false);
  const getGraph = (input) => {
    if(!hasError) {
      search(input).then(value => {
        value.json().then(jsonValue => {
          setValues(format(jsonValue))
        })})   
    }
  }

  return (
    
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <div className="flex">
      <div className="center add-margin">
        <Topbar updateError={updateError} hasError={hasError} updateChartType={updateChartType} setValue={getGraph}></Topbar>
      </div>
      {hasError ? (<div className="error">All fields are required</div>) : null}
      <div className="center">
        <Body chartType={chartType} values={values}></Body>
      </div>
    </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
