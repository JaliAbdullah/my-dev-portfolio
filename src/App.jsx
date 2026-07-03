import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Toolkit from './components/Toolkit.jsx'
import Credentials from './components/Credentials.jsx'
import Labs from './components/Labs.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="font-body-md text-on-background text-body-md overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col gap-24">
        <Hero />
      </main>
      <Marquee />
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col gap-24">
        <Toolkit />
        <Credentials />
        <Labs />
      </main>
      <Footer />
    </div>
  )
}
