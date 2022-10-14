import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
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
          <span>1205 руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to={'/favorites'}>
            <img src="/img/like.svg" alt="like" />
          </Link>
        </li>
        <li>
          <img src="/img/profile.svg" alt="profile" />
        </li>
      </ul>
    </header>
  )
}

export default Header
