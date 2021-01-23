export const fetchAllPosts = async (url, params) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const fetchPost = async (url, params) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const createPost = async (url, params) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const updatePost = async (url, params) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const deletePost = async (url, params) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}
