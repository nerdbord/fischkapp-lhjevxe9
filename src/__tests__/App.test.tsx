import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import App from '../App'

import { fetchCardsData } from '../utils/get'
import { FlashCardI } from '../types/types'

jest.mock('../utils/get.ts')

const mockGetCardsService = fetchCardsData as jest.Mock

describe('App', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should displaying cards', async () => {
    const cards: FlashCardI[] = [
      { front: 'front_testing1', back: 'back_tesing1', _id: '0000' },
      { front: 'front_testing2', back: 'back_tesing2', _id: '1111' },
    ]

    mockGetCardsService.mockResolvedValue(cards)

    const { getAllByText, getByText } = render(<App />)

    await waitFor(() => {
      expect(getAllByText(cards[0].front).length).toBe(1)
      expect(getByText(cards[0].front))
      expect(getByText(cards[0].back))
      expect(getByText(cards[1].front))
      expect(getByText(cards[1].back))
    })
  })
})
