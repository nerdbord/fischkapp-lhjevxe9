import { FlashCardI } from '../types/types'
import { API_ADDRESS } from './API_CONST'

export const patchFlashCard = async ({
  _id,
  front,
  back,
}: FlashCardI): Promise<FlashCardI> => {
  try {
    const response = await fetch(`${API_ADDRESS}:${_id}`, {
      method: 'POST',
      headers: {
        Authorization: 'secret_token',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ _id, front, back }),
    })

    if (!response.ok) {
      throw new Error('Failed to update object properties.')
    }

    const data = await response.json()
    console.log(data)

    return data
  } catch (error) {
    console.error('Wystąpił błąd:', error)
    throw error
  }
}
