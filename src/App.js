import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

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
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://634391fa2dadea1175a98d5a.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj])
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://634391fa2dadea1175a98d5a.mockapi.io/favorite', obj)
    setFavorites((prev) => [...prev, obj])
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
      <div className="content p-40">
        <div className="d-flex justify-between mb-40 align-center">
          <h1 className="">
            {searchValue
              ? `Поиск по запросу: ${searchValue}...`
              : 'Все кроссовки'}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="removeBtn cu-p "
                src="/img/btn-remove.svg"
                alt="close"
              />
            )}
            <input
              value={searchValue}
              onChange={onChangeSearchInput}
              type="text"
              name=""
              id=""
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className=" sneakers d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onFavorite={(obj) => {
                    return onAddToFavorite(obj)
                  }}
                  onPlus={(obj) => {
                    return onAddToCart(obj)
                  }}
                ></Card>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default App
