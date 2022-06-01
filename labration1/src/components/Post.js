import { useState } from 'react'
import './Post.css'

const Post = ({ BookName, Author, AboutBook }) => {

  const [isRead, setIsRead] = useState(false)

  const setTheme = () => {
    setIsRead(state => !state)
  }

  return (
    
     
    <div className={`post card mb-2 ${isRead && 'Read'}`}>
      <h2>{BookName}</h2>
      <p>by{Author}</p>
      <p>About book:  {AboutBook}</p>
      <button className='btn-n' onClick={setTheme}>{isRead ? 'Unread' : 'Read more'}</button>
    </div>
  )
}

export default Post