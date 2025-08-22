import React from 'react'
import Blurb from './components/home/blurb'
import Logo from './components/home/logo'

const Home: React.FC = () => {
    return (
        <>
            <div className='max-w-screen-xl'>
                <div id="home">
                    <Logo />
                </div>
                <div id="blurb">
                    <Blurb />
                </div>
            </div>
        </>
    )
}

export default Home