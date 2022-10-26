import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const Orders = () => {
  const [orders, setOrders] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          'https://634391fa2dadea1175a98d5a.mockapi.io/orders'
        )
        setOrders(data.reduce((sum, obj) => [...sum, ...obj.items], []))
        setIsLoading(false)
      } catch (error) {
        alert('Ошибка', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="content p-40">
      <div className="d-flex justify-between mb-40 align-center">
        <h1 className="">Мои заказы</h1>
      </div>
      <div className=" sneakers d-flex flex-wrap">
        {(isLoading ? [...Array(4)] : orders).map((item, index) => {
          return <Card key={index} loading={isLoading} {...item}></Card>
        })}
      </div>
    </div>
  )
}

export default Orders
