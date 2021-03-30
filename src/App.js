import './App.css';
import Home from './pages/Home';
import Translate from './pages/Translate';
import Error from './pages/Error';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/dothraki">
          <Translate endpoint="dothraki.json" api_key="" title="Speak ven a lekh Dothraki"/>
        </Route>
        <Route exact path="/minion">
          <Translate endpoint="minion.json" api_key="ZyTS8cU2e8_3uhNeDaqC8geF" title="dub ko a Minion"/>
        </Route>
        <Route exact path="/pirate">
          <Translate endpoint="pirate.json" api_key="" title="Speak like a Pirate"/>
        </Route>
        <Route exact path="/mandolorian">
          <Translate endpoint="mandolorian.json" api_key="" title="Jorhaa'ir guuror a Mandalorian"/>
        </Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
