import React from 'react'
import Card from '../components/Card'

const Favorites = ({ items, onAddToFavorite }) => {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between mb-40 align-center">
        <h1 className="">Мои Закладки</h1>
      </div>
      <div className=" sneakers d-flex flex-wrap">
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              {...item}
            ></Card>
          )
        })}
      </div>
    </div>
  )
}

export default Favorites
