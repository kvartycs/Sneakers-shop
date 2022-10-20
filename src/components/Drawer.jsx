import axios from 'axios'
import React, { useContext, useState } from 'react'
import AppContext from '../context'
import Info from './Info'
import ContentLoader from 'react-content-loader'

const Drawer = ({ onClickClose, onRemove, items = [] }) => {
  const { cartItems, setCartItems } = useContext(AppContext)
  const [orderId, setOrderId] = useState(0)
  const [isOrderCompleted, setIsOrderCompleted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        'https://634391fa2dadea1175a98d5a.mockapi.io/orders',
        { items: cartItems }
      )
      setOrderId(data.id)
      setIsOrderCompleted(true)
      setCartItems([])
      axios.put('https://634391fa2dadea1175a98d5a.mockapi.io/cart', [])
    } catch (error) {
      alert('Не удалось создать заказ')
    }
    setIsLoading(false)
  }

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
          <Info
            title={isOrderCompleted ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderCompleted
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'
            }
            image={
              isOrderCompleted
                ? '/img/order completed.svg'
                : 'img/empty cart.svg'
            }
          ></Info>
        ) : (
          <div className="d-flex flex-column flex">
            <div className="items ">
              {items.map((obj) => {
                return (
                  <div
                    key={obj.id}
                    className="cartItem d-flex align-center mb-20"
                  >
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
              <button
                onClick={onClickOrder}
                disabled={isLoading}
                className="greenButton"
              >
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
