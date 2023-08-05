import { FlashCardI } from '../types/types'
import { API_ADDRESS, headers } from './API_CONST'
export const fetchCardsData = async (): Promise<FlashCardI[]> => {
  try {
    const response = await fetch(API_ADDRESS, {
      // method: 'GET',
      headers: headers,
    })
    if (!response.ok) {
      throw new Error('Błąd sieciowy - ' + response.status)
    }
    const data: FlashCardI[] = await response.json()
    return data
  } catch (error) {
    console.error('Wystąpił błąd:', error)
    throw error
  }
}
