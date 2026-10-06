import { Link } from 'react-router-dom'
import board1Image from 'src/assets/img/boards/board-1.png'
import board2Image from 'src/assets/img/boards/board-2.png'
import board3Image from 'src/assets/img/boards/board-3.png'
import './AdminBoards.scss'

interface BoardPreview {
  id: number
  name: string
  description: string
  image: string
}

/**
 * Static previews of the implemented boards.
 *
 * Custom boards don't exist yet, so these are screenshots of
 * the boards in `src/apps/boards/pages`.
 */
export const boardPreviews: BoardPreview[] = [
  {
    id: 1,
    name: 'Board 1',
    description: 'Clock and track queue, with a customizable layout',
    image: board1Image,
  },
  {
    id: 2,
    name: 'Board 2',
    description: 'Flip clock and track queue',
    image: board2Image,
  },
  {
    id: 3,
    name: 'Board 3',
    description: 'Clock, video, and track queue',
    image: board3Image,
  },
]

export const AdminBoards = () => {
  return (
    <>
      <div>
        <div className="header">Boards</div>
        <div className="grid board-previews">
          {boardPreviews.map((board) => (
            <Link
              key={board.id}
              to={`/boards/${board.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="col-4 board-preview"
            >
              <img
                src={board.image}
                className="boardImage"
                alt={`Preview of ${board.name}`}
              />
              <div className="board-preview__caption">
                <span className="board-preview__name">{board.name}</span>
                <span className="board-preview__description">
                  {board.description}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
