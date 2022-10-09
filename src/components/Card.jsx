import React from 'react'

const Card = () => {
  return (
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
  )
}

export default Card
