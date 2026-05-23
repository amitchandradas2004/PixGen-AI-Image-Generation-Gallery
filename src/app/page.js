import BannerPage from "./Components/Banner/Banner";
import MarqueeLayout from "./Components/Banner/Marquee";
import Pricing from "./Components/Pricing/Pricing";

export default function Home() {
  return (
    <div>
      <BannerPage />
      <MarqueeLayout />
      {/* Top Generations will be here */}
      <Pricing />
    </div>
  );
}
