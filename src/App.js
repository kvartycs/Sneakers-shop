import React from 'react'

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between ">
            Корзина
            <img
              className="removeBtn cu-p "
              src="/img/btn-remove.svg"
              alt="remove"
            />
          </h2>

          <div className="items ">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{
                  backgroundImage: 'url("img/sneakers/air max 270.svg")',
                }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{
                  backgroundImage: 'url("img/sneakers/air max 270.svg")',
                }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul className="">
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>

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
          <li className="mr-20">
            <img src="/img/like.svg" alt="like" />
          </li>
          <li>
            <img src="/img/profile.svg" alt="profile" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex justify-between mb-40 align-center">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input type="text" name="" id="" placeholder="Поиск..." />
          </div>
        </div>

        <div className=" sneakers d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/unliked.svg" alt="unliked" />
            </div>
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
