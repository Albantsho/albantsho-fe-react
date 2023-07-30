import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

export const NewLanding = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VideoPlayer />
      <Footer />
    </main>
  )
}
