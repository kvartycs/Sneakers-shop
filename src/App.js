import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

function App() {
  const [items, setItems] = useState([])

  const [cartOpened, setCartOpened] = useState(false)

  useEffect(() => {
    fetch('https://634391fa2dadea1175a98d5a.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => setItems(json))
  }, [])

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer onClickClose={() => setCartOpened(false)}></Drawer>
      ) : null}
      <Header onClickCart={() => setCartOpened(true)}></Header>
      <div className="content p-40">
        <div className="d-flex justify-between mb-40 align-center">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input type="text" name="" id="" placeholder="Поиск..." />
          </div>
        </div>
        <div className=" sneakers d-flex flex-wrap">
          {items.map((obj) => {
            return (
              <Card
                title={obj.name}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClickFavorite={() => console.log('Закладки')}
                onClickPlus={() => console.log('Плюс')}
              ></Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
