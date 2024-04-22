import {useState} from 'react'
import {AiFillLike} from 'react-icons/ai'
import './index.css'

const colorsArray = ['#F10C40', '#F1C40C', '#EB7A4C', '#83E4D4']

const ChatItem = ({chat}) => {
  const [likeCount, setLikeCount] = useState(0)

  const increaseLikeCount = () => {
    setLikeCount(likeCount + 1)
  }

  const {id, message, time, name, backgroundColor} = chat
  const firstLetter = name[0].toUpperCase()

  return (
    <li key={id}>
      <div className="name-time-container">
        <h3
          className="first-letter"
          style={{backgroundColor: colorsArray[backgroundColor]}}
        >
          {firstLetter}
        </h3>
        <p>{name}</p>
        <span>{time}</span>
      </div>
      <div className="message">
        <p>{message}</p>
      </div>
      <button type="button" className="like-button" onClick={increaseLikeCount}>
        <AiFillLike />
      </button>
      {likeCount > 0 && <span>{likeCount}</span>}
    </li>
  )
}

export default ChatItem
