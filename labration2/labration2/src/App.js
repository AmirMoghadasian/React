import { useState, useEffect } from 'react'
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import AddItemForm from './components/AddItemForm';
import Header from './components/Header';
import ShoppingList from './components/ShoppingList';
import Modal from './components/Modal';

const App = () => {

  const [showModal, setShowModal] = useState(false)

  const [items, setItems] = useState([])


  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('listItems'))
    if (storedItems?.length) {
      setItems(storedItems)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('listItems', JSON.stringify(items))
  }, [items])

  const clearList = () => {
    setItems([])
    setShowModal(false)
  }

  const changeItem = (item, newText) => {
    item.product = newText
    setItems(state => [...state])

  }

  const addItem = product => {
    setItems(state => {
      return [{ id: uuidv4(), product, completed: false }, ...state]
    })

  }

  const toggleComplete = item => {
    item.completed = !item.completed
    setItems(state => {
      state.sort((a, b) => a.completed - b.completed)
      return [...state]
    })

  }

  const removeItem = id => {
    setItems(state => state.filter(item => item.id !== id))

  }

  return (
    <div className='App container'>
      <Header title="Shopping List" openModal={setShowModal} />
      <ShoppingList items={items} toggleComplete={toggleComplete} removeItem={removeItem} changeItem={changeItem} />
      <AddItemForm addItem={addItem} />
      {showModal && <Modal setShowModal={setShowModal} clearList={clearList} />}
    </div>
  )
}

export default App