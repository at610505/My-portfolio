import FeaturedWork from "./Components/FeaturedWork";
import HeroSection from "./Components/HeroSection";
import HomeBlog from "./Components/HomeBlog";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <HomeBlog/>
      <FeaturedWork/>
    </div>
  );
}
