import React from 'react'
import Landing from '../components/Landing'
import Movies from '../components/Movies'
import TvShows from '../components/TvShows'
import Must from '../components/Must'

const Home = () => {
    return (
        <>
        <Landing/>
        <Movies />
        <TvShows/>
        <Must/>
        </>
    )
}

export default Home