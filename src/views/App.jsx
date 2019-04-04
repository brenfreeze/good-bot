import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './MainPage/'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route
              path="/"
              component={MainPage}
            />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App