import AppContext from '../context'
import { useContext } from 'react'

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext)
  const total = cartItems.reduce((sum, obj) => {
    return (sum += obj.price)
  }, 0)
  return { cartItems, setCartItems, total }
}
