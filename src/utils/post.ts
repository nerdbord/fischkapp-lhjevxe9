import { FlashCardI } from '../types/types'
import { API_ADDRESS, headers } from './API_CONST'

export const postFlashCard = async (data: {
  front: string
  back: string
}): Promise<FlashCardI> => {
  try {
    const response = await fetch(API_ADDRESS, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    })
    if (!response.ok) {
      const response = await fetch(
        'https://training.nerdbord.io/api/v1/fischkapp/flashcards',
        {
          method: 'POST',
          headers: {
            Authorization: 'secret_token',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )
      if (!response.ok) {
        throw new Error('Wystąpił błąd sieciowy.')
      }
    }
    const responseData = await response.json()
    return responseData.flashcard
  } catch (error) {
    console.error('Wystąpił błąd:', error)
    throw error
  }
}
