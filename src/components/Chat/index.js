import {useState} from 'react'
import {MdOutlineEmojiEmotions} from 'react-icons/md'
import EmojiPicker from 'emoji-picker-react'
import {v4 as uuid} from 'uuid'
import {IoClose} from 'react-icons/io5'
import Header from '../Header'
import ChatItem from '../ChatItem'
import './index.css'

const messageArray = [
  {
    id: uuid(),
    name: 'Alan',
    time: '12:30:00 AM',
    message: 'Hello welcome to the team.',
    backgroundColor: 0,
  },
]

const users = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']

const Chat = () => {
  const [showEmojis, setShowEmojis] = useState(false)
  const [text, setText] = useState('')
  const [messages, updateMessages] = useState(messageArray)

  const updateText = e => {
    setText(e.target.value)
  }

  const sendMessage = () => {
    setShowEmojis(false)
    const randomUser = users[Math.round(Math.random() * 4)]
    const backgroundColor = Math.round(Math.random() * 3)
    const date = new Date()
    const time = date.toLocaleTimeString()
    const messageDetails = {
      id: uuid(),
      name: randomUser,
      time,
      message: text,
      backgroundColor,
    }
    setText('')
    updateMessages([...messages, messageDetails])
  }

  const onEmojiClick = emojiList => {
    setText(text + emojiList.emoji)
  }

  const toggleShowEmojis = () => {
    setShowEmojis(!showEmojis)
  }

  return (
    <div className="chat-app">
      <Header />
      <hr />
      <div className="chat">
        <div className="chat-container">
          <div className="message-container">
            <ul>
              {messages.map(chat => (
                <ChatItem chat={chat} key={chat.id} />
              ))}
            </ul>
          </div>
          <div className="input-container">
            <input type="text" onChange={updateText} value={text} />
            <button type="button" onClick={toggleShowEmojis}>
              <MdOutlineEmojiEmotions size={30} />
            </button>
            <button type="button" className="send-btn" onClick={sendMessage}>
              send
            </button>
          </div>
          {showEmojis && (
            <div className="emoji-container">
              <button
                type="button"
                onClick={toggleShowEmojis}
                className="close-btn"
              >
                <IoClose size={18} />.
              </button>
              <EmojiPicker open={showEmojis} onEmojiClick={onEmojiClick} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Chat
