import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Drawer from './components/Drawer'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    axios
      .get('https://634391fa2dadea1175a98d5a.mockapi.io/items')
      .then((res) => setItems(res.data))
    axios
      .get('https://634391fa2dadea1175a98d5a.mockapi.io/cart')
      .then((res) => setCartItems(res.data))
    axios
      .get('https://634391fa2dadea1175a98d5a.mockapi.io/favorite')
      .then((res) => setFavorites(res.data))
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://634391fa2dadea1175a98d5a.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj])
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((fav) => fav.id === fav.id)) {
        axios.delete(
          `https://634391fa2dadea1175a98d5a.mockapi.io/favorite/${obj.id}`
        )
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id))
      } else {
        const { data } = await axios.post(
          'https://634391fa2dadea1175a98d5a.mockapi.io/favorite',
          obj
        )
        setFavorites((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в закладки')
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://634391fa2dadea1175a98d5a.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer
          items={cartItems}
          onClickClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        ></Drawer>
      ) : null}
      <Header onClickCart={() => setCartOpened(true)}></Header>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              setSearchValue={setSearchValue}
            ></Home>
          }
        ></Route>
        <Route
          path="/favorites"
          element={
            <Favorites
              items={favorites}
              onAddToFavorite={onAddToFavorite}
            ></Favorites>
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
