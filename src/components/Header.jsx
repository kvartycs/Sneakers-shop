import React from 'react'

const Header = () => {
  return (
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
  )
}

export default Header
