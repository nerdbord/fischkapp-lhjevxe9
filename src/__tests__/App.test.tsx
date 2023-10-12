import '@testing-library/jest-dom'
import '@testing-library/react'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { fetchCardsData } from '../utils/get'
import { postFlashCard } from '../utils/post'
import { deleteFlashCard } from '../utils/delete'
import { FlashCardI } from '../types/types'

jest.mock('../utils/get.ts')
jest.mock('../utils/post.ts')
jest.mock('../utils/delete.ts')

const startCards: FlashCardI[] = [
  { front: 'front_testing1', back: 'back_tesing1', _id: '0000' },
  { front: 'front_testing2', back: 'back_tesing2', _id: '1111' },
]
const newCard: FlashCardI = {
  front: 'newCardFront',
  back: 'newCardBack',
  _id: '9999',
}

const mockGetCardsService = fetchCardsData as jest.Mock
const mockPostCardsService = postFlashCard as jest.Mock<Promise<FlashCardI>>
const mockDeleteCardsService = deleteFlashCard as jest.Mock

describe('displaying cards', () => {
  beforeAll(() => {
    //@ts-ignore
    global.IS_REACT_ACT_ENVIRONMENT = false
  })
  beforeEach(() => {
    jest.resetAllMocks()
    mockGetCardsService.mockResolvedValue(startCards)
    mockPostCardsService.mockResolvedValue(newCard)
  })
  it('It should not be possible to add a flashcard when front and back card value is empty', async () => {
    const { getByRole, getByTestId } = render(<App />)
    const addButton = getByTestId('Add')
    await userEvent.click(addButton)

    await waitFor(() => {
      expect(getByRole('button', { name: /Save/ })).toBeInTheDocument()
    })
    const saveButton = getByRole('button', { name: /Save/ })
    expect(saveButton).toBeDisabled()

    await userEvent.click(saveButton)
    expect(mockPostCardsService).not.toHaveBeenCalled()
  })

  it('It should not be possible to add a flashcard when front or back card value is empty', async () => {
    const { getByRole, getByTestId } = render(<App />)
    const addButton = getByTestId('Add')
    await userEvent.click(addButton)

    await waitFor(() => {
      expect(getByRole('button', { name: /Save/ })).toBeInTheDocument()
    })
    const saveButton = getByRole('button', { name: /Save/ })
    expect(saveButton).toBeDisabled()

    const frontTextInput = getByTestId('frontTextarea')
    const backTextInput = getByTestId('backTextarea')
    const frontText = 'test front'
    const backText = 'test back'

    await userEvent.type(frontTextInput, frontText)
    expect(saveButton).toBeDisabled()
    await userEvent.click(saveButton)

    await userEvent.clear(frontTextInput)
    await userEvent.type(backTextInput, backText)

    expect(saveButton).toBeDisabled()
    await userEvent.click(saveButton)
    expect(mockPostCardsService).not.toHaveBeenCalled()
  })

  it('It should be possible to add a flashcard when front, and back values are present', async () => {
    const { getByRole, getByTestId, getByText } = render(<App />)
    const addButton = getByTestId('Add')
    await userEvent.click(addButton)

    await waitFor(() => {
      expect(getByRole('button', { name: /Save/ })).toBeInTheDocument()
    })
    const saveButton = getByRole('button', { name: /Save/ })
    expect(saveButton).toBeDisabled()

    const frontTextInput = getByTestId('frontTextarea')
    const backTextInput = getByTestId('backTextarea')

    await userEvent.type(frontTextInput, newCard.front)
    await userEvent.type(backTextInput, newCard.back)

    expect(saveButton).not.toBeDisabled()
    await userEvent.click(saveButton)
    expect(mockPostCardsService).toHaveBeenCalled()
    await waitFor(() => {
      expect(getByText(newCard.front)).toBeInTheDocument()
      expect(getByText(newCard.back)).toBeInTheDocument()
    })
  })

  it('It should delete flashcard from the list when clicking on Trash icon', async () => {
    mockDeleteCardsService.mockResolvedValue(startCards[0])
    const { getByText, getByTestId, queryByText, getAllByTestId } = render(
      <App />
    )

    await waitFor(() => {
      expect(getByText(startCards[0].front)).toBeInTheDocument()
    })
    const cardHeader = getByText(startCards[0].front)
    const cardElement = cardHeader.parentElement as HTMLElement
    expect(cardElement).toBeInTheDocument()
    const editButton = cardElement?.querySelector('button') as HTMLElement
    expect(editButton).toBeInTheDocument()

    userEvent.click(editButton)
    await waitFor(() => {
      expect(getByTestId('delete')).toBeInTheDocument()
    })
    const deleteButton = getByTestId('delete')
    userEvent.click(deleteButton)

    await waitFor(() => {
      expect(queryByText(startCards[0].back)).not.toBeInTheDocument()
    })
    const cardElements = getAllByTestId('card')
    expect(cardElements).toHaveLength(startCards.length - 1)
  })

  it('should displaying cards', async () => {
    const { getAllByText, getByText } = render(<App />)

    await waitFor(() => {
      expect(getAllByText(startCards[0].front).length).toBe(1)
      expect(getByText(startCards[0].front)).toBeInTheDocument()
      expect(getByText(startCards[0].back)).toBeInTheDocument()
      expect(getByText(startCards[1].front)).toBeInTheDocument()
      expect(getByText(startCards[1].back)).toBeInTheDocument()
    })
  })
})
