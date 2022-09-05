import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from './pages/Post';
import Edit from './pages/Edit';
// import Products from './components/Section-products'
// import FormAdd from './components/FormAdd/Index'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/post' component={ Post } />
        <Route path='/Edit' component={ Edit } />
      </Switch>
    </Router>
  )
}

export default App;
