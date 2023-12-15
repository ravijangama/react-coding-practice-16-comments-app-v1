// Write your code here
const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment} = commentDetails
  const jsxElement = (
    <li>
      <div>
        <p>{name.splice(0, 1)}</p>
        <div>
          <div>
            <p>{name}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
    </li>
  )
  return jsxElement
}
export default CommentItem
