export const saveToLocal = (keyName, data) => {
  localStorage.setItem(keyName, JSON.stringify(data))
}

export const loadFromLocal = (keyName) => {
  try {
    return JSON.parse(localStorage.getItem(keyName))
  } catch (error) {
    console.log(error.message)
  }
}
