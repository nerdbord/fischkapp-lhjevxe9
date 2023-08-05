const { VITE_NODE_ENV } = import.meta.env

export const API_ADDRESS = //'http://localhost:4000/api/v1/flashcards/'
  'https://0b3c-37-235-115-186.ngrok-free.app/api/v1/flashcards/'
// 'https://training.nerdbord.io/api/v1/fischkapp/flashcards/'
export const API_AUTH = 'pss-this-is-my-secret'

export const headers = new Headers()
headers.append('Content-Type', 'application/json')
headers.append('Authorization', API_AUTH)
if (VITE_NODE_ENV === 'development') {
  headers.append('ngrok-skip-browser-warning', 'any')
}
