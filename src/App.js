import { useState, useEffect } from 'react';
import './App.css';
import CaseDetails from './components/CaseDetails';
import CaseForm from './components/CaseForm';
import Cases from './components/Cases';
import CaseNavbar from './components/CaseNavbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  const [cases, setCases] = useState(null)
 
  useEffect(() => {
    fetch('https://localhost:7072/api/cases')
    .then(res => res.json())
    .then(data => setCases(data))
  }, [cases])
  
  
  return (
    <Router>
      <>
        <CaseNavbar />
        <Switch>
          <Route exact path="/">
            {cases && <Cases cases={cases} />}
          </Route>
          <Route path="/create">
            <CaseForm />
          </Route>
        </Switch>
        {/* { cases && <CaseDetails cases={cases} />} */}
      </>
    </Router>
  );
}

export default App;
