import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import AppContext from './context'
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
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const cartResponse = await axios.get(
        'https://634391fa2dadea1175a98d5a.mockapi.io/cart'
      )

      const favoritesResponse = await axios.get(
        'https://634391fa2dadea1175a98d5a.mockapi.io/favorite'
      )
      const itemsResponse = await axios.get(
        'https://634391fa2dadea1175a98d5a.mockapi.io/items'
      )
      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }
    fetchData()
  }, [])

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        )
        axios.delete(
          `https://634391fa2dadea1175a98d5a.mockapi.io/cart/${obj.id}`
        )
      } else {
        axios.post('https://634391fa2dadea1175a98d5a.mockapi.io/cart', obj)
        setCartItems((prev) => [...prev, obj])
      }
    } catch (error) {
      alert('Не удалось добавить в корзину')
      console.log(error)
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((fav) => Number(fav.id) === Number(obj.id))) {
        axios.delete(
          `https://634391fa2dadea1175a98d5a.mockapi.io/favorite/${obj.id}`
        )
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        )
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{
        cartItems,
        favorites,
        items,
        isItemAdded,
        onAddToCart,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
      }}
    >
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
                cartItems={cartItems}
                items={items}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                setSearchValue={setSearchValue}
                isLoading={isLoading}
              ></Home>
            }
          ></Route>
          <Route path="/favorites" element={<Favorites></Favorites>}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
