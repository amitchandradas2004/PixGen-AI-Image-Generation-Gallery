import BannerPage from "./Components/Banner/Banner";
import MarqueeLayout from "./Components/Banner/Marquee";
import Featured from "./Components/Featured/Featured";
import Pricing from "./Components/Pricing/Pricing";

export default function Home() {
  return (
    <div>
      <BannerPage />
      <MarqueeLayout />
      <Featured />
      <Pricing />
    </div>
  );
}
