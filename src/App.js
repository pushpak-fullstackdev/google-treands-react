import './App.css';
import { Topbar } from './components/topbar';
import { Body } from './components/body';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { format } from './services/api';
import { useState } from 'react';
function App() {
  const [values, setValues] = useState([])
  const setGraphValue = (array) => {
    setValues(format(array));
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <div className="flex">
      <div className="center add-margin">
        <Topbar setValue={setGraphValue}></Topbar>
      </div>
      <div className="center">
        <Body values={values}></Body>
      </div>
    </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
