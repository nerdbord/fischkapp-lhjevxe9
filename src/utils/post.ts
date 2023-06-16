import { FlashCardI } from '../types/types'

export const postFlashCard = async (data: {
  front: string
  back: string
}): Promise<FlashCardI> => {
  try {
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
    console.log(responseData)
    return responseData.flashcard
  } catch (error) {
    console.error('Wystąpił błąd:', error)
    throw error
  }
}
