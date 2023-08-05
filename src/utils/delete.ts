import { FlashCardI } from '../types/types'
import { API_ADDRESS, headers } from './API_CONST'

export const deleteFlashCard = async (_id: string): Promise<FlashCardI> => {
  try {
    const response = await fetch(`${API_ADDRESS}${_id}`, {
      method: 'DELETE',
      headers: headers,
    })
    if (!response.ok) {
      throw new Error('Failed to delete flashcard.')
    }
    const data = await response.json()
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
