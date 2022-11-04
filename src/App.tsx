import About from 'components/About'
import Footer from 'components/Footer'
import Home from 'components/Home'
import Navbar from 'components/Navbar'
import Projects from 'components/Projects'
import Root from 'components/Root'

export default function () {
  return (
    <Root>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </Root>
  )
}
