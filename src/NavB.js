import React from 'react'
import './NavB.css'

function NavB() {
  return (
      <div className='Navb'>
          <p className='Crypto-name'> Ctypto </p>
          <p className='Crypto-symbol'> Symbol </p>
          <p className='Crypto-price'> Current Price </p>
          <p className='Crypto-volume'> Volume</p>
          <p className='Crypto-pricechange'> Price Change(24hr) </p>
          <p className='Crypto-marketcap'> marketcap</p>
      </div>
  )
}

export default NavB