const BASE_URL = "https://rickandmortyapi.com/api/"
const RESOURCE = "character"
const URL = `${BASE_URL}/${RESOURCE}`

export const fetchCharacters = async (params) => {
  try {
    const response = await fetch(URL + new URLSearchParams(params.params))
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}

export const fetchCharacter = async (id) => {
  try {
    const response = await fetch(`${URL}/${id}`)
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}

export const createCharacter = async (params) => {
  try {
    const response = await fetch(URL, {
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
    const response = await fetch(`${URL}/${params.id}`, {
      body: params.body,
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: "PUT",
    })
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}

export const deleteCharacter = async (params) => {
  try {
    const response = await fetch(`${URL}/${params.id}`, {
      method: "DELETE",
    })
    const data = await response.json()
    return data
  } catch (e) {
    return e
  }
}
