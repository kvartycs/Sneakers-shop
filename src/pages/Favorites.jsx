import React, { useContext } from 'react'
import Card from '../components/Card'
import AppContext from '../context'

const Favorites = () => {
  const { favorites, onAddToFavorite } = useContext(AppContext)

  return (
    <div className="content p-40">
      <div className="d-flex justify-between mb-40 align-center">
        <h1 className="">Мои Закладки</h1>
      </div>
      <div className=" sneakers d-flex flex-wrap">
        {favorites.map((item, index) => {
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
