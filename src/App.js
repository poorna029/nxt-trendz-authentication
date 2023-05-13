import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import Header from './components/Header'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
// import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginForm} />
    </Switch>
  </BrowserRouter>
)

export default App
