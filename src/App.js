import path from "path"

import { useState } from "react"
import { Route, Switch, Link, NavLink } from "react-router-dom"

import useSWR from "swr"

import Home from "./pages/Home"

import "./App.scss"

const fetcher = (url) => fetch(url).then((r) => r.json())

function App() {
  const { data, error } = useSWR("/api/user", fetcher)
  const [isLoading, setIsLoading] = useState(false)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <div>
        hello {data.name} {path.join("name")}!
      </div>
      {isLoading && (
        <div>
          <button onClick={() => setIsLoading(false)}></button>
          <NavLink to="/">Home</NavLink>
          <Link to="/">Home</Link>
        </div>
      )}
    </div>
  )
}

export default App
