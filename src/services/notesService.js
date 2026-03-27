import api from "./api"

export const addNoteAPI = (note) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: note })
    }, 1000)
  })
}