import React from 'react'

const Drawer = ({ onClickClose, onRemove, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between ">
          Корзина
          <img
            onClick={onClickClose}
            className="removeBtn cu-p "
            src="/img/btn-remove.svg"
            alt="close"
          />
        </h2>

        {items.length === 0 ? (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty cart.svg"
              alt="empty"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ
            </p>
            <button onClick={onClickClose} className="greenButton">
              <img src="/img/arrow.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        ) : (
          <div className="">
            <div className="items ">
              {items.map((obj) => {
                return (
                  <div className="cartItem d-flex align-center mb-20">
                    <div
                      style={{
                        backgroundImage: `url('${obj.imageUrl}')`,
                      }}
                      className="cartItemImg"
                    ></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.title}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className="removeBtn"
                      src="/img/btn-remove.svg"
                      alt="remove"
                    />
                  </div>
                )
              })}
            </div>
            <div className="cartTotalBlock">
              <ul className="">
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Drawer
