import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const About = React.lazy(() =>
  import(
    /* webpackChunkName: "About", webpackPrefetch: true */ './routes/About'
  ),
)
const Contacts = React.lazy(() =>
  import(
    /* webpackChunkName: "Contacts", webpackPrefetch: true */ './routes/Contacts'
  ),
)
const Home = React.lazy(() =>
  import(/* webpackChunkName: "Home", webpackPrefetch: true */ './routes/Home'),
)
const Projects = React.lazy(() =>
  import(
    /* webpackChunkName: "Projects", webpackPrefetch: true */ './routes/Projects'
  ),
)
const Project = React.lazy(() =>
  import(
    /* webpackChunkName: "Project", webpackPrefetch: true */ './routes/Project'
  ),
)

ReactDOM.render(
  <Router>
    <App>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route path='/projects/:id' component={Project} />
          <Route exact path='/contacts' component={Contacts} />
        </Switch>
      </React.Suspense>
    </App>
  </Router>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
