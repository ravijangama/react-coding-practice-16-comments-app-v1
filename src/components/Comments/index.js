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
    const randomBgClassNames =
      initialContainerBackgroundClassNames[
        Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
      ]
    const initialBgClassNames = `initial-container ${randomBgClassNames}`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      bgClassNames: initialBgClassNames,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  getIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  clockOnDelBtn = commentId => {
    const {commentsList} = this.state
    this.setState({
      commentsList: commentsList.filter(
        eachComment => eachComment.id !== commentId,
      ),
    })
  }

  getUlContainer = () => {
    const {commentsList} = this.state
    const jsxElement = (
      <ul className="ul-container">
        {commentsList.map(eachComment => (
          <CommentItem
            key={eachComment.id}
            commentDetails={eachComment}
            isLikedMark={this.getIsLiked}
            clickDel={this.clockOnDelBtn}
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
          <h1 className="app-heading">Comments</h1>
          <div className="comment-input-container">
            <form onSubmit={this.onAddComment} className="form-container">
              <p className="paragraph">Say something about 4.0 Technologies</p>
              <input
                value={name}
                placeholder="Your Name"
                onChange={this.changeName}
                className="text-input"
              />
              <textarea
                rows="8"
                placeholder="Your Comment"
                onChange={this.changeComment}
                className="text-input"
                value={comment}
              />
              <button type="submit" className="add-comment-btn">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-img"
            />
          </div>
          <hr className="line" />
          <p className="count-description">
            <span className="comment-count">{commentsList.length}</span>
            Comments
          </p>
          {this.getUlContainer()}
        </div>
      </div>
    )
    return jsxElement
  }
}
export default Comments
