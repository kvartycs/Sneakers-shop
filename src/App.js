import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import AppContext from './context'
import Drawer from './components/Drawer/Drawer'
import Header from './components/Header'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Orders from './pages/Orders'

function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [cartOpened, setCartOpened] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get('https://634391fa2dadea1175a98d5a.mockapi.io/cart'),
            axios.get('https://634391fa2dadea1175a98d5a.mockapi.io/favorite'),
            axios.get('https://634391fa2dadea1175a98d5a.mockapi.io/items'),
          ])

        setIsLoading(false)

        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
      } catch (error) {
        alert('Ошибка', error)
      }
    }
    fetchData()
  }, [])

  const onAddToCart = async (obj) => {
    const findItem = cartItems.find(
      (item) => Number(item.parentId) === Number(obj.id)
    )
    try {
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        )
        await axios.delete(
          `https://634391fa2dadea1175a98d5a.mockapi.io/cart/${findItem.id}`
        )
      } else {
        setCartItems((prev) => [...prev, obj])
        const { data } = await axios.post(
          'https://634391fa2dadea1175a98d5a.mockapi.io/cart',
          obj
        )
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return { ...item, id: data.id }
            }
            return item
          })
        )
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
    try {
      axios.delete(`https://634391fa2dadea1175a98d5a.mockapi.io/cart/${id}`)
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      )
    } catch (error) {
      alert('Ошибка при удалении из корзины')
      console.error(error)
    }
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
        <Drawer
          items={cartItems}
          onClickClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        ></Drawer>

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
          <Route path="/orders" element={<Orders></Orders>}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
