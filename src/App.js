
import './App.css';
import {BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import Login from './comps/Login/Login';
import More from './pages/More/More';
import Main from './pages/Main/Main';
import Nav from  './comps/Nav/Nav';
import Search from './comps/Search/Search'
import SearchComp from './comps/Search/Search';
import VideoComp from './comps/Video/Video';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route  exact path= "/"    component={Login}/>
      <Route path="/nav/main"     component={Main}/>
      <Route path ='/nav'     component={Nav}/>
      <Route path="/nav/search"   component={SearchComp}/>
      <Route path="/nav/video"   component={VideoComp}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
