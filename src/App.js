import React from 'react'

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img src="/img/logo.svg" alt="logo" />
          <div>
            <h3 className="">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex ">
          <li className="mr-30">
            <img src="/img/shopping cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/profile.svg" alt="profile" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        <div className=" sneakers d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/nike blazer.svg"
              alt="sneakers"
            />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="plus">
                <img width={11} height={11} src="img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/air max 270.svg"
              alt="sneakers"
            />
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="plus">
                <img width={11} height={11} src="img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/nike blazer white.svg"
              alt="sneakers"
            />
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="plus">
                <img width={11} height={11} src="img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/puma aka boku.svg"
              alt="sneakers"
            />
            <p>Кроссовки Puma X Aka Boku Future Rider</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="plus">
                <img width={11} height={11} src="img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
