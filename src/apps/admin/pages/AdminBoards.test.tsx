import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AdminBoards, boardPreviews } from './AdminBoards'

const renderAdminBoards = () =>
  render(
    <MemoryRouter>
      <AdminBoards />
    </MemoryRouter>,
  )

describe('AdminBoards', () => {
  test('renders one preview link for each implemented board', () => {
    renderAdminBoards()

    const links = screen.getAllByRole('link')

    expect(links).toHaveLength(boardPreviews.length)
    expect(links.map((link) => link.getAttribute('href'))).toEqual([
      '/boards/1',
      '/boards/2',
      '/boards/3',
    ])
  })

  test('does not render placeholder links', () => {
    renderAdminBoards()

    for (const link of screen.getAllByRole('link')) {
      expect(link).not.toHaveAttribute('href', '#')
    }
  })

  test('opens boards in a new tab', () => {
    renderAdminBoards()

    for (const link of screen.getAllByRole('link')) {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  test('renders a distinct preview image and caption for each board', () => {
    renderAdminBoards()

    for (const board of boardPreviews) {
      const image = screen.getByAltText(`Preview of ${board.name}`)

      expect(image).toHaveAttribute('src', board.image)
      expect(screen.getByText(board.description)).toBeInTheDocument()
    }

    const sources = boardPreviews.map((board) => board.image)
    expect(new Set(sources).size).toBe(sources.length)
  })
})
