import React from 'react'
import ContentLoader from 'react-content-loader'
import { useState } from 'react'
import AppContext from '../context'
import { useContext } from 'react'

const Card = ({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) => {
  const [isFavorite, setIsFavorite] = useState(favorited)
  const { isItemAdded } = useContext(AppContext)
  const obj = { id, parentId: id, title, imageUrl, price }

  const onClickPlus = () => {
    onPlus(obj)
  }
  const onClickFavorite = () => {
    onFavorite(obj)
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="card">
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={220}
          viewBox="0 0 150 220"
          backgroundColor="#f3f3f3"
          foregroundColor="#e7f6ff"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="110" />
          <rect x="2" y="118" rx="5" ry="5" width="145" height="18" />
          <rect x="0" y="154" rx="5" ry="5" width="100" height="18" />
          <rect x="0" y="190" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="185" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className="favorite" onClick={onClickFavorite}>
              <img
                src={isFavorite ? 'img/liked.svg' : '/img/unliked.svg'}
                alt="like"
              />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="sneakers" />
          <p>{title}</p>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>

            {onPlus && (
              <img
                className="plus"
                src={
                  isItemAdded(id) ? 'img/btn-checked.svg' : 'img/btn-plus.svg'
                }
                alt="plus"
                onClick={onClickPlus}
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Card
