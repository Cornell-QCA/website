import React from 'react'
import Blurb from './home/blurb/page'
import Apply from './home/apply/page'
import Projects from './home/projects/page'
import People from './home/people/page'
import Events from './home/events/page'
import Logo from './home/logo/page'
import Links from './home/links/page'

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