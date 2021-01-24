import path from "path"

import { useState } from "react"
import { Route, Switch, Link, NavLink } from "react-router-dom"

import useSWR from "swr"

import Home from "./pages/Home"
import { fetchCharacter } from "./services/characters"

import "./App.scss"

function App() {
  const { data, error } = useSWR({ id: 1 }, fetchCharacter)

  const [isLoading, setIsLoading] = useState(false)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className="App">
      {isLoading && (
        <div>
          <button onClick={() => setIsLoading(false)}></button>
          <NavLink to="/">Home</NavLink>
          <Link to="/">Home</Link>
        </div>
      )}

      <h1>hello {data.name}!</h1>
      <br />
      <h2>Path Join: {path.join(__dirname, "name")}</h2>
      <br />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App
