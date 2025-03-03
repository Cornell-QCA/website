import React from 'react'
import Blurb from './blurb/page'
import Apply from './apply/page'
import Projects from './projects/page'
import People from './people/page'
import Events from './events/page'
import Logo from './logo/page'
import Links from './links/page'

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
                <div id="apply">
                    <Apply />
                </div>
                <div id="links">
                    <Links />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="people">
                    <People />
                </div>
                <div id="events">
                    <Events />
                </div>
            </div>
        </>
    )
}

export default Home