import React from "react"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((r) => r.json())

const Photo = () => {
  const { data, error } = useSWR("/api/user", fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <div>hello {data.name}!</div>
}

export default Photo
