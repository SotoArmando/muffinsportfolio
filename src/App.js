import { Link, Route, BrowserRouter,Switch } from 'react-router-dom';
import Homelanding from './Components/Homelanding';
import Wrappedrow from './Components/Wrappedrow';
import Homeprojectssection from './Components/Homeprojectssection';
import Pathnavigatorhandler from './Containers/Pathnavigatorhandler';
import './res/index.scss';
import Homecollabsection from './Components/Homecollabsection';

function App() {


  const paths = {
    "/": [<Homelanding />, <Homeprojectssection />, <Homecollabsection />],
  }

  return (
    <BrowserRouter>
      <div className="back_linear_4 mobilepad_22">
        <Pathnavigatorhandler/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            {Object.entries(paths).map(([k,v]) => <Route path={k} key={k} children={v} /> )}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
