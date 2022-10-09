import React from 'react'
import Card from './components/Card'
import Drawer from './components/Drawer'
import Header from './components/Header'

function App() {
  return (
    <div className="wrapper clear">
      <Drawer></Drawer>
      <Header></Header>
      <div className="content p-40">
        <div className="d-flex justify-between mb-40 align-center">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input type="text" name="" id="" placeholder="Поиск..." />
          </div>
        </div>

        <div className=" sneakers d-flex">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  )
}

export default App
