import axios from "axios"

const API_DELAY = 1000

export const addNoteAPI = (note) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: note })
    }, API_DELAY)
  })
}