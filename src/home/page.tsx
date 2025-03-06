import Apply from "../components/apply/page"
import Blurb from "../components/blurb/page"
import Events from "../components/events/page"
import Links from "../components/links/page"
import Logo from "../components/logo/page"
import People from "../components/people/page"
import Projects from "../components/projects/page"

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