import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NewCard } from '../NewCard'

const postMock = jest.fn((frontText: string, backText: string) => {
  console.log('save')

  return Promise.resolve({ frontText, backText })
})

describe('adding cards', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('It should not be possible to add a flashcard when front and back card value is empty', async () => {
    const { getByRole } = render(
      <NewCard
        handleCancelBtn={() => {
          null
        }}
        handleSaveBtn={postMock}
      />
    )
    const saveButton = getByRole('button', { name: /Save/ })
    expect(saveButton).toBeDisabled()

    userEvent.click(saveButton)
    expect(postMock).not.toHaveBeenCalled()
  })

  it('It should not be possible to add a flashcard when front or back card value is empty', async () => {
    const { getByRole, getByTestId } = render(
      <NewCard
        handleCancelBtn={() => {
          null
        }}
        handleSaveBtn={postMock}
      />
    )
    const saveButton = await getByRole('button', { name: /Save/ })
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

    expect(postMock).not.toHaveBeenCalled()
  })

  it('It should be possible to add a flashcard when front, and back values are present', async () => {
    const { getByRole, getByTestId } = render(
      <NewCard
        handleCancelBtn={() => {
          null
        }}
        handleSaveBtn={postMock}
      />
    )
    const saveButton = await getByRole('button', { name: /Save/ })
    expect(saveButton).toBeDisabled()

    const frontTextInput = getByTestId('frontTextarea')
    const backTextInput = getByTestId('backTextarea')

    const frontText = 'test front'
    const backText = 'test back'

    await userEvent.type(frontTextInput, frontText)
    await userEvent.type(backTextInput, backText)

    expect(saveButton).not.toBeDisabled()

    await userEvent.click(saveButton)
    expect(postMock).toHaveBeenCalled()
  })
})
