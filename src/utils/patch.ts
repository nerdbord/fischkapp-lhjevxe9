import { FlashCardI } from '../types/types'
import { API_ADDRESS, headers } from './API_CONST'

export const patchFlashCard = async ({
  _id,
  front,
  back,
}: FlashCardI): Promise<FlashCardI> => {
  try {
    const response = await fetch(`${API_ADDRESS}${_id}`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify({ front, back }),
    })
    if (!response.ok) {
      throw new Error('Failed to update object properties.')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Wystąpił błąd:', error)
    throw error
  }
}
