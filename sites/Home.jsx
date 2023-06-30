import React from 'react'
import Landing from '../components/Landing'
import Movies from '../components/Movies'
import TvShows from '../components/TvShows'
import Must from '../components/Must'
import Search from '../components/Search'
import Results from '../components/Results'

const Home = () => {
    return (
        <>
        <Landing/>
        <Search/>
        <Results/>
        <Movies />
        <TvShows/>
        <Must/>
        </>
    )
}

export default Home