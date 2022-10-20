import React from 'react'
import Card from '../components/Card'

const Home = ({
  cartItems,
  items,
  searchValue,
  onAddToCart,
  onChangeSearchInput,
  setSearchValue,
  onAddToFavorite,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => {
      return (
        <Card
          key={index}
          onFavorite={(obj) => {
            return onAddToFavorite(obj)
          }}
          onPlus={(obj) => {
            return onAddToCart(obj)
          }}
          loading={isLoading}
          {...item}
        ></Card>
      )
    })
  }
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
      {console.log(cartItems, items)}
      <div className=" sneakers d-flex flex-wrap">{renderItems()}</div>
    </div>
  )
}

export default Home
