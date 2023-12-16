// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const LIKE_IMG_URL =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

const LIKED_IMG_URL =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

const CommentItem = props => {
  const {commentDetails, isLikedMark, clickDel} = props
  const {name, comment, date, isLiked, id, bgClassNames} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeText = isLiked ? 'button like-text-style' : 'button'
  const clickOnLike = () => {
    isLikedMark(id)
  }
  const clickOnDelete = () => {
    clickDel(id)
  }
  const jsxElement = (
    <li className="comment-li-container">
      <div className="name-comment-container">
        <div className={bgClassNames}>
          <p className="initial">{initial}</p>
        </div>
        <div className="name-sub">
          <div className="name-date-container">
            <p className="username">{name}</p>
            <p className="time">{formatDistanceToNow(date)}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <img
            src={isLiked ? LIKED_IMG_URL : LIKE_IMG_URL}
            alt="like"
            className="like-image"
          />
          <button type="button" className={likeText} onClick={clickOnLike}>
            Like
          </button>
        </div>

        <button
          type="button"
          data-testid="delete"
          onClick={clickOnDelete}
          className="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
  return jsxElement
}
export default CommentItem

