export const fetchAllCharacters = async (params) => {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character" +
        new URLSearchParams(params.params)
    )
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
    const response = await fetch("https://rickandmortyapi.com/api/character", {
      body: params.body,
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: "POST",
    })
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}

export const updateCharacter = async (params) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${params.id}`,
      {
        body: params.body,
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: "PUT",
      }
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
      `https://rickandmortyapi.com/api/character/${params.id}`,
      {
        method: "DELETE",
      }
    )
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}
