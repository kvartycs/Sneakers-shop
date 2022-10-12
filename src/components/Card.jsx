import React from 'react'
import { useState } from 'react'

const Card = ({ title, imageUrl, price, onFavorite, onPlus }) => {
  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price })
    setIsAdded(!isAdded)
  }
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="card">
      <div className="favorite" onClick={onClickFavorite}>
        <img
          src={isFavorite ? 'img/liked.svg' : '/img/unliked.svg'}
          alt="like"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <p>{title}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>

        <img
          className="plus"
          src={isAdded ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
          alt="plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  )
}

export default Card
