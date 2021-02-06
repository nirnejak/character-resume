import { Route, Switch } from "react-router-dom"

import Home from "./pages/Home"
import Resume from "./pages/Resume"

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/resume/:id" component={Resume} />
    </Switch>
  )
}

export default App
