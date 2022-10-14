import React from 'react'
import Card from '../components/Card'

const Home = ({
  items,
  searchValue,
  onAddToCart,
  onChangeSearchInput,
  setSearchValue,
  onAddToFavorite,
}) => {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between mb-40 align-center">
        <h1 className="">
          {searchValue
            ? `Поиск по запросу: ${searchValue}...`
            : 'Все кроссовки'}
        </h1>
        <div className="search-block">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue('')}
              className="removeBtn cu-p "
              src="/img/btn-remove.svg"
              alt="close"
            />
          )}
          <input
            value={searchValue}
            onChange={onChangeSearchInput}
            type="text"
            name=""
            id=""
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className=" sneakers d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => {
                  return onAddToFavorite(obj)
                }}
                onPlus={(obj) => {
                  return onAddToCart(obj)
                }}
              ></Card>
            )
          })}
      </div>
    </div>
  )
}

export default Home
