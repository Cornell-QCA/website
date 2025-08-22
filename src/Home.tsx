import React from 'react'
import Blurb from './components/home/blurb'
import Logo from './components/home/logo'

const Home: React.FC = () => {
    return (
        <>
            <div className='w-full max-w-screen-xl mx-auto'>
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