export const fetchAllCharacters = async (params) => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}

export const fetchCharacter = async (params) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${params.id}`
    )
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}

export const createCharacter = async (params) => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}

export const updateCharacter = async (params) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${params.id}`
    )
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}

export const deleteCharacter = async (params) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${params.id}`
    )
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}
