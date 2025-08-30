import Hero from "./components/Hero"
import IntroductionStory from "./components/IntroductionStory"
import Advantage from "./components/Advantage"
import Product from "./components/Product"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import Contact from "./components/Contact"
import FloatingActionButton from "./components/FloatingActionButton"

export default function Home() {
  return (
    <>
      <Hero />
      <IntroductionStory />
      <Advantage />
      <Product />
      <Timeline />
      <Marquee />
      <Contact />
      <FloatingActionButton />
    </>
  )
}
