import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
    console.log(this.state)
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  getUlContainer = () => {
    const {commentsList} = this.state
    const jsxElement = (
      <ul>
        {commentsList.map(eachComment => (
          <CommentItem
            key={eachComment.id}
            bgClassNames={initialContainerBackgroundClassNames}
            commentDetails={eachComment}
          />
        ))}
      </ul>
    )
    return jsxElement
  }

  render() {
    const {commentsList, name, comment} = this.state

    const jsxElement = (
      <div className="comments-bg-container">
        <div className="comment-sub-container">
          <div className="comment-input-container">
            <div className="input-sub-container">
              <h1 className="heading">Comments</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="comment-img sm-image"
              />
              <p className="paragraph">Say something about 4.0 Technologies</p>
              <form onSubmit={this.onAddComment} className="form-container">
                <input
                  value={name}
                  placeholder="Your Name"
                  onChange={this.changeName}
                  className="text-input"
                />
                <textarea
                  rows="8"
                  cols="55"
                  placeholder="Your Comment"
                  onChange={this.changeComment}
                  className="text-input"
                  value={comment}
                >
                  {comment}
                </textarea>
                <button type="submit" className="add-comment-btn">
                  Add Comment
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-img lg-image"
            />
          </div>
          <hr />
          <div className="comment-count-container">
            <p className="comment-count">0</p>
            <p className="count-description">Comments</p>
          </div>
          {commentsList.length === 0 ? '' : this.getUlContainer()}
        </div>
      </div>
    )
    return jsxElement
  }
}
export default Comments
