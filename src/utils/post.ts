import { FlashCardI } from '../types/types'
import { API_ADDRESS } from './API_CONST'

export const postFlashCard = async (data: {
  front: string
  back: string
}): Promise<FlashCardI> => {
  try {
    const response = await fetch(API_ADDRESS, {
      method: 'POST',
      headers: {
        Authorization: 'pss-this-is-my-secret',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      const response = await fetch(API_ADDRESS, {
        method: 'POST',
        headers: {
          Authorization: 'pss-this-is-my-secret',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Wystąpił błąd sieciowy.')
      }
    }
    const responseData = await response.json()
    console.log(responseData)

    return responseData
  } catch (error) {
    console.error('Wystąpił błąd:', error)
    throw error
  }
}
