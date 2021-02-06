import { useParams } from "react-router-dom"

import useSWR from "swr"

import Photo from "../components/Photo"
import ResumeContainer from "../components/ResumeContainer"
import { fetchCharacter } from "../services/characters"

const Resume = () => {
  const { id } = useParams()
  const { data, error } = useSWR(id, fetchCharacter)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <ResumeContainer>
      <Photo image={data.image} altText={data.name} />
      <h1>{data.name}</h1>
    </ResumeContainer>
  )
}

export default Resume
