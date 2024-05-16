import React, { useState, useEffect } from 'react'
import {  NavLink, useParams } from 'react-router-dom'
import { URL_API } from './context'

function Singlemovie() {
  const { id } = useParams()
  const [movies, setMovies] = useState("")

  const myData = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      if (data.Response === "True") {

        setMovies(data)
      }
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    let timerOut = setTimeout(() => {
      myData(`${URL_API}&i=${id}`)
    }, 800);
    // useEffect return cleanup function
    return (() => {
      clearTimeout(timerOut)
    })
  }, [id])

  const { Title, Poster, Actors, Awards, Country, Year, Director, Genre, Language } = movies
  return (
    <>
      <section className='card-section'>
        <div className="card-details">
          <div className='details-image'>
            <img src={Poster} alt="" />
          </div>
          <div className='details'>
            <h4>{Title}</h4>
            <p><b>Actors:</b> {Actors}</p>
            <p><b>Director:</b> {Director}</p>
            <p><b>Language:</b> {Language}</p>
            <p><b>Genre:</b> {Genre}</p>
            <p><b>Year:</b> {Year}</p>
            <p><b>Country:</b> {Country}</p>
            <p><b>Awards:</b> {Awards}</p>
            <NavLink to="/" className="button">Go Home</NavLink>
          </div>
        </div>
      </section>
    </>

  )
}

export default Singlemovie