import { useState } from 'react'
import './App.css'
import Post from './components/Post'

const App = () => {

  const handleClick = () => {
    setButtonText('User:Amir Moghadasian');
  }
  
  const [buttonText, setButtonText] = useState('Click for  login ');

  const [posts] = useState([
    {
      id: 1,
      BookName: 'Finding Me',
      Author: ' Viola Davis',
      AboutBook: 'A breathtaking memoir...I was so moved by this book. Oprah It is startlingly honest and, at times, a jaw-dropping read, charting her rise from poverty and abuse to becoming the first African-American to win the triple crown of an Oscar, Emmy and Tony for acting.'
    },
    {
      id: 2,
      BookName: 'The Year of the Horses',
      Author: ' Courtney Maum',
      AboutBook: 'The Year of the Horses tells the story of how Maums renewed connections with horses and related changes in herself saved her marriage—she confesses to having been unfaithful—how they saved her relationship with her daughter, her own mental health, and her writing ',
    },
    {
      id: 3,
      BookName: 'I will Show Myself Out',
      Author: ' Jessi Klein',
      AboutBook: 'The eagerly anticipated second essay collection from Jessi Klein, author of the acclaimed New York Times bestselling debut You will Grow Out of It.“Sometimes I think about how much bad news there is to ...',
    },
    {
      id: 4,
      BookName: 'The Puzzler',
      Author: ' A.J. Jacobs',
      AboutBook: 'The New York Times bestselling author of The Year of Living Biblically goes on a rollicking journey to understand the enduring power of puzzles: why we love them, what they do to our brains, and how they can improve our world.'
    }
  ])



  
  return (
  
    <div className='text-center mb-2  '>
      

      <div className="container">
        
        <div className='mb-2'>
          <button className='btn-b' onClick={handleClick}>{buttonText}</button>
        </div>
        
        {handleClick && posts.map(post => (
          <Post key={post.id} BookName={post.BookName} AboutBook={post.AboutBook} Author={post.Author} />
        ))}

       

      </div>
    </div>
  )
}

export default App