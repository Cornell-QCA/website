import React from 'react'
import Page from './coffee_chats/page'
import Blurb from './components/blurb/page'
import Apply from './components/apply/page'
import Projects from './components/projects/page'
import People from './components/people/page'
import Events from './components/events/page'
import Logo from './components/logo/page'

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