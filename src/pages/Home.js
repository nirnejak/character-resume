import useSWR from "swr"

import Card from "../components/Card"
import { fetchCharacters } from "../services/characters"

const Home = () => {
  const { data, error } = useSWR("id", fetchCharacters)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div className="container">
      <h1>Applications</h1>
      <br />
      <div className="row">
        {data.results.map((character) => (
          <div key={character.id} className="column">
            <Card character={character} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
