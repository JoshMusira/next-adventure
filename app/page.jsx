import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import LatestPosts from "@/components/LatestPosts"
import Navbar from "@/components/Navbar"

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <LatestPosts />
      <Footer />
    </div>
  )
}

export default Home