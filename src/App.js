import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import Coin from './Coin.js'
import NavB from './NavB'

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] =useState('')

  useEffect( () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    }).catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoin = coins.filter(coin => 
    coin.symbol.toLowerCase().includes(search.toLowerCase())
    )



  return (
    <div className="App">
      <div className='coin-search'>
        <h1 className='coin-text' > Search a Currency</h1>
        <form>
          <input 
          type='text'
          className='coin-input'
          placeholder='Search'
          onChange={handleChange}
          />
        </form>
      </div>
      <NavB />
      <p>
        {filteredCoin.map(coin => {
          return (
            <Coin
            key={coin.id}
            name={coin.name} 
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            />
          )
        })}
      </p>
    </div>
  );
}

export default App;
