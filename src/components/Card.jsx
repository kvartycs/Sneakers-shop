import React from 'react'
import { useState } from 'react'

const Card = (props) => {
  const [isAdded, setIsAdded] = useState(false)

  const onClickPlus = () => {
    setIsAdded(!isAdded)
  }

  return (
    <div className="card">
      <div className="favorite" onClick={props.onClickFavorite}>
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
      <p>{props.title}</p>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
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
