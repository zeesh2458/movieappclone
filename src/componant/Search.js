import React from 'react'
import { GlobleCustomHook } from './context'

function Search() {
  const { query, setQuery, isError } = GlobleCustomHook()
  return (
    <section className='search-section'>
      <div>
        <h4>Search Your Favourite Movie</h4>
      </div>
      <form action="#" onSubmit={(e) => { e.preventDefault() }}>
        <input type="text" placeholder='search here' value={query} className='form-input'
          onChange={(e) => setQuery(e.target.value)} />
      </form>
      <div className='error'>
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  )
}

export default Search
