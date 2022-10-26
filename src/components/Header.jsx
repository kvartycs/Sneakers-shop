import React from 'react'
import { Link } from 'react-router-dom'

import { useCart } from '../hooks/useCart'

const Header = (props) => {
  const { total, cartItems } = useCart()

  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to={'/'}>
          <img src="/img/logo.svg" alt="logo" />
          <div>
            <h3 className="">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </Link>
      </div>
      <ul className="d-flex ">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img src="/img/shopping cart.svg" alt="cart" />
          {cartItems.length !== 0 ? <span>{total} руб.</span> : ''}
        </li>
        <li className="mr-20 cu-p">
          <Link to={'/favorites'}>
            <img src="/img/like.svg" alt="like" />
          </Link>
        </li>
        <li>
          <Link to={'/orders'}>
            <img src="/img/profile.svg" alt="profile" />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
